import { ProductCard } from './ProductCard.jsx'

export function ProductGrid({ products }) {
  return (
    <section
      id="catalogo"
      aria-label="Product list"
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  )
}
