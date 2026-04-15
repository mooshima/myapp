import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      
      <h1 className="text-5xl font-bold mb-4">
        Marcus Oshima
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        Building Web Experiences 🚀
      </p>

      <div className="space-x-4">
        <Link 
          to="/about"
          className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          About
        </Link>

        <Link 
          to="/skills"
          className="px-6 py-2 border border-black rounded hover:bg-black hover:text-white"
        >
          Skills
        </Link>
      </div>

    </div>
  )
}

export default Home
