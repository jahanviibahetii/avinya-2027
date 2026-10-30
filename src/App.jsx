import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Islands from './components/Islands.jsx'
import Hack2Future from './components/Hack2Future.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Islands />
        <Hack2Future />
      </main>
      <Footer />
    </>
  )
}
