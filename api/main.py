import sys
from pathlib import Path

sys.path.append(str(Path(__file__).resolve().parent))

from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, HTTPException, Query, Depends
from datetime import datetime, timezone
from typing import List, Dict, Optional
from pydantic import BaseModel, Field
from os import getenv
import logging
from sqlalchemy.orm import Session

from database import initialize_database, get_db
from database.models import Family, Child, Adjustment
from services.family_service import FamilyService
from services.child_service import ChildService
from services.adjustment_service import AdjustmentService

initialize_database()

IS_DEBUG: bool = getenv('IS_DEBUG', '').lower() in ('true', '1')
LOG_DATE_FORMAT = '%Y-%m-%d %H:%M:%S'

if IS_DEBUG:
    from rich.logging import Console, RichHandler

    logging.basicConfig(
        format='[%(module)s.%(funcName)s:%(lineno)d]: %(message)s',
        level=logging.INFO,
        handlers=[RichHandler(rich_tracebacks=True, console=Console(width=150))],
        datefmt=LOG_DATE_FORMAT,
    )
else:
    logging.basicConfig(
        format='%(asctime)s [%(levelname)s] %(name)s [%(module)s.%(funcName)s:%(lineno)d]: %(message)s',
        level=logging.INFO,
        datefmt=LOG_DATE_FORMAT,
    )

app = FastAPI(
    title="Kids Points Tracker API",
    docs_url="/api/docs",
    openapi_url="/api/openapi.json",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Family(BaseModel):
    id: str
    name: str
    join_code: str
    created_at: datetime
    updated_at: datetime
    stats: Dict[str, int]

    class Config:
        from_attributes = True

class Child(BaseModel):
    id: str
    family_id: str
    name: str
    score: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

class Adjustment(BaseModel):
    id: str
    child_id: str
    delta: int
    note: Optional[str] = None
    created_at: datetime

    class Config:
        from_attributes = True

class CreateFamilyRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=60)

class CreateChildRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=40)

class UpdateFamilyRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=60)

class UpdateChildRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=40)

class AdjustScoreRequest(BaseModel):
    delta: int
    note: Optional[str] = None





@app.post("/api/families", response_model=Family)
async def create_family(request: CreateFamilyRequest, db: Session = Depends(get_db)):
    db_family = FamilyService.create_family(db, request.name)
    stats = FamilyService.get_family_stats(db, db_family.id)

    return Family(
        id=db_family.id,
        name=db_family.name,
        join_code=db_family.join_code,
        created_at=db_family.created_at,
        updated_at=db_family.updated_at,
        stats=stats
    )

@app.get("/api/families/by-code/{code}")
async def get_family_by_code(code: str, db: Session = Depends(get_db)):
    family = FamilyService.get_family_by_code(db, code)
    if not family:
        raise HTTPException(status_code=404, detail="العائلة غير موجودة")

    stats = FamilyService.get_family_stats(db, family.id)
    return {"id": family.id, "name": family.name, "stats": stats}

@app.get("/api/families/{family_id}")
async def get_family_details(family_id: str, code: str = Query(...), db: Session = Depends(get_db)):
    if not FamilyService.verify_join_code(db, family_id, code):
        raise HTTPException(status_code=403, detail="رمز الانضمام غير صحيح")

    family = FamilyService.get_family_by_id(db, family_id)
    if not family:
        raise HTTPException(status_code=404, detail="العائلة غير موجودة")

    children = ChildService.get_family_children(db, family_id)
    recent_adjustments = AdjustmentService.get_recent_adjustments(db, family_id)
    stats = FamilyService.get_family_stats(db, family_id)

    family_response = Family(
        id=family.id,
        name=family.name,
        join_code=family.join_code,
        created_at=family.created_at,
        updated_at=family.updated_at,
        stats=stats
    )

    return {
        "family": family_response,
        "children": children,
        "recent_adjustments": recent_adjustments
    }

@app.patch("/api/families/{family_id}", response_model=Family)
async def update_family(family_id: str, request: UpdateFamilyRequest, code: str = Query(...), db: Session = Depends(get_db)):
    if not FamilyService.verify_join_code(db, family_id, code):
        raise HTTPException(status_code=403, detail="رمز الانضمام غير صحيح")

    db_family = FamilyService.update_family(db, family_id, request.name)
    stats = FamilyService.get_family_stats(db, family_id)

    return Family(
        id=db_family.id,
        name=db_family.name,
        join_code=db_family.join_code,
        created_at=db_family.created_at,
        updated_at=db_family.updated_at,
        stats=stats
    )

