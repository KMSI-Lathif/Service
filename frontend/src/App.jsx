import { Routes, Route, Link } from 'react-router-dom'
import UploadPage from './pages/UploadPage'

export default function App() {
  return (
    <div className="min-h-screen">
      <nav className="p-4 bg-white shadow-sm">
        <div className="container mx-auto">
          <Link to="/upload" className="text-sky-600 font-semibold">Upload</Link>
        </div>
      </nav>

      <main className="container mx-auto p-6">
        <Routes>
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/" element={<div className="text-center">Open <Link to="/upload">/upload</Link></div>} />
        </Routes>
      </main>
    </div>
  )
}
