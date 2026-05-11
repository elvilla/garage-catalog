import {
  Armchair,
  CassetteTape,
  Gamepad2,
  Monitor,
  Sofa,
  Star,
} from 'lucide-react'

const categoryIcons = {
  Todos: Gamepad2,
  Tecnología: Monitor,
  Hogar: Sofa,
  Muebles: Armchair,
  'Retro / Vintage': CassetteTape,
  Varios: Star,
}

export function CategoryBar({ activeCategory, onSelectCategory, products }) {
  const categories = [
    'Todos',
    ...new Set(products.map((product) => product.category)),
  ]

  return (
    <nav id="categorias" aria-label="Categorías" className="no-print mb-5">
      <div className="mb-4 flex items-center gap-3">
        <span className="triangle-icon" />
        <h2 className="text-2xl font-black uppercase italic tracking-wide">
          Categorías
        </h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {categories.map((category) => {
          const Icon = categoryIcons[category] ?? Star
          const isActive = category === activeCategory

          return (
            <button
              className={`category-tab ${isActive ? 'active' : ''}`}
              key={category}
              onClick={() => onSelectCategory(category)}
              type="button"
            >
              <Icon size={24} />
              {category}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
