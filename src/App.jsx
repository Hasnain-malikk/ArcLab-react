import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'

function App() {
  return (
    <>
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/about" element={} />
      <Route path="/team" element={} />
      <Route path="/services" element={} />
      <Route path="/project" element={} />
      <Route path="/blog" element={} />
      <Route path="/contact" element={} /> */}
      </Routes>
     <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
