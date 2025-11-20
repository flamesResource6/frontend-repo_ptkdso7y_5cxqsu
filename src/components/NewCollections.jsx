import { motion } from 'framer-motion'

export default function NewCollections() {
  const items = [
    { title: 'Spring Edit', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Earthy Neutrals', image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Minimal Greens', image: 'https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?q=80&w=1600&auto=format&fit=crop' },
  ]

  return (
    <section className="py-16 bg-emerald-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-emerald-950">New Arrivals</h2>
          <p className="text-emerald-900/70">Freshly curated collections with soft mint undertones.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.a key={it.title} href="#" className="group bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} viewport={{ once: true }}>
              <img src={it.image} alt={it.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="p-4 flex items-center justify-between">
                <h3 className="font-medium text-emerald-950">{it.title}</h3>
                <span className="text-emerald-700 group-hover:text-emerald-900">Shop Now →</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
