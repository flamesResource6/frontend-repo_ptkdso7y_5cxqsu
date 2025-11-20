import { Phone, Mail, MapPin, Leaf } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <footer className="relative mt-20 border-t border-emerald-900/10 bg-emerald-50/40">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-emerald-50/60 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand + Contact */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <Leaf size={18} />
              </div>
              <span className="text-xl font-semibold tracking-wide text-emerald-900">FLORI MART</span>
            </div>
            <p className="text-emerald-900/80 leading-relaxed">
              Your trusted partner in creating beautiful, thriving indoor gardens. We provide premium plants, expert care advice, and everything you need to bring nature into your home.
            </p>

            <div className="space-y-3 text-sm text-emerald-900/80">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-emerald-600" />
                <a href="tel:+15551234567" className="hover:text-emerald-700 transition-colors">+1 (555) 123-4567</a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-emerald-600" />
                <a href="mailto:info@flori.com" className="hover:text-emerald-700 transition-colors">info@flori.com</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-emerald-600" />
                <span>123 Garden Street, Plant City, PC 12345</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-800">Quick Links</h3>
              <ul className="mt-4 space-y-3 text-emerald-900/80">
                <li><a href="#about" className="hover:text-emerald-700 transition-colors">About Us</a></li>
                <li><a href="#shop" className="hover:text-emerald-700 transition-colors">Shop</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-800">Categories</h3>
              <ul className="mt-4 space-y-3 text-emerald-900/80">
                <li><a href="#indoor" className="hover:text-emerald-700 transition-colors">Indoor Plants</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-800">Support</h3>
              <ul className="mt-4 space-y-3 text-emerald-900/80">
                <li><a href="#shipping" className="hover:text-emerald-700 transition-colors">Shipping Info</a></li>
                <li><a href="#returns" className="hover:text-emerald-700 transition-colors">Returns</a></li>
                <li><a href="#guide" className="hover:text-emerald-700 transition-colors">Plant Guide</a></li>
                <li><a href="#faq" className="hover:text-emerald-700 transition-colors">FAQ</a></li>
                <li><a href="#help" className="hover:text-emerald-700 transition-colors">Help Center</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-emerald-900/10 bg-white/60 p-6 shadow-sm backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-emerald-900">Stay in the Loop</h3>
              <p className="mt-2 text-sm text-emerald-900/80">Subscribe to get special offers, plant care tips, and the latest updates delivered to your inbox.</p>
              <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
                <label htmlFor="footer-email" className="sr-only">Email address</label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  placeholder="Your email address"
                  className="w-full rounded-xl border border-emerald-900/20 bg-white px-4 py-2.5 text-sm text-emerald-900 placeholder-emerald-900/40 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-2 text-xs text-emerald-900/60">We respect your privacy. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-emerald-900/10 pt-6 text-xs text-emerald-900/60 sm:flex-row">
          <p>© {year} Flori Mart. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-emerald-700 transition-colors">Privacy</a>
            <span className="select-none text-emerald-900/30">•</span>
            <a href="#terms" className="hover:text-emerald-700 transition-colors">Terms</a>
            <span className="select-none text-emerald-900/30">•</span>
            <a href="#cookies" className="hover:text-emerald-700 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
