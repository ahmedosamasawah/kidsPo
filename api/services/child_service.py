from typing import List, Optional
from sqlalchemy.orm import Session
from fastapi import HTTPException

from database.models import Child, Adjustment
from services.family_service import FamilyService

class ChildService:
    @staticmethod
    def create_child(db: Session, family_id: str, name: str) -> Child:
        child_id = FamilyService.generate_id("kid")

        child = Child(
            id=child_id,
            family_id=family_id,
            name=name.strip(),
            score=0
        )

        db.add(child)

        family = FamilyService.get_family_by_id(db, family_id)
        if family:
            family.updated_at = FamilyService.get_current_timestamp()

        db.commit()
        db.refresh(child)
        return child

    @staticmethod
    def get_child_by_id(db: Session, child_id: str) -> Optional[Child]:
        return db.query(Child).filter(Child.id == child_id).first()

    @staticmethod
    def get_family_children(db: Session, family_id: str) -> List[Child]:
        return db.query(Child).filter(Child.family_id == family_id).order_by(Child.created_at).all()

    @staticmethod
    def update_child(db: Session, child_id: str, name: str) -> Child:
        child = ChildService.get_child_by_id(db, child_id)
        if not child:
            raise HTTPException(status_code=404, detail="الطفل غير موجود")

        child.name = name.strip()
        child.updated_at = FamilyService.get_current_timestamp()


        family = FamilyService.get_family_by_id(db, child.family_id)
        if family:
            family.updated_at = FamilyService.get_current_timestamp()

        db.commit()
        db.refresh(child)
        return child

    @staticmethod
    def delete_child(db: Session, child_id: str) -> None:
        child = ChildService.get_child_by_id(db, child_id)
        if not child:
            raise HTTPException(status_code=404, detail="الطفل غير موجود")

        family_id = child.family_id
        db.delete(child)


        family = FamilyService.get_family_by_id(db, family_id)
        if family:
            family.updated_at = FamilyService.get_current_timestamp()

        db.commit()

    @staticmethod
    def adjust_score(db: Session, child_id: str, delta: int, note: Optional[str] = None) -> tuple[Child, Adjustment]:
        child = ChildService.get_child_by_id(db, child_id)
        if not child:
            raise HTTPException(status_code=404, detail="الطفل غير موجود")

        adjustment_id = FamilyService.generate_id("adj")

        adjustment = Adjustment(
            id=adjustment_id,
            child_id=child_id,
            delta=delta,
            note=note
        )

        child.score += delta
        child.updated_at = FamilyService.get_current_timestamp()

        db.add(adjustment)


        family = FamilyService.get_family_by_id(db, child.family_id)
        if family:
            family.updated_at = FamilyService.get_current_timestamp()

        db.commit()
        db.refresh(child)
        db.refresh(adjustment)

        return child, adjustment

    @staticmethod
    def reset_child_score(db: Session, child_id: str) -> tuple[Child, Optional[Adjustment]]:
        child = ChildService.get_child_by_id(db, child_id)
        if not child:
            raise HTTPException(status_code=404, detail="الطفل غير موجود")

        if child.score == 0:
            return child, None

        adjustment_id = FamilyService.generate_id("adj")

        adjustment = Adjustment(
            id=adjustment_id,
            child_id=child_id,
            delta=-child.score,
            note="إعادة تعيين إلى 0"
        )

        child.score = 0
        child.updated_at = FamilyService.get_current_timestamp()

        db.add(adjustment)


        family = FamilyService.get_family_by_id(db, child.family_id)
        if family:
            family.updated_at = FamilyService.get_current_timestamp()

        db.commit()
        db.refresh(child)
        db.refresh(adjustment)

        return child, adjustment

    @staticmethod
    def reset_all_scores(db: Session, family_id: str) -> tuple[List[Child], List[Adjustment]]:
        children = ChildService.get_family_children(db, family_id)
        reset_children = []
        reset_adjustments = []
        timestamp = FamilyService.get_current_timestamp()

        for child in children:
            if child.score != 0:
                adjustment_id = FamilyService.generate_id("adj")
                adjustment = Adjustment(
                    id=adjustment_id,
                    child_id=child.id,
                    delta=-child.score,
                    note="إعادة تعيين الكل إلى 0"
                )

                child.score = 0
                child.updated_at = timestamp
                db.add(adjustment)
                reset_adjustments.append(adjustment)

            reset_children.append(child)


        family = FamilyService.get_family_by_id(db, family_id)
        if family:
            family.updated_at = timestamp

        db.commit()

        for adjustment in reset_adjustments:
            db.refresh(adjustment)

        return reset_children, reset_adjustments
