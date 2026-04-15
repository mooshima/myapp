import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="fixed top-0 w-full bg-white shadow flex justify-center space-x-6 py-4 z-50">
      <Link to="/" className="hover:text-gray-500">Home</Link>
      <Link to="/about" className="hover:text-gray-500">About</Link>
      <Link to="/skills" className="hover:text-gray-500">Skills</Link>
    </div>
  )
}

export default Navbar
