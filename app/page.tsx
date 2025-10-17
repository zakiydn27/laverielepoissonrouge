import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import ProcessGuide from "@/components/process-guide"
import About from "@/components/about"
import OpeningHours from "@/components/opening-hours"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <ProcessGuide />
      <About />
      <OpeningHours />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
