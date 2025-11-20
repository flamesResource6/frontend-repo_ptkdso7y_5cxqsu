import { motion } from 'framer-motion'

const testimonials = [
  { name: 'Sofia L.', quote: 'The bouquet was stunning — subtle, modern, and smelled divine.', rating: 5 },
  { name: 'Daniel R.', quote: 'Clean aesthetic and exceptional quality. My home feels calmer.', rating: 5 },
  { name: 'Maya K.', quote: 'Fast delivery and the arrangement felt truly luxurious.', rating: 5 },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-emerald-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-emerald-950">What our customers say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-black/5" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} viewport={{ once: true }}>
              <div className="flex items-center gap-2 text-emerald-700">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <span key={idx}>★</span>
                ))}
              </div>
              <p className="mt-3 text-emerald-900/80">“{t.quote}”</p>
              <p className="mt-4 font-medium text-emerald-950">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
