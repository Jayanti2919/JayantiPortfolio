import { BrowserRouter } from "react-router-dom"
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Tech from './components/Tech';
import Experience from './components/Experience';
import Works from './components/Works';
import Feedbacks from './components/Feedbacks';
import Contact from './components/Contact';
import { StarsCanvas } from "./components/canvas";

const App = () => {

  return (
      <BrowserRouter>
        <div className="relative">
          <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center">
            <Navbar />
            <Hero />          
          </div>
        </div>
        <section id="about">
        <About/>
        </section>
        <section id="work">
        <Experience/>
        </section>
        <Tech/>
        <section id="project">
        <Works />
        </section>
        {/* <Feedbacks/> */}

        <section id="contact" >
          <div className="relative">
          <Contact/>
          <StarsCanvas/>
          </div>
        </section>
      </BrowserRouter>
  )
}

export default App
