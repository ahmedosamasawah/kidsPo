import string
import random
import uuid
from datetime import datetime, timezone
from typing import Dict, Optional
from sqlalchemy.orm import Session
from fastapi import HTTPException, status

from database.models import Family, Child, Adjustment

class FamilyService:
    @staticmethod
    def generate_join_code() -> str:
        return ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))

    @staticmethod
    def generate_id(prefix: str) -> str:
        return f"{prefix}_{uuid.uuid4().hex[:12]}"

    @staticmethod
    def get_current_timestamp() -> datetime:
        return datetime.now(timezone.utc)

    @staticmethod
    def create_family(db: Session, name: str) -> Family:
        existing = db.query(Family).filter(Family.name == name.strip()).first()
        if existing:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail=f"Family with name '{name.strip()}' already exists"
            )

        while True:
            join_code = FamilyService.generate_join_code()
            existing_code = db.query(Family).filter(Family.join_code == join_code).first()
            if not existing_code:
                break

        family_id = FamilyService.generate_id("fam")

        family = Family(
            id=family_id,
            name=name.strip(),
            join_code=join_code
        )

        db.add(family)
        db.commit()
        db.refresh(family)
        return family

    @staticmethod
    def get_family_by_code(db: Session, code: str) -> Optional[Family]:
        clean_code = code.upper().replace("-", "").replace(" ", "")
        return db.query(Family).filter(Family.join_code == clean_code).first()

    @staticmethod
    def get_family_by_id(db: Session, family_id: str) -> Optional[Family]:
        return db.query(Family).filter(Family.id == family_id).first()

    @staticmethod
    def verify_join_code(db: Session, family_id: str, code: str) -> bool:
        family = FamilyService.get_family_by_id(db, family_id)
        return family and family.join_code == code.upper()

    @staticmethod
    def update_family(db: Session, family_id: str, name: str) -> Family:
        family = FamilyService.get_family_by_id(db, family_id)
        if not family:
            raise HTTPException(status_code=404, detail="العائلة غير موجودة")

        existing = db.query(Family).filter(
            Family.name == name.strip(),
            Family.id != family_id
        ).first()
        if existing:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail=f"Family with name '{name.strip()}' already exists"
            )

        family.name = name.strip()
        family.updated_at = FamilyService.get_current_timestamp()
        db.commit()
        db.refresh(family)
        return family

    @staticmethod
    def get_family_stats(db: Session, family_id: str) -> Dict[str, int]:
        children_count = db.query(Child).filter(Child.family_id == family_id).count()
        adjustments_count = db.query(Adjustment).join(Child).filter(Child.family_id == family_id).count()

        return {
            "children_count": children_count,
            "adjustments_count": adjustments_count
        }
