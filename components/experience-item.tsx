import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ExperienceItemProps {
  title: string
  company: string
  period: string
  description: string
}

export default function ExperienceItem({ title, company, period, description }: ExperienceItemProps) {
  return (
    <Card className="mb-6 border-l-4 border-l-primary">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-1">
          <p className="font-medium text-primary">{company}</p>
          <p className="text-sm text-muted-foreground">{period}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

