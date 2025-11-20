import { motion } from 'framer-motion'

const products = [
  { id: 1, name: 'Blush Peony Bouquet', price: '$59', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop' },
  { id: 2, name: 'Emerald Fern Bundle', price: '$39', image: 'https://images.unsplash.com/photo-1632827235256-abe7952a1936?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCbHVzaCUyMFBlb255JTIwQm91cXVldHxlbnwwfDB8fHwxNzYzNjU1MTM1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 3, name: 'Ivory Rose Classic', price: '$79', image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1600&auto=format&fit=crop' },
  { id: 4, name: 'Modern Monstera', price: '$45', image: 'https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?q=80&w=1600&auto=format&fit=crop' },
]

export default function ProductGrid({ title = 'Best Sellers', id = 'best' }) {
  return (
    <section id={id} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-emerald-950">{title}</h2>
          <a href="#" className="text-emerald-700 hover:text-emerald-900">Shop all</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div key={p.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} viewport={{ once: true }}>
              <div className="relative">
                <img src={p.image} alt={p.name} className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-emerald-950">{p.name}</h3>
                  <span className="text-emerald-800">{p.price}</span>
                </div>
                <button className="mt-3 w-full bg-emerald-200 text-emerald-950 hover:bg-emerald-300 rounded-full py-2 text-sm font-medium transition">Add to cart</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
