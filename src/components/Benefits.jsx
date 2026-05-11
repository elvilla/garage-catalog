import { Rocket, ShieldCheck, Smile, Star } from 'lucide-react'

const benefits = [
  {
    icon: Rocket,
    title: 'Envíos a todo el país',
    text: 'Por Mercado Envíos rápido y seguro.',
  },
  {
    icon: ShieldCheck,
    title: 'Compra protegida',
    text: 'Todas las compras están protegidas por ML.',
  },
  {
    icon: Star,
    title: 'Productos probados',
    text: 'Todo lo que vendo funciona. Si no, lo aclaro siempre.',
  },
  {
    icon: Smile,
    title: 'Atención copada',
    text: 'Cualquier duda, acá estoy.',
  },
]

export function Benefits() {
  return (
    <section className="no-print mt-5 grid overflow-hidden rounded-md border border-catalog-line/90 bg-black/45 sm:grid-cols-2 lg:grid-cols-4">
      {benefits.map((benefit) => {
        const Icon = benefit.icon

        return (
          <article
            className="flex gap-4 border-catalog-line/25 p-5 lg:border-r last:lg:border-r-0"
            key={benefit.title}
          >
            <Icon className="mt-1 shrink-0 text-catalog-line" size={38} />
            <div>
              <h3 className="text-sm font-black uppercase text-catalog-line">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-white">
                {benefit.text}
              </p>
            </div>
          </article>
        )
      })}
    </section>
  )
}
