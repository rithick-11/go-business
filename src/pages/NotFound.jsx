import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main className="w-screen min-h-screen bg-[#F4F6FB] flex items-center justify-center">
      <div className="text-center max-w-md p-6">
        <h1 className="text-5xl font-bold text-gray-900 mb-2">404</h1>
        <p className="text-gray-600 mb-4">Page not found</p>
        <Link to="/" className="text-indigo-600 font-medium">Back to dashboard</Link>
      </div>
    </main>
  )
}

export default NotFound
