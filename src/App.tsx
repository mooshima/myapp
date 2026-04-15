import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import Skills from "./pages/Skills"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
<Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
