import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedCategories from './components/FeaturedCategories'
import ProductGrid from './components/ProductGrid'
import NewCollections from './components/NewCollections'
import Delights from './components/Delights'
import GiftsIcons from './components/GiftsIcons'
import Botanical from './components/Botanical'
import PromoBanner from './components/PromoBanner'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Inspiration from './components/Inspiration'

function App() {
  return (
    <div className="min-h-screen bg-white text-emerald-900">
      <Header />
      <main>
        <Hero />
        <FeaturedCategories />
        <ProductGrid title="Best Sellers" id="best" />
        <NewCollections />
        <Delights />
        <GiftsIcons />
        <Botanical />
        <PromoBanner />
        <Testimonials />
        <Newsletter />
        <Inspiration />
      </main>
      <footer className="py-10 text-center text-sm text-emerald-900/70">© {new Date().getFullYear()} Flori Mart • Botanical elegance, thoughtfully delivered.</footer>
    </div>
  )
}

export default App
