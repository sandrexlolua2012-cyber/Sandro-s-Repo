import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import SignatureDishes from './components/SignatureDishes'
import Experience from './components/Experience'
import Reviews from './components/Reviews'
import Gallery from './components/Gallery'
import Reservation from './components/Reservation'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-charcoal-dark min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <SignatureDishes />
      <Experience />
      <Reviews />
      <Gallery />
      <Reservation />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
