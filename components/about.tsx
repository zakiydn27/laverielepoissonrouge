"use client"

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-background text-foreground transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative h-96 flex items-center justify-center">
            {/* efek glow di belakang gambar */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-3xl"></div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7Y3Zy6QUgMcVqxwc3BO2Z6X8QTHyUn.png"
              alt="Le Poisson Rouge Facility"
              className="relative w-full h-full object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                À Propos de Nous
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Depuis plus de 10 ans, Le Poisson Rouge est votre partenaire de
                confiance pour le lavage et le séchage de vos vêtements. Nous
                combinons expertise traditionnelle et technologie moderne.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Équipements Modernes",
                  desc: "Machines dernière génération pour un lavage optimal.",
                },
                {
                  title: "Équipe Professionnelle",
                  desc: "Personnel formé et attentif à vos besoins.",
                },
                {
                  title: "Engagement Écologique",
                  desc: "Produits respectueux de l'environnement et pratiques durables.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
