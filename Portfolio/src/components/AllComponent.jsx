import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Skills from './Skills'
import Myservices from './MyService'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import Project from './Project'
import Footer from './Footer'
import Error from './ErrorMsg'

export default function AllComponent() {
  return (
    <div >
      <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/MyService" element={<Myservices/>} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='/Project' element={<Project/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}
