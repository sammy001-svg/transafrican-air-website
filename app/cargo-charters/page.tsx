import CargoChartersSection from "@/components/cargo-charters"

export const metadata = {
  title: "Cargo Charters - Transafrican Air",
  description:
    "Fast and reliable cargo charter services for urgent shipments, dangerous goods, heavy cargo, and humanitarian aid",
}

export default function CargoChartersPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <CargoChartersSection />
    </main>
  )
}
