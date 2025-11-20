import { motion } from 'framer-motion'

export default function Inspiration() {
  const items = [
    'https://source.unsplash.com/1600x1200/?indoor,plant,pot,studio',
    'https://source.unsplash.com/1600x1200/?bouquet,flowers,vase,studio',
    'https://source.unsplash.com/1600x1200/?succulent,plant,pot,studio',
  ]
  return (
    <section id="inspiration" className="py-16 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-emerald-950">Fresh Inspiration</h2>
          <p className="text-emerald-900/70">New Ideas for Your Space</p>
          <p className="mt-2 text-emerald-900/70">Discover innovative ways to transform your home with plants. Get inspired by trending plant styling ideas and creative arrangements.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((src, i) => (
            <motion.div key={src} className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} viewport={{ once: true }}>
              <img src={src} alt="Inspiration" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
