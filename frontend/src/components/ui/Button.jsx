export default function Button({ children, ...rest }) {
  return (
    <button {...rest} className={`px-4 py-2 rounded ${rest.className ?? ''}`}>
      {children}
    </button>
  )
}
