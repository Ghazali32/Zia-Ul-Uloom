import heroBg from '../assets/home_2.jpg'

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Madrasa Ziaul Uloom"
          className="w-full h-full object-cover"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Decorative Islamic Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Bismillah */}
        <p className="text-accent font-arabic text-2xl md:text-3xl mb-6 opacity-90">
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </p>

        {/* Arabic Name */}
        <h2 className="text-white/80 font-arabic text-xl md:text-2xl mb-4">
          مدرسة ضياء العلوم
        </h2>

        {/* Main Title */}
        <h1 className="text-white font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Madrasa Ziaul Uloom
        </h1>

        {/* Tagline */}
        <p className="text-white/85 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-4 leading-relaxed font-light">
          "The message, distinction, and defining hallmark of this place are the oneness of God (Tawḥīd),
          adherence to the Prophetic tradition, and the exaltation of the Word of Truth."
        </p>

        {/* Established */}
        <p className="text-accent text-sm md:text-base mb-10 font-medium tracking-wider uppercase">
          Est. 4th Shawwal 1392 AH — 11th November 1972
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-lg font-medium text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
          >
            Apply Now
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3.5 rounded-lg font-medium text-sm tracking-wide transition-all duration-300 backdrop-blur-sm"
          >
            Contact Us
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-neutral-900 px-8 py-3.5 rounded-lg font-medium text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
          >
            Donate
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
