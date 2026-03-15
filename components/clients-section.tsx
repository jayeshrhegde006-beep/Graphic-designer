export default function ClientsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16">
      {/* Header */}
      <div className="mb-12 flex justify-end px-4 md:px-8">
        <div className="flex items-center gap-3 rounded-full bg-[#FF8C42] px-8 py-3 md:px-12 md:py-4">
          <span className="text-2xl font-bold text-black md:text-3xl">OUR</span>
          <span className="text-2xl font-bold text-white md:text-3xl">CLIENT</span>
        </div>
      </div>

      {/* Clients Grid */}
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {/* Row 1 */}
          <ClientLogo name="Honda" />
          <ClientLogo name="Nexa" />
          <ClientLogo name="Lenskart" />
          <ClientLogo name="RCM" />
          <ClientLogo name="Fremuri Travel" />

          {/* Row 2 */}
          <ClientLogo name="TIL" />
          <ClientLogo name="Ganesha" />
          <ClientLogo name="GEC India" />
          <ClientLogo name="Metro" />
          <ClientLogo name="Satyam Coffee" />

          {/* Row 3 */}
          <ClientLogo name="Dil Kusa" />
          <ClientLogo name="Paramone" />
          <ClientLogo name="Royal Garden" />
          <ClientLogo name="Jain Caterers" />
          <ClientLogo name="Unique" />

          {/* Row 4 */}
          <ClientLogo name="Rotortech" />
          <ClientLogo name="Krezzy Group" />
          <ClientLogo name="Royal Biroti" />
          <ClientLogo name="Photo Factory" />
          <ClientLogo name="RCS" />

          {/* Row 5 */}
          <ClientLogo name="HM-Tech" />
          <ClientLogo name="Mira Bhayandar" />
          <ClientLogo name="ANM" />
          <ClientLogo name="First Tourists" />
          <ClientLogo name="Brahmas" />

          {/* Row 6 */}
          <ClientLogo name="Travelworld" />
          <ClientLogo name="Meditech Hospital" />
          <ClientLogo name="Nemo Pet Shop" />
          <ClientLogo name="Science Point" />
          <ClientLogo name="Golden Sand" />

          {/* Row 7 */}
          <ClientLogo name="Magic Kitchen" />
          <ClientLogo name="Anand Gardens" />
        </div>
      </div>

      {/* Curved Bottom Design */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-black" style={{
        clipPath: 'polygon(0 30%, 100% 0%, 100% 100%, 0 100%)'
      }} />
    </section>
  )
}

interface ClientLogoProps {
  name: string
}

function ClientLogo({ name }: ClientLogoProps) {
  return (
    <div className="flex items-center justify-center rounded-lg border-2 border-gray-200 bg-gray-50 p-4 transition-all duration-300 hover:border-[#FF8C42] hover:bg-orange-50 md:p-6">
      <div className="text-center">
        <p className="text-xs font-semibold text-gray-700 md:text-sm">{name}</p>
      </div>
    </div>
  )
}
