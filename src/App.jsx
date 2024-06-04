import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Team from './Pages/Team'
import Services from './Pages/Services'
import Project from './Pages/Project'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'

function App() {
  return (
    <>
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/team" element={<Team/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/project" element={<Project/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/contact" element={<Contact/>} />
      </Routes>
     <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
