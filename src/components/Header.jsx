import { useState, useEffect } from 'react'
import { Menu, ShoppingBag, Search } from 'lucide-react'

const MINT = '#AEE1C9'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-white/60 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="lg:hidden p-2 rounded-md hover:bg-black/5" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
              <Menu className="w-6 h-6 text-emerald-900" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full" style={{ backgroundColor: MINT }} />
              <span className="font-semibold tracking-tight text-emerald-900 text-lg">Flori Mart</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-emerald-900/80">
            <a href="#" className="hover:text-emerald-900">Home</a>
            <a href="#collections" className="hover:text-emerald-900">Collections</a>
            <a href="#best" className="hover:text-emerald-900">Best Sellers</a>
            <a href="#gifts" className="hover:text-emerald-900">Gifts</a>
            <a href="#inspiration" className="hover:text-emerald-900">Inspiration</a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 bg-emerald-50/70 border border-emerald-100 rounded-full px-3 py-1.5">
              <Search className="w-4 h-4 text-emerald-600" />
              <input placeholder="Search flowers" className="bg-transparent outline-none text-sm placeholder:text-emerald-700/60" />
            </div>
            <button className="relative p-2 rounded-full border border-emerald-100 hover:bg-emerald-50/60 transition">
              <ShoppingBag className="w-5 h-5 text-emerald-800" />
              <span className="absolute -top-1 -right-1 text-[10px] bg-emerald-700 text-white rounded-full w-4 h-4 grid place-items-center">2</span>
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden pb-4">
            <div className="grid gap-2 text-emerald-900/80">
              <a href="#" className="py-2">Home</a>
              <a href="#collections" className="py-2">Collections</a>
              <a href="#best" className="py-2">Best Sellers</a>
              <a href="#gifts" className="py-2">Gifts</a>
              <a href="#inspiration" className="py-2">Inspiration</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
