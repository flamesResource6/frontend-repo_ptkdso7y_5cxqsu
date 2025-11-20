import { motion } from 'framer-motion'
import { Cake, Heart, Flower2, GraduationCap, Gift, Gem, HandHeart, Flower, Briefcase, Sparkles, HeartHandshake, Baby } from 'lucide-react'

const ICONS = [
  { title: "Birthday", Icon: Cake },
  { title: "Anniversary", Icon: Gem },
  { title: "Wedding", Icon: Flower2 },
  { title: "Graduation", Icon: GraduationCap },
  { title: "Valentine's Day", Icon: Heart },
  { title: "Mother's Day", Icon: Flower },
  { title: "Father's Day", Icon: Briefcase },
  { title: "Get Well Soon", Icon: HandHeart },
  { title: "Thank You", Icon: HeartHandshake },
]

export default function GiftsIcons() {
  return (
    <section id="gifts" className="py-16 bg-emerald-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-emerald-950">Gifts for Every Moment</h2>
          <p className="text-emerald-900/70">Simple line icons in mint green with subtle hover.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
          {ICONS.map((item, i) => (
            <motion.a key={item.title} href="#" className="group flex flex-col items-center justify-center text-center bg-white rounded-2xl p-6 shadow-sm ring-1 ring-black/5 hover:shadow-md transition" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: i * 0.04 }} viewport={{ once: true }}>
              <item.Icon className="w-8 h-8 text-emerald-700 group-hover:text-emerald-900 transition" />
              <span className="mt-3 font-medium text-emerald-950">{item.title}</span>
              <span className="mt-1 text-sm text-emerald-700/70 group-hover:text-emerald-900/80">Shop Now →</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
