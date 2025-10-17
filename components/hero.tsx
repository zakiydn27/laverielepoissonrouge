import { link } from "fs";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 z-10">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Votre Linge,
              <span className="text-primary"> Notre Passion</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Découvrez une expérience de lavage moderne et écologique. Nous prenons soin de vos vêtements avec
              expertise et dévouement.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-96 md:h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-3xl"></div>
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src="/logo.png"
              alt="Le Poisson Rouge Logo"
              className="w-64 h-64 object-contain drop-shadow-2xl animate-bounce"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
