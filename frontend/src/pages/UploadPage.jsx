import { useState, useRef } from 'react'
import toast from 'react-hot-toast'
import { uploadImages } from '../lib/api'

export default function UploadPage() {
  const [files, setFiles] = useState([])
  const [progress, setProgress] = useState(0)
  const [uploading, setUploading] = useState(false)
  const inputRef = useRef()

  function onSelect(e) {
    const selected = Array.from(e.target.files || [])
    setFiles(selected)
  }

  async function onUpload() {
    if (!files.length) return
    setUploading(true)
    try {
      const res = await uploadImages(files, (p) => setProgress(p))
      toast.success('Upload complete')
      setFiles([])
      setProgress(0)
    } catch (err) {
      toast.error('Upload failed')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-semibold mb-4">Image Upload</h1>

      <input ref={inputRef} type="file" accept="image/*" multiple className="hidden" onChange={onSelect} />
      <div className="flex gap-2 mb-4">
        <button onClick={() => inputRef.current.click()} className="px-4 py-2 bg-sky-600 text-white rounded">Select Images</button>
        <button onClick={onUpload} disabled={!files.length || uploading} className="px-4 py-2 bg-green-600 text-white rounded">Upload</button>
      </div>

      {files.length === 0 ? (
        <p className="text-sm text-slate-500">No files selected</p>
      ) : (
        <ul className="mb-4">
          {files.map((f) => (
            <li key={f.name} className="py-1">{f.name} — {Math.round(f.size / 1024)} KB</li>
          ))}
        </ul>
      )}

      <div className="h-2 bg-gray-200 rounded overflow-hidden">
        <div style={{ width: `${progress}%` }} className="h-full bg-sky-500 transition-all" />
      </div>
    </div>
  )
}
