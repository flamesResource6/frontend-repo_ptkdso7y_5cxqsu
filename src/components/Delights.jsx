import { motion } from 'framer-motion'

export default function Delights() {
  const items = [
    { title: 'Morning Calm', image: 'https://images.unsplash.com/photo-1709897633539-68625c0043e3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNb3JuaW5nJTIwQ2FsbXxlbnwwfDB8fHwxNzYzNjU3MjAxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { title: 'Desk Greens', image: 'https://images.unsplash.com/photo-1709897633539-68625c0043e3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNb3JuaW5nJTIwQ2FsbXxlbnwwfDB8fHwxNzYzNjU3MjAxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { title: 'Evening Glow', image: 'https://images.unsplash.com/photo-1709897633539-68625c0043e3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNb3JuaW5nJTIwQ2FsbXxlbnwwfDB8fHwxNzYzNjU3MjAxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-emerald-950">Delights for Every Moment</h2>
          <p className="text-emerald-900/70">Soft, emotional arrangements that elevate daily rituals.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div key={it.title} className="group rounded-3xl overflow-hidden shadow-sm ring-1 ring-black/5" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} viewport={{ once: true }}>
              <img src={it.image} alt={it.title} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="p-4">
                <h3 className="font-medium text-emerald-950">{it.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
