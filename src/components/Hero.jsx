import heroBg from '../assets/home.png'

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end overflow-hidden"
    >
      {/* Full-bleed background image — untouched */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Madrasa Ziaul Uloom"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Ground shadow — only darkens the bottom third where text lives */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: '65%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.0) 100%)',
        }}
      />

      {/* Content — pinned to bottom */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-16 pb-14">
        <div className="max-w-3xl">

          {/* Bismillah */}
          <p
            className="text-yellow-300 text-xl md:text-2xl mb-2 leading-relaxed font-bold drop-shadow-2xl"
            style={{ fontFamily: "'Amiri', 'Scheherazade New', serif", direction: 'rtl', textAlign: 'left', textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 6px rgba(0,0,0,0.6)' }}
          >
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>
          <h1
            className="text-white text-5xl sm:text-6xl md:text-7xl font-bold leading-none mb-5 tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Madrasa Ziaul Uloom
          </h1>

          {/* Thin gold rule */}
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-12 bg-yellow-300" />
            <span className="text-yellow-300 text-[10px] tracking-[0.25em] uppercase font-bold drop-shadow-2xl" style={{ textShadow: '0 3px 9px rgba(0,0,0,0.8)' }}>
              Est. 11th November 1972
            </span>
          </div>
          <p
            className="text-white/80 text-lg sm:text-lg leading-relaxed max-w-xl mb-8"
            style={{ fontFamily: "'Lora', Georgia, serif" }}
          >
            "The message, distinction, and defining hallmark of this place are the oneness of God (Tawḥīd),
            adherence to the Prophetic tradition, and the exaltation of the Word of Truth."
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#1b3a2d] hover:bg-[#234d3b] text-white px-7 py-3 rounded-md text-sm font-medium tracking-wide transition-all duration-300 border border-[#2a5040]"
            >
              Apply Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-7 py-3 rounded-md text-sm font-medium tracking-wide transition-all duration-300 border border-white/25"
            >
              Contact Us
            </a>
            <a
              href="#donate"
              className="inline-flex items-center bg-[#d4a843] hover:bg-[#c09030] text-[#0f1a10] px-7 py-3 rounded-md text-sm font-semibold tracking-wide transition-all duration-300"
            >
              Donate
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 right-8 animate-bounce">
        <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero