import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Le Poisson Rouge</h3>
            <p className="text-sm opacity-80">
              Votre partenaire de confiance pour le lavage et le séchage de vos vêtements.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="#" className="hover:opacity-100 transition">
                  Lavage Standard
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition">
                  Séchage Rapide
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition">
                  Service Express
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="#" className="hover:opacity-100 transition">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition">
                  Mentions Légales
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Suivez-nous</h4>
            <div className="flex gap-4">
              <Link href="#" className="hover:opacity-80 transition">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:opacity-80 transition">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:opacity-80 transition">
                <Twitter size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 Le Poisson Rouge. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
