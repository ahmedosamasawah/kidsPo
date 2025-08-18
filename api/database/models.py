from .database import Base
from datetime import datetime
from sqlalchemy.orm import relationship, validates
from sqlalchemy import Column, Integer, String, Text, ForeignKey, DateTime, CheckConstraint

class Family(Base):
    __tablename__ = 'families'

    id = Column(String(20), primary_key=True)
    name = Column(String(60), nullable=False)
    join_code = Column(String(6), nullable=False, unique=True, index=True)
    created_at = Column(DateTime, nullable=False, default=datetime.utcnow)
    updated_at = Column(DateTime, nullable=False, default=datetime.utcnow, onupdate=datetime.utcnow)

    __table_args__ = (
        CheckConstraint('length(trim(name)) >= 2', name='family_name_min_length'),
        CheckConstraint('length(trim(name)) <= 60', name='family_name_max_length'),
        CheckConstraint('length(join_code) = 6', name='join_code_length'),
    )

    children = relationship('Child', back_populates='family', cascade='all, delete-orphan', passive_deletes=True)

    @validates('name')
    def validate_name(self, key, value):
        if not value or not value.strip():
            raise ValueError('Family name cannot be empty')
        if len(value.strip()) < 2:
            raise ValueError('Family name must be at least 2 characters')
        if len(value.strip()) > 60:
            raise ValueError('Family name cannot exceed 60 characters')
        return value.strip()

    @validates('join_code')
    def validate_join_code(self, key, value):
        if not value or len(value) != 6:
            raise ValueError('Join code must be exactly 6 characters')
        return value.upper()

class Child(Base):
    __tablename__ = 'children'

    id = Column(String(20), primary_key=True)
    family_id = Column(String(20), ForeignKey('families.id', ondelete='CASCADE'), nullable=False, index=True)
    name = Column(String(40), nullable=False)
    score = Column(Integer, nullable=False, default=0)
    created_at = Column(DateTime, nullable=False, default=datetime.utcnow)
    updated_at = Column(DateTime, nullable=False, default=datetime.utcnow, onupdate=datetime.utcnow)

    __table_args__ = (
        CheckConstraint('length(trim(name)) >= 1', name='child_name_min_length'),
        CheckConstraint('length(trim(name)) <= 40', name='child_name_max_length'),
    )

    family = relationship('Family', back_populates='children')
    adjustments = relationship('Adjustment', back_populates='child', cascade='all, delete-orphan', passive_deletes=True)

    @validates('name')
    def validate_name(self, key, value):
        if not value or not value.strip():
            raise ValueError('Child name cannot be empty')
        if len(value.strip()) > 40:
            raise ValueError('Child name cannot exceed 40 characters')
        return value.strip()

class Adjustment(Base):
    __tablename__ = 'adjustments'

    id = Column(String(20), primary_key=True)
    child_id = Column(String(20), ForeignKey('children.id', ondelete='CASCADE'), nullable=False, index=True)
    delta = Column(Integer, nullable=False)
    note = Column(Text, nullable=True)
    created_at = Column(DateTime, nullable=False, default=datetime.utcnow, index=True)

    child = relationship('Child', back_populates='adjustments')