@app.post("/api/families/{family_id}/children", response_model=Child)
async def create_child(family_id: str, request: CreateChildRequest, code: str = Query(...), db: Session = Depends(get_db)):
    if not FamilyService.verify_join_code(db, family_id, code):
        raise HTTPException(status_code=403, detail="رمز الانضمام غير صحيح")

    if not FamilyService.get_family_by_id(db, family_id):
        raise HTTPException(status_code=404, detail="العائلة غير موجودة")

    child = ChildService.create_child(db, family_id, request.name)
    return child

@app.patch("/api/families/{family_id}/children/{child_id}", response_model=Child)
async def update_child(family_id: str, child_id: str, request: UpdateChildRequest, code: str = Query(...), db: Session = Depends(get_db)):
    if not FamilyService.verify_join_code(db, family_id, code):
        raise HTTPException(status_code=403, detail="رمز الانضمام غير صحيح")

    child = ChildService.get_child_by_id(db, child_id)
    if not child or child.family_id != family_id:
        raise HTTPException(status_code=404, detail="الطفل غير موجود")

    child = ChildService.update_child(db, child_id, request.name)
    return child

@app.delete("/api/families/{family_id}/children/{child_id}")
async def delete_child(family_id: str, child_id: str, code: str = Query(...), db: Session = Depends(get_db)):
    if not FamilyService.verify_join_code(db, family_id, code):
        raise HTTPException(status_code=403, detail="رمز الانضمام غير صحيح")

    child = ChildService.get_child_by_id(db, child_id)
    if not child or child.family_id != family_id:
        raise HTTPException(status_code=404, detail="الطفل غير موجود")

    ChildService.delete_child(db, child_id)
    return {"ok": True}

@app.post("/api/families/{family_id}/children/{child_id}/adjust")
async def adjust_score(family_id: str, child_id: str, request: AdjustScoreRequest, code: str = Query(...), db: Session = Depends(get_db)):
    if not FamilyService.verify_join_code(db, family_id, code):
        raise HTTPException(status_code=403, detail="رمز الانضمام غير صحيح")

    child = ChildService.get_child_by_id(db, child_id)
    if not child or child.family_id != family_id:
        raise HTTPException(status_code=404, detail="الطفل غير موجود")

    child, adjustment = ChildService.adjust_score(db, child_id, request.delta, request.note)
    return {"child": child, "adjustment": adjustment}

@app.post("/api/families/{family_id}/reset-one/{child_id}")
async def reset_child_score(family_id: str, child_id: str, code: str = Query(...), db: Session = Depends(get_db)):
    if not FamilyService.verify_join_code(db, family_id, code):
        raise HTTPException(status_code=403, detail="رمز الانضمام غير صحيح")

    child = ChildService.get_child_by_id(db, child_id)
    if not child or child.family_id != family_id:
        raise HTTPException(status_code=404, detail="الطفل غير موجود")

    child, adjustment = ChildService.reset_child_score(db, child_id)
    return {"child": child, "adjustment": adjustment}

@app.post("/api/families/{family_id}/reset-all")
async def reset_all_scores(family_id: str, code: str = Query(...), db: Session = Depends(get_db)):
    if not FamilyService.verify_join_code(db, family_id, code):
        raise HTTPException(status_code=403, detail="رمز الانضمام غير صحيح")

    reset_children, reset_adjustments = ChildService.reset_all_scores(db, family_id)
    return {"children": reset_children, "adjustments": reset_adjustments}

@app.get("/api/families/{family_id}/history")
async def get_family_history(family_id: str, code: str = Query(...), limit: int = Query(50), cursor: Optional[str] = Query(None), db: Session = Depends(get_db)):
    if not FamilyService.verify_join_code(db, family_id, code):
        raise HTTPException(status_code=403, detail="رمز الانضمام غير صحيح")

    offset = 0
    if cursor:
        try:
            offset = int(cursor)
        except ValueError:
            pass

    history = AdjustmentService.get_family_history(db, family_id, limit, offset)
    return history
