import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import VideoSection from './components/VideoSection.jsx'
import Gallery from './components/Gallery.jsx'
import Courses from './components/Courses.jsx'
import FounderMessage from './components/FounderMessage.jsx'
import Testimonials from './components/Testimonials.jsx'
import Announcements from './components/Announcements.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import FounderPage from './components/FounderPage.jsx'
import AboutPage from './components/AboutPage.jsx'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <VideoSection />
      <Gallery />
      <Courses />
      <FounderMessage />
      <Testimonials />
      <Announcements />
      <Contact />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-neutral-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/founder" element={<FounderPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
