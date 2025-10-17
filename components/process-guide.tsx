"use client"

import Image from "next/image"
import { useState } from "react"

const steps = [
  {
    number: 1,
    title: "je CHARGE mon linge",
    description: "bien vider les poches !",
    icon: "/icons/step1.png",
  },
  {
    number: 2,
    title: "et je FERME le hublot",
    description: "la machine l'injectera en quantité idéale",
    icon: "/icons/step2.png",
  },
  {
    number: 3,
    title: "je choisis ma TEMPÉRATURE",
    description: "Blanc: 60°C\nCouleur: 40-30°C",
    icon: "/icons/step3.png",
  },
  {
    number: 4,
    title: "je confirme ma machine à la centrale et je PAYE",
    description: "à la fin du cycle",
    icon: "/icons/step4.png",
  },
  {
    number: 5,
    title: "je presse le bouton START",
    description: "de ma machine",
    icon: "/icons/step5.png",
  },
]

export default function ProcessGuide() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  return (
    <section
      id="process-guide"
      className="py-20 px-4 transition-colors duration-500 bg-gradient-to-b from-white to-gray-50 dark:from-[#0a0a0a] dark:to-[#1a1a1a]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-red-600 mb-2">LAVAGE</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg italic">
            Lessive incluse, inutile d&apos;en ajouter
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 opacity-80" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative"
                onMouseEnter={() => setActiveStep(step.number)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Step Circle */}
                <div
                  className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                    activeStep === step.number ? "scale-110" : ""
                  }`}
                >
                  <div className="relative mb-6">
                    <div
                      className={`w-32 h-32 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 border ${
                        activeStep === step.number
                          ? "bg-red-600 border-red-700 shadow-2xl"
                          : "bg-gray-200 dark:bg-[#121212] border-gray-300 dark:border-gray-700 shadow-lg"
                      }`}
                    >
                      <Image
                        src={step.icon}
                        alt={step.title}
                        width={80}
                        height={80}
                        className="object-contain drop-shadow-md"
                      />
                    </div>

                    {/* Step Number */}
                    <div
                      className={`absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white transition-all duration-300 ${
                        activeStep === step.number ? "bg-red-700" : "bg-red-600"
                      }`}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="text-center">
                    <h3
                      className={`font-bold text-lg mb-2 transition-colors duration-300 ${
                        activeStep === step.number
                          ? "text-red-600"
                          : "text-gray-800 dark:text-gray-100"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-sm whitespace-pre-line transition-colors duration-300 ${
                        activeStep === step.number
                          ? "text-gray-700 dark:text-gray-300"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow (Mobile) */}
                {step.number < steps.length && (
                  <div className="lg:hidden flex justify-center mt-4 text-red-600 text-2xl">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-base max-w-2xl mx-auto">
            Lessive incluse dans le prix. Pas besoin d&apos;ajouter de détergent. La machine injectera la quantité
            idéale automatiquement.
          </p>
        </div>
      </div>
    </section>
  )
}
