import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const navLinks = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'About', href: '/about', isRoute: true },
    { name: 'Founder', href: '/founder', isRoute: true },
    { name: 'Courses', href: '#courses' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (e, link) => {
    if (link.isRoute) {
      e.preventDefault()
      setIsOpen(false)
      navigate(link.href)
      return
    }

    // Hash links — if we're not on home page, navigate there first
    if (location.pathname !== '/') {
      e.preventDefault()
      setIsOpen(false)
      navigate('/' + link.href)
    } else {
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-arabic text-lg md:text-xl font-bold">ض</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-primary font-serif font-bold text-lg md:text-xl leading-tight">
                Madrasa Ziaul Uloom
              </h1>
              <p className="text-xs text-neutral-500 font-arabic">مدرسة ضياء العلوم</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-neutral-700 hover:text-primary font-medium text-sm tracking-wide transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="text-neutral-700 hover:text-primary font-medium text-sm tracking-wide transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              )
            )}
            {/* <a
              href="#contact"
              onClick={(e) => handleNavClick(e, { href: '#contact' })}
              className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors duration-200"
            >
              Donate
            </a> */}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-neutral-700 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-neutral-700 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-neutral-700 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-700 hover:text-primary hover:bg-primary-light px-4 py-3 rounded-lg font-medium text-sm transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="text-neutral-700 hover:text-primary hover:bg-primary-light px-4 py-3 rounded-lg font-medium text-sm transition-colors duration-200"
                >
                  {link.name}
                </a>
              )
            )}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, { href: '#contact' })}
              className="bg-primary text-white px-4 py-3 rounded-lg text-sm font-medium text-center mt-2 hover:bg-primary-dark transition-colors duration-200"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
