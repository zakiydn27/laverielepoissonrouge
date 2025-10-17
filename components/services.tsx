import { Droplet, Zap, Leaf, Clock } from "lucide-react"

const services = [
  {
    icon: Droplet,
    title: "Lavage Standard",
    description: "Nettoyage professionnel de vos vêtements avec détergents de qualité premium.",
  },
  {
    icon: Zap,
    title: "Séchage Rapide",
    description: "Technologie de séchage haute performance pour des résultats impeccables.",
  },
  {
    icon: Leaf,
    title: "Écologique",
    description: "Produits respectueux de l'environnement et procédés durables.",
  },
  {
    icon: Clock,
    title: "Service Express",
    description: "Lavage et séchage en moins de 2 heures pour vos besoins urgents.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nos Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre gamme complète de services de lavage conçus pour répondre à tous vos besoins.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
