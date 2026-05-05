import { useState, useEffect, useCallback } from 'react'
import g1 from '../assets/gallery/gallery-1.jpg'
import g2 from '../assets/gallery/gallery-2.jpg'
import g3 from '../assets/gallery/gallery-3.jpg'
import g4 from '../assets/gallery/gallery-4.jpg'
import g5 from '../assets/gallery/gallery-5.jpg'
import g6 from '../assets/gallery/gallery-6.jpg'
import g7 from '../assets/gallery/gallery-7.jpg'
import g8 from '../assets/gallery/gallery-8.jpg'
import g9 from '../assets/gallery/gallery-9.jpg'
import g10 from '../assets/gallery/gallery-10.jpg'


const images = [
  { src: g1, alt: 'Madrasa Ziaul Uloom' },
  { src: g2, alt: 'The Madrasa library with Islamic texts' },
  { src: g3, alt: 'Beautiful courtyard of the Madrasa' },
  { src: g4, alt: 'Madrasa Ziaul Uloom Dar E Arfat' },
  { src: g5, alt: 'Beautiful courtyard of the Madrasa' },
  { src: g6, alt: 'Beautiful courtyard of the Madrasa' },
  { src: g7, alt: 'The Madrasa library with Islamic texts' },
  { src: g8, alt: 'Madrasa Ziaul Uloom' },
  { src: g9, alt: 'Madrasa Ziaul Uloom' },
  { src: g10, alt: 'Teacher Office of the Madrasa' },

]

function Gallery() {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }, [])

  // Auto-slide
  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [nextSlide, isHovered])

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-arabic text-lg mb-2">معرض الصور</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
            Photo Gallery
          </h2>
          <div className="islamic-divider">
            <span className="text-accent text-xl">✦</span>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl bg-neutral-200 aspect-[16/9]">
            {images.map((img, index) => (
              <div
                key={index}
                className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                style={{ opacity: index === current ? 1 : 0 }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white text-sm md:text-base font-medium">
                {images[current].alt}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
            aria-label="Previous image"
          >
            <svg className="w-5 h-5 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
            aria-label="Next image"
          >
            <svg className="w-5 h-5 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-300 rounded-full ${index === current
                  ? 'w-8 h-2.5 bg-primary'
                  : 'w-2.5 h-2.5 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
