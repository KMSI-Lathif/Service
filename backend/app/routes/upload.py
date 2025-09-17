from fastapi import APIRouter, UploadFile, File, HTTPException

router = APIRouter()


@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    try:
        contents = await file.read()
    except Exception:
        raise HTTPException(status_code=500, detail="Failed to read file")

    return {
        "filename": file.filename,
        "size": len(contents),
    }
from fastapi import APIRouter, UploadFile, File, HTTPException

router = APIRouter()


@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    try:
        contents = await file.read()
    except Exception as exc:
        raise HTTPException(status_code=500, detail="Failed to read uploaded file")

    return {"filename": file.filename, "size": len(contents)}
