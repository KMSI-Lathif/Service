# Backend (FastAPI)

This directory contains a small FastAPI service.

Quick start (using `uv` as the dependency manager and installer):

1. Install dependencies

```
uv install
```

2. Run the app with `uvicorn` (from project root):

```
uv run uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

Endpoints:

- `GET /health` — returns `{ "status": "ok" }`
- `POST /api/upload` — accepts multipart file upload and responds with `{ "filename": <name>, "size": <bytes> }`

Example curl upload:

```
curl -F "file=@/path/to/file.jpg" http://localhost:8000/api/upload
```
