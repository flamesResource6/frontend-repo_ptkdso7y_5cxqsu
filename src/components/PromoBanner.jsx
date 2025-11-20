import { motion } from 'framer-motion'

export default function PromoBanner() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-sm bg-gradient-to-r from-emerald-100 to-white" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} viewport={{ once: true }}>
          <div className="grid md:grid-cols-3 gap-0">
            <div className="md:col-span-2 p-8">
              <span className="inline-block text-xs uppercase tracking-wider text-emerald-800 bg-emerald-200/80 rounded-full px-2 py-1">This Weekend</span>
              <h3 className="mt-3 text-2xl sm:text-3xl font-semibold text-emerald-950">20% Off — Fresh Handcrafted Bouquets</h3>
              <p className="mt-2 text-emerald-900/70 max-w-lg">Celebrate the season with luxurious arrangements. Naturally elegant, crafted with care.</p>
              <div className="mt-6">
                <a href="#best" className="inline-flex px-5 py-2.5 rounded-full bg-emerald-800 text-white hover:bg-emerald-900 transition">Shop the Sale</a>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1606836483691-268e1cbcb477?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCb3VxdWV0JTIwcHJvZHVjdCUyMHNob3R8ZW58MHwwfHx8MTc2MzY1NzIwMnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Bouquet product shot" className="w-full h-56 md:h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
