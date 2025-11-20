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
                <img src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1200&auto=format&fit=crop" alt="Botanical line art" className="w-full h-40 object-cover rounded" />
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-black/5">
                <img src="https://images.unsplash.com/photo-1672656946087-10e5feeea992?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCb3RhbmljYWwlMjBsaW5lJTIwYXJ0fGVufDB8MHx8fDE3NjM2NTUxMzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Botanical line art" className="w-full h-40 object-cover rounded" />
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-black/5 col-span-2">
                <img src="https://images.unsplash.com/photo-1672656946087-10e5feeea992?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCb3RhbmljYWwlMjBsaW5lJTIwYXJ0fGVufDB8MHx8fDE3NjM2NTUxMzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Botanical line art" className="w-full h-56 object-cover rounded" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
