export default function Newsletter() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl p-8 bg-emerald-50/80 ring-1 ring-black/5 shadow-sm grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-emerald-950">Stay in bloom</h3>
            <p className="text-emerald-900/70">Get fresh arrivals, styling tips, and exclusive offers.</p>
          </div>
          <form className="flex gap-3">
            <input type="email" placeholder="Your email" className="flex-1 rounded-full px-4 py-3 bg-white/90 border border-emerald-200 outline-none" />
            <button className="px-6 py-3 rounded-full bg-emerald-800 text-white hover:bg-emerald-900 transition">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  )
}
