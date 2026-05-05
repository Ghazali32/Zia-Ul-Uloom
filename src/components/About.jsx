import { Link } from 'react-router-dom'
import gallery1 from '../assets/home.jpg'

function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-arabic text-lg mb-2">عن المدرسة</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
            About Our Madrasa
          </h2>
          <div className="islamic-divider">
            <span className="text-accent text-xl">✦</span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <div className="order-2 md:order-1">
            <h3 className="text-xl md:text-2xl font-serif font-semibold text-primary mb-6">
              A Legacy of Islamic Learning Since 1972
            </h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Madrasah Ziya al-'Ulum was established on the 4th of Shawwal 1392 AH,
              corresponding to 11 November 1972, in Maidanpur, situated approximately
              two kilometers from the city of Rae Bareli, adjacent to the spiritual
              precinct of Shah 'Alamullah at Takiya Kalan.
            </p>
            <p className="text-neutral-700 leading-relaxed mb-4">
              The seminary was dedicated to the noble personage of Hazrat Sayyid Shah
              Ziya al-Nabi (may Allah have mercy upon him). From its very inception, it
              remained the recipient of prayers and spiritual attention from eminent
              scholars and mashāyikh of the time.
            </p>
            <p className="text-neutral-700 leading-relaxed mb-8">
              By the grace of Allah, since its establishment, the seminary has continued
              to progress steadily. The administrators of Dar al-'Ulum Nadwat al-'Ulama
              personally oversee and support its academic and religious development, and
              its graduates go on to enroll at Nadwat al-'Ulama.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors duration-200 group"
            >
              Read More
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Image Column */}
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-accent/30 rounded-2xl" />
              <img
                src={gallery1}
                alt="Students studying at Madrasa Ziaul Uloom"
                className="relative w-full h-80 md:h-96 object-cover rounded-2xl shadow-lg"
              />
              {/* Year Badge */}
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-5 rounded-2xl shadow-xl">
                <p className="text-3xl font-bold font-serif">50+</p>
                <p className="text-xs font-medium uppercase tracking-wider opacity-90">Years of Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
