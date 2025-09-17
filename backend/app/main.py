from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import health, upload

app = FastAPI(title="Backend API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router, prefix="")
app.include_router(upload.router, prefix="/api")


@app.get("/")
async def root():
    return {"message": "Backend running — try GET /health or POST /api/upload"}
