"use client"

import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Gigil",
      role: "Traveler",
      content:
        "Laverie propre, lessive intégrée qui sent bon. Au top et prix modéré. Bravo.",
      rating: 5,
    },
    {
      name: "Luc Bardeau",
      role: "Touriste",
      content:
        "Bonne laverie. Propre, efficace, simple",
      rating: 5,
    },
    {
      name: "Calina Cer",
      role: "Backpacker",
      content:
        "Clean. Easy to use. Usually not busy. Big parking space by the park, 5 minutes walking distance, away from the washing.",
      rating: 5,
    },
    {
      name: "Gilles Soeur",
      role: "Student",
      content:
        "Bonjour j'habite juste au dessus bonne laverie bien propre bonne journée.",
      rating: 5,
    },
  ]

  return (
    <section
      id="testimonials"
      className="py-16 px-4 transition-colors duration-300 bg-gradient-to-b from-red-50 to-white dark:from-[#0a0a0a] dark:to-[#1a1a1a]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
          What Our Customers Say
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Kepuasan pelanggan adalah prioritas utama kami
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border transition-all duration-300 bg-white/90 border-gray-200 hover:shadow-lg dark:bg-[#141414] dark:border-gray-700 dark:hover:border-primary/50"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-[#FF4500] text-[#FF4500] drop-shadow-sm"
                  />
                ))}
              </div>

              <p className="text-foreground mb-4 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="border-t pt-4 dark:border-gray-700">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
