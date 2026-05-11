const message =
  '// NUEVOS HALLAZGOS // LINKS DIRECTOS A MERCADO LIBRE // CATALOGO IMPRIMIBLE // ENVIO SEGUN PUBLICACION //'

export function Marquee() {
  return (
    <div className="no-print overflow-hidden border-y-2 border-catalog-paper bg-catalog-hot py-2 text-sm font-black uppercase text-black">
      <div className="marquee-track flex w-max gap-8 whitespace-nowrap">
        <span>{message}</span>
        <span>{message}</span>
        <span>{message}</span>
      </div>
    </div>
  )
}
