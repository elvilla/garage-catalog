import { ExternalLink } from 'lucide-react'

export function ProductCard({ product }) {
  return (
    <article className={`product-card group ${product.accent ?? 'cyan'}`}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-black/70">
        <img
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
          src={product.image}
        />
        <span className="product-badge">{product.badge}</span>
      </div>

      <div className="flex flex-1 flex-col gap-3 pt-4">
        <div>
          <h2 className="text-lg font-black uppercase leading-tight text-white">
            {product.name}
          </h2>
          <p className="mt-2 min-h-[52px] text-sm leading-6 text-slate-200">
            {product.description}
          </p>
        </div>

        <div className="mt-auto flex flex-col gap-3">
          <p className="price-text">{formatPrice(product.price)}</p>
          <a
            className="ml-link"
            href={product.mercadoLibreUrl}
            rel="noreferrer"
            target="_blank"
          >
            Ver en Mercado Libre
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </article>
  )
}

function formatPrice(price) {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(price)
}
