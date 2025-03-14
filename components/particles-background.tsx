"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  element: HTMLDivElement
}

export default function ParticlesBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const containerWidth = container.offsetWidth
    const containerHeight = container.offsetHeight

    // Clear any existing particles
    container.innerHTML = ""
    particlesRef.current = []

    // Create particles
    const particleCount = Math.min(15, Math.floor((containerWidth * containerHeight) / 20000))

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 10 + 5
      const x = Math.random() * containerWidth
      const y = Math.random() * containerHeight
      const speedX = Math.random() * 0.5 - 0.25
      const speedY = Math.random() * 0.5 - 0.25

      const particleElement = document.createElement("div")
      particleElement.className = "particle"
      particleElement.style.width = `${size}px`
      particleElement.style.height = `${size}px`
      particleElement.style.left = `${x}px`
      particleElement.style.top = `${y}px`
      particleElement.style.opacity = (Math.random() * 0.5 + 0.3).toString()
      particleElement.style.animationDelay = `${Math.random() * 5}s`

      container.appendChild(particleElement)

      particlesRef.current.push({
        x,
        y,
        size,
        speedX,
        speedY,
        element: particleElement,
      })
    }

    return () => {
      container.innerHTML = ""
      particlesRef.current = []
    }
  }, [])

  return <div ref={containerRef} className="animate-particles" aria-hidden="true" />
}

