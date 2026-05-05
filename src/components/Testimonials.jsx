const testimonials = [
  {
    name: 'Ahmad Ali',
    role: 'Parent',
    text: 'My son has been studying at Madrasa Ziaul Uloom for three years now. The environment is truly Islamic, the teachers are dedicated, and the standard of education is excellent. I am grateful for the positive changes I see in my child.',
    initial: 'A',
  },
  {
    name: 'Mohammed Yusuf',
    role: 'Graduate, Batch 2020',
    text: 'Madrasa Ziaul Uloom shaped my character and knowledge. The Hifz program was rigorous yet supportive. The teachers guided us not just academically but spiritually. I now serve as an Imam at a local masjid, Alhamdulillah.',
    initial: 'M',
  },
  {
    name: 'Khalid Hussain',
    role: 'Alumni & Donor',
    text: 'As an alumnus of this great institution, I can attest to the quality of education provided here. The values instilled in me during my years here continue to guide my life. I am proud to support its mission.',
    initial: 'K',
  },
]

function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-arabic text-lg mb-2">شهادات</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            What People Say
          </h2>
          <div className="flex items-center justify-center gap-4 mt-2">
            <div className="h-px w-16 bg-white/30" />
            <span className="text-accent text-xl">✦</span>
            <div className="h-px w-16 bg-white/30" />
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-colors duration-300"
            >
              {/* Quote Icon */}
              <div className="text-accent text-4xl font-serif mb-4">"</div>

              {/* Text */}
              <p className="text-white/90 leading-relaxed text-sm mb-8">
                {item.text}
              </p>

              {/* Person */}
              <div className="flex items-center gap-4 border-t border-white/10 pt-5">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-serif font-bold text-lg">
                    {item.initial}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">{item.name}</h4>
                  <p className="text-white/60 text-xs">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
