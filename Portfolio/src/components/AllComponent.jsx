import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Skills from './Skills'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import Project from './Project'
import Footer from './Footer'

export default function AllComponent() {
  return (
    <div >
      <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='/Project' element={<Project/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}
