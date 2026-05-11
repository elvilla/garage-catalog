import { Download, PackageSearch, Printer } from 'lucide-react'

export function Header({ productCount }) {
  return (
    <header className="hero-scene print-header relative min-h-[560px] overflow-hidden px-5 pb-10 pt-5 sm:px-9 lg:px-11">
      <div className="stars-layer" />
      <div className="hero-grid" />
      <div className="hero-sun" />
      <div className="lightning lightning-left" />
      <div className="lightning lightning-right" />

      <nav className="relative z-20 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <a className="logo-lockup no-underline" href="#catalogo">
          <span className="logo-script">El Villa de</span>
          <span className="logo-main">Garage!</span>
          <span className="logo-tag">Objetos abandonados buscan un nuevo hogar</span>
        </a>

        <div className="flex flex-wrap items-center gap-5 text-sm font-black uppercase text-white/90 sm:gap-10">
          <a className="nav-link active" href="#inicio">
            Inicio
          </a>
          <a className="nav-link" href="#catalogo">
            Todos los productos
          </a>
          <a className="nav-link" href="#categorias">
            Categorías
          </a>
          <a className="nav-link" href="#sobre-mi">
            Sobre mí
          </a>
        </div>

        <div className="ml-card">
          <span>cara a cara o por</span>
          <strong>mercado libre</strong>
        </div>
      </nav>

      <div className="relative z-10 mt-14 grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div id="inicio" className="max-w-2xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-catalog-glow">
            {productCount} objetos publicados
          </p>
          <h1 className="hero-title">
            Falopa Funcional
            <span>que quiere seguir siendolo</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-100">
            Tecnología, deco, muebles, gente  y cosas varias que ya no entran en casa
            pero todavía tienen mucho para dar.
          </p>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
            <a className="hero-button cyan" href="#catalogo">
              <PackageSearch size={20} />
              Ver catálogo
            </a>
            <button
              className="hero-button yellow"
              onClick={() => window.print()}
              type="button"
            >
              <Download size={20} />
              Descargar catálogo PDF
            </button>
          </div>
        </div>

        <div className="hero-objects" aria-hidden="true">
          <div className="retro-computer">
            <div className="monitor">
              <div className="monitor-screen">:)</div>
            </div>
            <div className="computer-base" />
          </div>
          <div className="game-over">
            Game
            <br />
            Over
          </div>
          <div className="cube" />
          <div className="camera-shape" />
        </div>
      </div>

      <button
        className="print-floating no-print"
        onClick={() => window.print()}
        title="Imprimir catálogo"
        type="button"
      >
        <Printer size={19} />
      </button>
    </header>
  )
}
