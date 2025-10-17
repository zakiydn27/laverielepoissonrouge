"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nous Contacter</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Avez-vous des questions? Nous serions ravis de vous aider.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Téléphone</h3>
            <p className="text-muted-foreground">+33 4 65 84 67 17</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground">contact@lepoisson-rouge.fr</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Adresse</h3>
            <p className="text-muted-foreground">4 Pl. de l'Église, 74210 Faverges-Seythenex, Prancis</p>
          </div>
        </div>
            <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg border border-border">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps?q=123+Rue+de+la+Laverie+Paris+75001&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            </div>
        
      </div>
    </section>
  )
}
