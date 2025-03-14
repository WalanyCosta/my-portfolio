"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Sobre", href: "/#sobre" },
  { name: "Habilidades", href: "/#habilidades" },
  { name: "Projetos", href: "/#projetos" },
  { name: "Experiência", href: "/#experiencia" },
  { name: "Contato", href: "/#contato" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold">
              wannas<span className="text-secondary-green">.dev</span>
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
              {item.name}
            </Link>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button asChild>
            <Link href="/#contato">Vamos Conversar</Link>
          </Button>
        </nav>

        <div className="flex items-center md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="mr-2"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Abrir menu</span>
          </Button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-0 z-50 bg-background md:hidden transition-transform duration-300",
            isOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                <span className="text-2xl font-bold">
                  wannas<span className="text-secondary-green">.dev</span>
                </span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Fechar menu</span>
              </Button>
            </div>

            <nav className="flex flex-col gap-6 mt-12">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="mt-4">
                <Link href="/#contato" onClick={() => setIsOpen(false)}>
                  Vamos Conversar
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

