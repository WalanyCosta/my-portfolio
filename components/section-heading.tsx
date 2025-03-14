interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
}

export default function SectionHeading({ title, subtitle, align = "center" }: SectionHeadingProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }

  return (
    <div className={`mb-12 ${alignClass[align]}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
}

