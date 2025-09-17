export default function Progress({ value = 0 }) {
  return (
    <div className="h-2 bg-gray-200 rounded overflow-hidden">
      <div style={{ width: `${value}%` }} className="h-full bg-sky-500" />
    </div>
  )
}
