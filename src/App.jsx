import { BrowserRouter } from "react-router-dom"
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Tech from './components/Tech';
import Experience from './components/Experience';
import Works from './components/Works';
import Feedbacks from './components/Feedbacks';
import Contact from './components/Contact';

const App = () => {

  return (
      <BrowserRouter>
        <div className="bg-primary relative z-0">
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
        <Works/>
        <Feedbacks/>
      </BrowserRouter>
  )
}

export default App
