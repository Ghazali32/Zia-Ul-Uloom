import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import gallery5 from '../assets/home_2.png'

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Banner */}
      <section className="relative bg-primary py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-arabic text-xl mb-4">عن المدرسة</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            About Madrasa Ziaul Uloom
          </h1>
          <p className="text-white/70 font-arabic text-lg mb-2">مدرسة ضياء العلوم</p>
          <p className="text-white/80 text-base md:text-lg">
            A Legacy of Islamic Learning Since 1972
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-neutral-100 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-primary hover:underline">Home</Link>
            <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-neutral-600">About</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Madrasa Photo Placeholder + Intro */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
            {/* Photo placeholder */}
            <div>
              <div className="relative bg-neutral-100 rounded-2xl overflow-hidden shadow-lg aspect-[4/3] flex items-center justify-center border-2 border-dashed border-neutral-300">
                <img src={gallery5} alt="" className='w-full h-full' />
              </div>
              {/* Established Badge */}
              <div className="mt-6 bg-primary text-white rounded-xl p-5 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/70 text-xs uppercase tracking-wider font-medium">Established</p>
                    <p className="text-white font-serif font-bold text-lg">4th Shawwal 1392 AH</p>
                    <p className="text-white/80 text-sm">11th November 1972</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Intro Text */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900 mb-6">
                Our Heritage & Foundation
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                The seminary was dedicated to the noble personage of his maternal grandfather,
                the spiritual axis of his age, Hazrat Sayyid Shah Ziya al-Nabi (may Allah have
                mercy upon him). From its very inception, it remained the recipient of the
                prayers, spiritual attention, and benevolent regard of Hazrat Wala (may Allah
                have mercy upon him) as well as the eminent كبار (great scholars), mashāyikh,
                and 'ulamā' of the time.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Among those especially noteworthy are Shaykh al-Hadith Mawlana Muhammad
                Zakariyya Kandhlawi (رحمه الله), Mawlana In'ām al-Hasan Kandhlawi (رحمه الله),
                Mawlana 'Abd al-Halim of Jaunpur (رحمه الله), and Qari Sadiq Ahmad Bandwi (رحمه الله).
              </p>
              <p className="text-neutral-700 leading-relaxed">
                By the grace of Allah, since its establishment, the seminary has continued to
                progress steadily. The administrators of Dar al-'Ulum Nadwat al-'Ulama
                personally oversee and support its academic and religious development, and
                its graduates go on to enroll at Nadwat al-'Ulama.
              </p>
            </div>
          </div>

          {/* Patron's Written Note */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900">
                Patron's Written Note
              </h2>
            </div>
            <div className="bg-neutral-50 rounded-2xl p-8 md:p-10 border border-neutral-100 max-w-5xl">
              <p className="text-neutral-500 text-sm mb-4 italic">
                A memorable written note by the current patron of the seminary, the Rector (Nāzim) of
                Nadwat al-'Ulama and President of the All India Muslim Personal Law Board,
                Hazrat Mawlana Muhammad Rabi' Hasani Nadwi (may his blessings endure):
              </p>
              <div className="text-accent text-5xl font-serif leading-none mb-3">"</div>
              <p className="text-neutral-700 leading-relaxed mb-4 italic">
                Madrasah Ziya al-'Ulum is a nascent institution, established at a distance of
                approximately one and a quarter miles from the city of Rae Bareli, situated roughly
                at the midpoint of three villages. Among these villages is the settlement associated
                with Hazrat Sayyid Shah 'Alamullah, known as Takiya Kalan. This locality has long
                been the abode of the Hasani family and a rich معدن (source) of numerous scholars
                and reformers of the Muslim Ummah. It was here that Hazrat Sayyid Ahmad Shahid
                (رحمه الله) trained his mujahidin, and it was also his birthplace and residence.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-4 italic">
                In this very settlement, about three-quarters of a century ago, there lived a
                venerable personality, Hazrat Shah Ziya al-Nabi Hasani, whose radiance of
                righteousness and reform spread throughout Rae Bareli and its surrounding regions.
                This esteemed figure was the maternal grandfather of Hazrat Mawlana Sayyid Abu'l
                Hasan 'Ali Nadwi (رحمه الله). When the need for a religious seminary in this
                region was felt and its establishment was resolved upon, it was named after this
                noble personality in the hope that Allah Almighty would place barakah (blessing)
                in this association and grant it acceptance.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-4 italic">
                The close relationship that Hazrat Mawlana Abu'l Hasan 'Ali Hasani Nadwi (رحمه الله)
                had with this institution has also been a great source of strength for it. By the
                grace of Allah, since its establishment, the seminary has continued to progress
                steadily. The administrators of Dar al-'Ulum Nadwat al-'Ulama personally oversee
                and support its academic and religious development, and its graduates go on to
                enroll at Nadwat al-'Ulama.
              </p>
              <div className="text-accent text-5xl font-serif leading-none text-right -mt-1">"</div>
              <div className="border-t border-neutral-200 pt-4 mt-4">
                <p className="text-sm font-serif font-semibold text-primary">
                  Hazrat Mawlana Muhammad Rabi' Hasani Nadwi
                </p>
                <p className="text-xs text-neutral-500">
                  Rector (Nāzim), Nadwat al-'Ulama • President, All India Muslim Personal Law Board
                </p>
              </div>
            </div>
          </div>

          {/* Founder's Address to Students */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900">
                Founder's Address to Students
              </h2>
            </div>
            <div className="bg-primary/5 rounded-2xl p-8 md:p-10 border border-primary/10 max-w-5xl">
              <p className="text-neutral-500 text-sm mb-4">
                The eminent thinker of Islam, Hazrat Mawlana Sayyid Abu'l Hasan 'Ali Nadwi (قدس سره),
                while addressing some of the students of the seminary, said:
              </p>
              <div className="text-accent text-5xl font-serif leading-none mb-3">"</div>
              <p className="text-neutral-700 leading-relaxed mb-4 italic">
                You should express gratitude to Allah that you have been chosen for this institution.
                The movement of reform and jihad led by Hazrat Sayyid Ahmad Shahid (رحمه الله) arose
                from here. Hazrat Shah 'Alamullah (رحمه الله) came and established this settlement.
                Hazrat Mawlana Ilyas (رحمه الله) visited here and testified to the greatness of its
                people in knowledge and rank.
              </p>
              <p className="text-neutral-700 leading-relaxed italic">
                Emperor Aurangzeb Alamgir once saw in a dream that the Prophet (peace and blessings
                be upon him) had passed away; upon inquiry, it was revealed that in reality, Hazrat
                Shah 'Alamullah (رحمه الله) had passed away. Among his descendants was Shah Abu Sa'id
                (رحمه الله), to whom the family of Tipu Sultan Shahid was connected.
              </p>
              <div className="text-accent text-5xl font-serif leading-none text-right -mt-1">"</div>
              <p className="text-right text-sm font-serif font-semibold text-primary mt-2">
                — Hazrat Maulana Syed Abul Hasan Ali Nadwi (R.A.)
              </p>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900">
                Vision & Mission
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100">
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-serif font-bold text-xl text-neutral-900 mb-3">Our Vision</h3>
                <p className="text-neutral-600 leading-relaxed">
                  To be a beacon of authentic Islamic learning that produces scholars who embody
                  the oneness of God (Tawḥīd), adherence to the Prophetic tradition, and the
                  exaltation of the Word of Truth — serving the Muslim Ummah with knowledge,
                  piety, and compassion.
                </p>
              </div>
              <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100">
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-serif font-bold text-xl text-neutral-900 mb-3">Our Mission</h3>
                <p className="text-neutral-600 leading-relaxed">
                  To provide comprehensive Islamic education through Hifz, Nazra, Alimiyat, and
                  Khususi programs in a nurturing environment, while preserving the rich scholarly
                  heritage of this blessed land and preparing students to serve as guides, teachers,
                  and reformers in their communities.
                </p>
              </div>
            </div>
          </div>

          {/* Achievements & Milestones */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900">
                Achievements & Milestones
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  year: '1972',
                  title: 'Foundation',
                  desc: 'Established on 4th Shawwal 1392 AH (11 Nov 1972) in a mosque in Maidanpur, Rae Bareli.',
                },
                {
                  year: '1975',
                  title: 'Foundation Stone',
                  desc: 'Hazrat Maulana Syed Abul Hasan Ali Nadwi (R.A.) laid the foundation stone of the new building on 14th Dhu al-Qa\'dah 1395 AH.',
                },
                {
                  year: '50+',
                  title: 'Years of Service',
                  desc: 'Over five decades of continuous Islamic education, producing hundreds of scholars and Huffaz.',
                },
                {
                  year: '4',
                  title: 'Academic Programs',
                  desc: 'Offering Hifz-ul-Quran, Nazra, Alimiyat (8 years), and Khususi (5 years) programs.',
                },
                {
                  year: '∞',
                  title: 'Spiritual Legacy',
                  desc: 'Located in the land of Hazrat Shah \'Alamullah, birthplace of Hazrat Sayyid Ahmad Shahid (R.A.).',
                },
                {
                  year: '🤝',
                  title: 'Nadwatul Ulama Affiliation',
                  desc: 'Graduates go on to enroll at Darul Uloom Nadwatul Ulama, Lucknow, for advanced studies.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-neutral-50 rounded-xl p-6 border border-neutral-100 hover:border-primary/20 hover:shadow-sm transition-all duration-200">
                  <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center font-serif font-bold text-lg mb-4">
                    {item.year}
                  </div>
                  <h4 className="font-serif font-semibold text-neutral-900 mb-2">{item.title}</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Affiliations */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900">
                Affiliations & Connections
              </h2>
            </div>
            <div className="bg-accent-light rounded-2xl p-8 md:p-10 border border-accent/20 max-w-4xl">
              <ul className="space-y-4">
                {[
                  {
                    title: 'Darul Uloom Nadwatul Ulama, Lucknow',
                    desc: 'The seminary\'s academic and religious development is personally overseen by the administrators of Nadwatul Ulama. Graduates proceed to enroll at Nadwatul Ulama for advanced studies.',
                  },
                  {
                    title: 'All India Muslim Personal Law Board',
                    desc: 'The patron of the seminary served as President of the All India Muslim Personal Law Board.',
                  },
                  {
                    title: 'Hasani Legacy — Takiya Kalan, Raebareli',
                    desc: 'Located in the historic settlement associated with Hazrat Sayyid Shah \'Alamullah, which has been the abode of the Hasani family and a source of numerous scholars and reformers.',
                  },
                  {
                    title: 'Scholarly Endorsements',
                    desc: 'Received prayers and spiritual attention from eminent scholars including Shaykh al-Hadith Mawlana Muhammad Zakariyya Kandhlawi (R.A.) and Mawlana In\'ām al-Hasan Kandhlawi (R.A.).',
                  },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-accent mt-1 text-lg">✦</span>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">{item.title}</h4>
                      <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Back to Home */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors duration-200 group"
            >
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to Home
            </Link>
          </div>

        </div>
      </section>
    </div>
  )
}

export default AboutPage
