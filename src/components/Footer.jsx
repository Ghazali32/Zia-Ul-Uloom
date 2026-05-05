import { Link } from 'react-router-dom'

function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'About', href: '/about', isRoute: true },
    { name: 'Founder', href: '/founder', isRoute: true },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Contact', href: '/#contact' },
  ]

  const programs = [
    { name: 'Hifz-ul-Quran', href: '/#courses' },
    { name: 'Nazra Quran', href: '/#courses' },
    { name: 'Alimiyat (8 Years)', href: '/#courses' },
    { name: 'Khususi (5 Years)', href: '/#courses' },
  ]

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-arabic font-bold">ض</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg">Madrasa Ziaul Uloom</h3>
                <p className="text-xs text-neutral-400 font-arabic">مدرسة ضياء العلوم</p>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              A center of Islamic learning since 1972, dedicated to the preservation
              of Quranic education and Islamic scholarship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold mb-5 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.isRoute ? (
                    <Link to={link.href} className="text-neutral-400 hover:text-white text-sm transition-colors duration-200">
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-neutral-400 hover:text-white text-sm transition-colors duration-200">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-serif font-semibold mb-5 text-accent">Programs</h4>
            <ul className="space-y-3">
              {programs.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-neutral-400 hover:text-white text-sm transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold mb-5 text-accent">Contact</h4>
            <div className="space-y-3 text-sm text-neutral-400">
              <p>Vill. Maidanpur, Post. Takiya Kalan, Dist. Raebareli (U.P.) 229001</p>
              <p>
                <a href="tel:9451764399" className="hover:text-white transition-colors">
                  +91 9451764399
                </a>
              </p>
              <p>
                <a href="mailto:info@madrasaziaululoom.org" className="hover:text-white transition-colors">
                  info@madrasaziaululoom.org
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Madrasa Ziaul Uloom, Raebareli. All rights reserved.
          </p>
          <p className="text-neutral-600 text-xs font-arabic">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
