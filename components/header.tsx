"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Sun, Moon } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
      setIsDark(true)
    }
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
    setIsDark(!isDark)
  }

  // 🪄 Fungsi untuk scroll halus dengan offset
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.querySelector(targetId)
    if (element) {
      const yOffset = -80 // tinggi header agar tidak tertutup
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
    setIsOpen(false) // tutup menu mobile setelah klik
  }

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <Image
              src="/logopp.png" // pastikan file ada di public/logopp.png
              alt="Logo Le Poisson Rouge"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <span className="font-bold text-xl text-primary hidden sm:inline">
            Laverie Le Poisson Rouge
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" onClick={(e) => handleSmoothScroll(e, "#services")} className="text-foreground hover:text-primary transition">Services</a>
          <a href="#process-guide" onClick={(e) => handleSmoothScroll(e, "#process-guide")} className="text-foreground hover:text-primary transition">Lavage</a>
          <a href="#about" onClick={(e) => handleSmoothScroll(e, "#about")} className="text-foreground hover:text-primary transition">À Propos</a>
          <a href="#opening-hour" onClick={(e) => handleSmoothScroll(e, "#opening-hour")} className="text-foreground hover:text-primary transition">Opening Hours</a>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")} className="text-foreground hover:text-primary transition">Contact</a>

          {/* Toggle Tema */}
          <Button
            onClick={toggleTheme}
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 transition"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
            {isDark ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-4">
                        <a href="#services" onClick={(e) => handleSmoothScroll(e, "#services")} className="text-foreground hover:text-primary transition">Services</a>
          <a href="#process-guide" onClick={(e) => handleSmoothScroll(e, "#process-guide")} className="text-foreground hover:text-primary transition">Lavage</a>
          <a href="#about" onClick={(e) => handleSmoothScroll(e, "#about")} className="text-foreground hover:text-primary transition">À Propos</a>
          <a href="#opening-hour" onClick={(e) => handleSmoothScroll(e, "#opening-hour")} className="text-foreground hover:text-primary transition">Opening Hours</a>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")} className="text-foreground hover:text-primary transition">Contact</a>

          <Button
            onClick={toggleTheme}
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 transition"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
            {isDark ? "Light Mode" : "Dark Mode"}
          </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
