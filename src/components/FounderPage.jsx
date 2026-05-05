import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import founderImg from '../assets/founder.jpg'

function FounderPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Banner */}
      <section className="relative bg-primary py-20 md:py-28 overflow-hidden">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-arabic text-xl mb-4">المؤسس</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Hazrat Maulana Syed Abul Hasan Ali Hasani Nadwi
          </h1>
          <p className="text-white/70 font-arabic text-lg mb-2">
            (رحمة الله عليه)
          </p>
          <p className="text-white/80 text-base md:text-lg">
            5 December 1913 — 31 December 1999
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
            <span className="text-neutral-600">Founder</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Portrait + Introduction */}
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-20">
            {/* Photo */}
            <div className="md:col-span-1">
              <div className="sticky top-28">
                <div className="relative">
                  <div className="absolute -top-3 -left-3 w-full h-full bg-accent/10 rounded-2xl" />
                  <img
                    src={founderImg}
                    alt="Hazrat Maulana Syed Abul Hasan Ali Nadwi"
                    className="relative w-full aspect-[3/4] object-cover rounded-2xl shadow-lg"
                  />
                </div>

                {/* Quick Facts Card */}
                <div className="mt-8 bg-neutral-50 rounded-xl p-6 border border-neutral-100">
                  <h3 className="font-serif font-semibold text-neutral-900 mb-4 text-sm uppercase tracking-wider">Quick Facts</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Born</span>
                      <span className="text-neutral-800 font-medium">5 Dec 1913</span>
                    </div>
                    <div className="border-t border-neutral-100" />
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Passed Away</span>
                      <span className="text-neutral-800 font-medium">31 Dec 1999</span>
                    </div>
                    <div className="border-t border-neutral-100" />
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Birthplace</span>
                      <span className="text-neutral-800 font-medium text-right">Takiya Kalan, Raebareli</span>
                    </div>
                    <div className="border-t border-neutral-100" />
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Known As</span>
                      <span className="text-neutral-800 font-medium">"Ali Miyan"</span>
                    </div>
                    <div className="border-t border-neutral-100" />
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Books</span>
                      <span className="text-neutral-800 font-medium">50+ authored</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Biography Content */}
            <div className="md:col-span-2 space-y-12">
              {/* Introduction */}
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900 mb-6">
                  The Eminent Thinker of Islam
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Hazrat Maulana Syed Abul Hasan Ali Hasani Nadwi (رحمة الله عليه),
                  affectionately known as <strong>"Ali Miyan"</strong>, was one of the most prominent
                  Islamic scholars, historians, authors, and reformers of the 20th century.
                  Born on 5 December 1913 in Takiya Kalan, Raebareli, India, he came from
                  a distinguished scholarly family with a lineage tracing back to Hasan ibn Ali,
                  the grandson of Prophet Muhammad ﷺ.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  His father, Hakim Syed Abdul Hayy Hasani, was a renowned historian and
                  scholar. From his very childhood, Maulana Nadwi showed exceptional
                  intellectual abilities and a deep love for knowledge, setting the foundation
                  for a life dedicated to Islamic scholarship and the service of the Ummah.
                </p>
              </div>

              {/* Education */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-neutral-900">
                    Educational Background
                  </h2>
                </div>
                <div className="bg-neutral-50 rounded-2xl p-6 md:p-8 border border-neutral-100 space-y-4">
                  <div className="flex gap-4">
                    <div className="w-2 bg-primary rounded-full flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">Early Education at Home</h4>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        He began his studies under his mother, memorizing the Holy Quran
                        and studying Urdu and Persian literature at a young age, building
                        a strong foundation in Islamic and literary knowledge.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 bg-primary rounded-full flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">Darul Uloom Nadwatul Ulama, Lucknow</h4>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        He pursued formal Islamic education at the prestigious Nadwatul Ulama
                        in Lucknow, where he studied Hadith, Tafsir, Fiqh, and Arabic literature
                        under eminent scholars of the time.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 bg-primary rounded-full flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">Darul Uloom Deoband</h4>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        He further studied Hadith sciences at Darul Uloom Deoband,
                        one of the most renowned Islamic seminaries in the world,
                        deepening his mastery of traditional Islamic sciences.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 bg-primary rounded-full flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">Lucknow University</h4>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        He also studied English at Lucknow University, enabling him to
                        engage with Western thought and modern intellectual trends — a
                        rare quality among traditional scholars of his time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contributions */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-neutral-900">
                    Contributions & Achievements
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    {
                      title: 'Chancellor, Nadwatul Ulama',
                      desc: 'Served as Chancellor of Darul Uloom Nadwatul Ulama from 1961 until his passing in 1999.',
                    },
                    {
                      title: 'Chairman, Oxford Centre for Islamic Studies',
                      desc: 'Appointed Chairman of the Oxford Centre for Islamic Studies in 1985.',
                    },
                    {
                      title: 'Muslim World League',
                      desc: 'Founding member of the Muslim World League (Rabita al-Alam al-Islami).',
                    },
                    {
                      title: 'Islamic University of Madinah',
                      desc: 'Served on the Higher Council of the Islamic University of Madinah.',
                    },
                    {
                      title: 'Payam-e-Insaniyat Movement',
                      desc: 'Founded the "Message of Humanity" movement promoting peace and inter-community harmony.',
                    },
                    {
                      title: 'All India Muslim Personal Law Board',
                      desc: 'Served as President, playing a key role in protecting Muslim personal laws in India.',
                    },
                  ].map((item, i) => (
                    <div key={i} className="bg-neutral-50 rounded-xl p-5 border border-neutral-100 hover:border-primary/20 hover:shadow-sm transition-all duration-200">
                      <h4 className="font-semibold text-neutral-900 text-sm mb-2">{item.title}</h4>
                      <p className="text-neutral-600 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Literary Works */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-neutral-900">
                    Literary Works
                  </h2>
                </div>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Maulana Nadwi was a prolific author, writing over <strong>50 books</strong> in
                  Arabic and Urdu, along with thousands of articles and seminar papers. His
                  work covered Islamic history, theology, biography, and the challenges
                  facing contemporary Muslim societies.
                </p>
                <div className="bg-accent-light rounded-2xl p-6 md:p-8 border border-accent/20">
                  <h4 className="font-serif font-semibold text-neutral-900 mb-4">Notable Works</h4>
                  <ul className="space-y-3">
                    {[
                      { title: 'Islam and the World (Maza Khasira al-Alam)', note: 'First published in 1951, received international acclaim and translated into many languages.' },
                      { title: 'Seerah of Prophet Muhammad ﷺ', note: 'A comprehensive and moving biography of the Prophet.' },
                      { title: 'Tarikh-e-Dawat-o-Azeemat', note: 'A multi-volume history of Islamic reform movements across centuries.' },
                      { title: 'Karwan-e-Madina', note: 'A literary masterpiece on the journey to Madinah and its spiritual significance.' },
                      { title: 'Purane Chiragh', note: 'Biographical sketches of eminent Islamic personalities.' },
                    ].map((book, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-accent mt-1">✦</span>
                        <div>
                          <span className="font-medium text-neutral-900 text-sm">{book.title}</span>
                          <span className="text-neutral-500 text-xs block">{book.note}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Global Influence */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-neutral-900">
                    Global Influence
                  </h2>
                </div>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Known for his exceptional command of the Arabic language, Maulana Nadwi's
                  influence extended far beyond India into the Arab world, where he was
                  widely respected as one of the foremost voices on Islam in the modern age.
                  He was a rare bridge between the Indian subcontinent's Islamic scholarly
                  traditions and the broader Muslim world.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  He held a lifelong association with the Tablighi Jamaat and was considered
                  one of the most influential figures of the Deoband school of thought. His
                  efforts in promoting interfaith dialogue, peace, and the spiritual
                  renaissance of the Muslim Ummah earned him global recognition and respect
                  across all Islamic traditions.
                </p>
              </div>

              {/* Personal Message */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-neutral-900">
                    Message to Madrasa Ziaul Uloom
                  </h2>
                </div>
                <div className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10">
                  <div className="text-accent text-5xl font-serif leading-none mb-3">"</div>
                  <p className="text-neutral-700 leading-relaxed mb-4 italic">
                    You should express gratitude to Allah that you have been chosen for this
                    institution. The movement of reform and jihad led by Hazrat Sayyid Ahmad
                    Shahid (رحمه الله) arose from here. Hazrat Shah 'Alamullah (رحمه الله) came
                    and established this settlement. Hazrat Mawlana Ilyas (رحمه الله) visited
                    here and testified to the greatness of its people in knowledge and rank.
                  </p>
                  <p className="text-neutral-700 leading-relaxed italic">
                    The message, distinction, and defining hallmark of this place are the
                    oneness of God (Tawḥīd), adherence to the Prophetic tradition, and the
                    exaltation of the Word of Truth — carry these with you as you depart from here.
                  </p>
                  <div className="text-accent text-5xl font-serif leading-none text-right -mt-1">"</div>
                  <p className="text-right text-sm font-serif font-semibold text-primary mt-2">
                    — Hazrat Maulana Syed Abul Hasan Ali Nadwi (R.A.)
                  </p>
                </div>
              </div>

              {/* Back to Home */}
              <div className="pt-4">
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
          </div>
        </div>
      </section>
    </div>
  )
}

export default FounderPage
