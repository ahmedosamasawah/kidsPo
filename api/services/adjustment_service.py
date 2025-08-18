from typing import List, Dict, Any
from sqlalchemy.orm import Session, joinedload
from sqlalchemy import desc

from database.models import Adjustment, Child

class AdjustmentService:
    @staticmethod
    def get_recent_adjustments(db: Session, family_id: str, limit: int = 50) -> List[Adjustment]:
        return (
            db.query(Adjustment)
            .join(Child)
            .filter(Child.family_id == family_id)
            .order_by(desc(Adjustment.created_at))
            .limit(limit)
            .options(joinedload(Adjustment.child))
            .all()
        )

    @staticmethod
    def get_family_history(
        db: Session,
        family_id: str,
        limit: int = 50,
        offset: int = 0
    ) -> Dict[str, Any]:
        query = (
            db.query(Adjustment)
            .join(Child)
            .filter(Child.family_id == family_id)
            .order_by(desc(Adjustment.created_at))
            .options(joinedload(Adjustment.child))
        )

        total_count = query.count()
        items = query.offset(offset).limit(limit).all()

        next_cursor = None
        if total_count > offset + limit:
            next_cursor = str(offset + limit)

        return {
            "items": items,
            "next_cursor": next_cursor,
            "total_count": total_count
        }
