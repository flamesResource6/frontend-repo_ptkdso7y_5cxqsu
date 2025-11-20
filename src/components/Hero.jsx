import { motion } from 'framer-motion'

const MINT = '#AEE1C9'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -right-24 w-[38rem] h-[38rem] rounded-full blur-3xl opacity-40" style={{ background: MINT }} />
        <div className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-30 bg-emerald-200" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <span className="inline-block text-sm tracking-wider uppercase mb-4 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">Luxurious Floral Style</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-emerald-950 tracking-tight">
              Botanical beauty, delivered with care.
            </h1>
            <p className="mt-5 text-lg text-emerald-900/70 max-w-xl">
              Curated bouquets and houseplants crafted for warm, modern spaces. Naturally elegant. Effortlessly timeless.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#best" className="inline-flex items-center justify-center px-6 py-3 rounded-full text-emerald-950 font-medium shadow-sm hover:shadow transition" style={{ backgroundColor: MINT }}>
                Shop Now
              </a>
              <a href="#collections" className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-emerald-200 text-emerald-900 hover:bg-emerald-50/60 transition">
                Explore Collections
              </a>
            </div>
          </motion.div>

          <motion.div className="relative" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
            <div className="relative rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <img src="https://images.unsplash.com/photo-1759004612201-87c2bad9eb3e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFbGVnYW50JTIwYm91cXVldCUyMHN0eWxlZCUyMGlufGVufDB8MHx8fDE3NjM2NTcxOTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Elegant bouquet styled in a glass vase" className="w-full h-[380px] object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(120deg, rgba(174,225,201,0.35), rgba(255,255,255,0))' }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
