function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-arabic text-lg mb-2">اتصل بنا</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
            Contact Us
          </h2>
          <div className="islamic-divider">
            <span className="text-accent text-xl">✦</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif font-semibold text-neutral-900 mb-1">Address</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Madrasa Ziaul Uloom, Vill. Maidanpur, Post. Takiya Kalan,<br />
                  Gram: Lohanipur, Dist. Raebareli (U.P.) 229001
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif font-semibold text-neutral-900 mb-1">Phone</h3>
                <div className="space-y-1.5 text-sm text-neutral-600">
                  <p>Mufti Rashid Husain Nadwi (Principal): <a href="tel:9451764399" className="text-primary hover:underline">9451764399</a></p>
                  <p>Maulana Ayub Nadwi (Supervisor): <a href="tel:9919331295" className="text-primary hover:underline">9919331295</a></p>
                  <p>Maulana Syed Zahir Husaini Nadwi (Office): <a href="tel:7905134550" className="text-primary hover:underline">7905134550</a></p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif font-semibold text-neutral-900 mb-1">Email</h3>
                <p className="text-neutral-600 text-sm">
                  <a href="mailto:info@madrasaziaululoom.org" className="text-primary hover:underline">
                    info@madrasaziaululoom.org
                  </a>
                </p>
              </div>
            </div>

            {/* YouTube */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif font-semibold text-neutral-900 mb-1">YouTube</h3>
                <a href="https://youtube.com/@madrasaziaululoomraebareli" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  @madrasaziaululoomraebareli
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-100 h-80 lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.0!2d81.2367!3d26.2313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ba17c6c5c0a65%3A0xb1d49c0238aa7882!2sZia%20Ul%20Uloom!5e0!3m2!1sen!2sin!4v1778013845872!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '320px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Madrasa Ziaul Uloom Location"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
