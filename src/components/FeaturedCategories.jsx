import { motion } from 'framer-motion'

const categories = [
  {
    title: 'Bouquets',
    image: 'https://images.unsplash.com/photo-1623406795110-99f1c4325084?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCb3VxdWV0c3xlbnwwfDB8fHwxNzYzNjU3MTkzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Houseplants',
    image: 'https://images.unsplash.com/photo-1623406795110-99f1c4325084?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCb3VxdWV0c3xlbnwwfDB8fHwxNzYzNjU3MTkzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Dried Florals',
    image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIb3VzZXBsYW50c3xlbnwwfDB8fHwxNzYzNjU3MTk0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Gift Sets',
    image: 'https://images.unsplash.com/photo-1668365154460-bb3bb9451a4b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEcmllZCUyMEZsb3JhbHN8ZW58MHwwfHx8MTc2MzY1NzE5NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

export default function FeaturedCategories() {
  return (
    <section id="collections" className="py-14 sm:py-20 bg-gradient-to-b from-white to-emerald-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-emerald-950">Featured Categories</h2>
          <a href="#" className="text-emerald-700 hover:text-emerald-900">View all</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((c, i) => (
            <motion.a key={c.title} href="#" className="group relative rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5 bg-white" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} viewport={{ once: true }}>
              <img src={c.image} alt={c.title} className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium text-emerald-950 bg-emerald-100/90">{c.title}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
