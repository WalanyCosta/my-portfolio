"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulando envio do formulário
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Responderei o mais breve possível.",
      })

      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Nome
          </label>
          <Input id="name" name="name" placeholder="Seu nome" required />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            E-mail
          </label>
          <Input id="email" name="email" type="email" placeholder="seu@email.com" required />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Assunto
        </label>
        <Input id="subject" name="subject" placeholder="Assunto da mensagem" required />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Mensagem
        </label>
        <Textarea id="message" name="message" placeholder="Sua mensagem..." rows={5} required />
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
      </Button>
    </form>
  )
}

