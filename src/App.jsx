import { useMemo, useState } from 'react'
import products from './data/products.json'
import { CategoryBar } from './components/CategoryBar.jsx'
import { Header } from './components/Header.jsx'
import { ProductGrid } from './components/ProductGrid.jsx'
import { Benefits } from './components/Benefits.jsx'
import { CatalogFooter } from './components/CatalogFooter.jsx'

export default function App() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const visibleProducts = useMemo(() => {
    if (activeCategory === 'Todos') {
      return products
    }

    return products.filter((product) => product.category === activeCategory)
  }, [activeCategory])

  return (
    <main className="min-h-screen bg-catalog-ink px-3 py-3 text-white sm:px-5">
      <div className="site-shell relative mx-auto flex w-full max-w-[1500px] flex-col overflow-hidden rounded-[22px] border border-slate-700/80 bg-catalog-ink">
        <Header productCount={products.length} />
        <section className="relative z-10 border-t border-slate-700/70 bg-black/55 px-4 py-5 backdrop-blur-md sm:px-5 lg:px-6">
          <CategoryBar
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            products={products}
          />
          <ProductGrid products={visibleProducts} />
          <Benefits />
        </section>
        <CatalogFooter />
      </div>
    </main>
  )
}
