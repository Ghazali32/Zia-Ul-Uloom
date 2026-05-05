const announcements = [
  {
    title: 'Admissions Open for 2025-26',
    date: 'May 2025',
    description: 'New admissions are now open for Hifz, Nazra, Alimiyat, and Khususi programs.',
    badge: 'New',
    badgeColor: 'bg-red-50 text-red-600',
  },
  {
    title: 'Annual Examination Results Declared',
    date: 'April 2025',
    description: 'Results for the annual examinations have been declared. Collect mark sheets from the office.',
    badge: 'Results',
    badgeColor: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Jalsah Taqseem-e-Asnad (Convocation)',
    date: 'March 2025',
    description: 'Annual convocation ceremony will be held next month. All graduates and families are invited.',
    badge: 'Event',
    badgeColor: 'bg-green-50 text-green-700',
  },
  {
    title: 'Summer Vacation Notice',
    date: 'June 2025',
    description: 'Summer vacation from 1st June. Classes resume on 15th July, InshaAllah.',
    badge: 'Notice',
    badgeColor: 'bg-amber-50 text-amber-700',
  },
]

function Announcements() {
  return (
    <section className="py-20 md:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-arabic text-lg mb-2">الإعلانات</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
            Announcements & Notices
          </h2>
          <div className="islamic-divider">
            <span className="text-accent text-xl">✦</span>
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {announcements.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row sm:items-start gap-4"
            >
              <div className="flex-shrink-0">
                <div className="inline-block bg-primary-light text-primary px-3 py-1.5 rounded-lg">
                  <p className="text-xs font-medium">{item.date}</p>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <h3 className="font-serif font-semibold text-neutral-900">{item.title}</h3>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Announcements
