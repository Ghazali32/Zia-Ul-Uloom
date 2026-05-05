const courses = [
  {
    name: 'Hifz-ul-Quran',
    nameAr: 'حفظ القرآن',
    description:
      'Memorization of the Holy Quran with student hostel, best teachers, and necessary facilities with strict supervision.',
    duration: 'Varies',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    name: 'Nazra Quran',
    nameAr: 'ناظرۂ قرآن',
    description:
      'Reading, pronunciation (Qirat) and identifying the letters of the Holy Quran. Essential for younger boys to start at a young age.',
    duration: '1–2 Years',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    name: 'Alimiyat',
    nameAr: 'عالمیت',
    description:
      'Comprehensive course in Arabic language, Islamic Law, jurisprudence, Hadith traditions, and Quranic commentary taught in detail.',
    duration: '8 Years',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    name: 'Khususi',
    nameAr: 'خصوصی',
    description:
      'A condensed version of the Alimiyat course for students who have completed Intermediate or XIth class of CBSE.',
    duration: '5 Years',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
]

function Courses() {
  return (
    <section id="courses" className="py-20 md:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-arabic text-lg mb-2">الدورات والبرامج</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
            Courses & Programs
          </h2>
          <div className="islamic-divider">
            <span className="text-accent text-xl">✦</span>
          </div>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            We offer comprehensive Islamic education programs designed to nurture scholars of the next generation.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {course.icon}
              </div>

              {/* Arabic Name */}
              <p className="text-accent font-arabic text-sm mb-1">{course.nameAr}</p>

              {/* Name */}
              <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-3">
                {course.name}
              </h3>

              {/* Description */}
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                {course.description}
              </p>

              {/* Duration Badge */}
              <div className="inline-flex items-center gap-1.5 bg-primary-light text-primary text-xs font-medium px-3 py-1.5 rounded-full">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {course.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses
