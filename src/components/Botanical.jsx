import { motion } from 'framer-motion'

export default function Botanical() {
  return (
    <section className="py-16 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl font-semibold text-emerald-950 mb-3">Botanical Illustration</h2>
            <p className="text-emerald-900/70 max-w-xl">Minimal, editorial typographic treatment pairs with delicate botanical drawings in soft mint for a refined, gallery-like feel.</p>
          </motion.div>
          <motion.div className="relative" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }} viewport={{ once: true }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-black/5">
                <img src="https://images.unsplash.com/photo-1591052590769-ab1e4bb10580?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCb3RhbmljYWwlMjBsaW5lJTIwYXJ0JTIwb2YlMjBsZWF2ZXN8ZW58MHwwfHx8MTc2MzY1NzE5OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Botanical line art of leaves" className="w-full h-40 object-cover rounded" />
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-black/5">
                <img src="https://images.unsplash.com/photo-1536316754104-90daa92e4eb0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCb3RhbmljYWwlMjBsaW5lJTIwYXJ0JTIwb2YlMjBmbG93ZXJzfGVufDB8MHx8fDE3NjM2NTcyMDB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Botanical line art of flowers" className="w-full h-40 object-cover rounded" />
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-black/5 col-span-2">
                <img src="https://images.unsplash.com/photo-1747767719129-92ce413f9e73?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMYXJnZSUyMGJvdGFuaWNhbCUyMGlsbHVzdHJhdGlvbnxlbnwwfDB8fHwxNzYzNjU3MjAwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Large botanical illustration" className="w-full h-56 object-cover rounded" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
