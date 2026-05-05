import { Link } from 'react-router-dom'
import founderImg from '../assets/founder.jpg'

function FounderMessage() {
  return (
    <section id="founder" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-arabic text-lg mb-2">رسالة المؤسس</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
            Founder's Message
          </h2>
          <div className="islamic-divider">
            <span className="text-accent text-xl">✦</span>
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="md:col-span-2">
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full bg-accent/10 rounded-2xl" />
              <img
                src={founderImg}
                alt="Hazrat Maulana Syed Abul Hasan Ali Nadwi (R.A.)"
                className="relative w-full h-80 md:h-[28rem] object-cover rounded-2xl shadow-lg"
              />
              {/* Name Card */}
              <div className="absolute -bottom-4 left-4 right-4 bg-white rounded-xl p-4 shadow-lg border border-neutral-100">
                <h4 className="font-serif font-semibold text-neutral-900 text-sm md:text-base">
                  Hazrat Maulana Syed Abul Hasan Ali Nadwi
                </h4>
                <p className="text-xs text-neutral-500 mt-0.5">(رحمه الله) — Founder & Patron</p>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="md:col-span-3">
            <div className="bg-neutral-50 rounded-2xl p-8 md:p-10 border border-neutral-100">
              {/* Opening Quote Mark */}
              <div className="text-accent text-6xl font-serif leading-none mb-4">"</div>

              <p className="text-neutral-700 leading-relaxed mb-4">
                Madrasah Ziya al-'Ulum was established on the 4th of Shawwal 1392 AH,
                corresponding to 11 November 1972, in a dilapidated mosque in Maidanpur,
                situated approximately two kilometers from the city of Rae Bareli and
                adjacent to the spiritual precinct of Shah 'Alamullah at Takiya Kalan.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Subsequently, on the 14th of Dhu al-Qa'dah 1395 AH, corresponding to
                19 November 1975, the eminent thinker of Islam laid the foundation stone
                of the seminary building adjoining the mosque with his own blessed hands.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-4">
                You should express gratitude to Allah that you have been chosen for this
                institution. The movement of reform and jihad led by Hazrat Sayyid Ahmad
                Shahid (رحمه الله) arose from here. This settlement has long been a rich
                source of numerous scholars and reformers of the Muslim Ummah.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-4">
                The close relationship that Hazrat Mawlana Abu'l Hasan 'Ali Hasani Nadwi
                (رحمه الله) had with this institution has been a great source of strength.
                By the grace of Allah, the seminary has continued to progress steadily
                since its establishment.
              </p>

              {/* Closing Quote Mark */}
              <div className="text-accent text-6xl font-serif leading-none text-right -mt-2">"</div>

              {/* Signature */}
              <div className="border-t border-neutral-200 pt-4 mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-sm font-serif font-semibold text-primary">
                    Hazrat Maulana Syed Abul Hasan Ali Nadwi (R.A.)
                  </p>
                  <p className="text-xs text-neutral-500">
                    Rector, Nadwat al-'Ulama • President, All India Muslim Personal Law Board
                  </p>
                </div>
                <Link
                  to="/founder"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex-shrink-0"
                >
                  Learn More About the Founder
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FounderMessage
