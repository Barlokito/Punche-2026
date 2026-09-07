import asyncio
from contextlib import asynccontextmanager
from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

from lib.db import client, db, ensure_indexes


@asynccontextmanager
async def lifespan(app: FastAPI):
    app.state.index_task = asyncio.create_task(ensure_indexes())
    yield
    client.close()


app = FastAPI(lifespan=lifespan)
api_router = APIRouter(prefix="/api")


class ContactInquiryCreate(BaseModel):
    full_name: str = Field(min_length=2, max_length=120)
    email: EmailStr
    phone: str = Field(min_length=6, max_length=30)
    service_type: str = Field(min_length=2, max_length=80)
    estimated_date: Optional[str] = Field(default=None, max_length=60)
    message: str = Field(min_length=10, max_length=2000)


class ContactInquiry(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    full_name: str
    email: EmailStr
    phone: str
    service_type: str
    estimated_date: Optional[str] = None
    message: str
    status: str = "nuevo"
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


@api_router.get("/")
async def root():
    return {"message": "Punche Creativo API"}


@api_router.post("/contact", response_model=ContactInquiry, status_code=201)
async def create_contact_inquiry(input: ContactInquiryCreate):
    inquiry = ContactInquiry(**input.model_dump())
    await db.contact_inquiries.insert_one(inquiry.model_dump())
    return inquiry


@api_router.get("/contact", response_model=List[ContactInquiry])
async def list_contact_inquiries():
    docs = await db.contact_inquiries.find().sort("created_at", -1).to_list(500)
    for doc in docs:
        ts = doc.get("created_at")
        if isinstance(ts, datetime) and ts.tzinfo is None:
            doc["created_at"] = ts.replace(tzinfo=timezone.utc)
    return [ContactInquiry(**doc) for doc in docs]


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)
