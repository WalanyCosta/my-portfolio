import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import TechBadge from "@/components/tech-badge"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  demoUrl?: string
  repoUrl?: string
}

export default function ProjectCard({ title, description, image, technologies, demoUrl, repoUrl }: ProjectCardProps) {
  return (
    <Card className="project-card overflow-hidden h-full flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        {demoUrl && (
          <Button asChild variant="default" size="sm">
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </Link>
          </Button>
        )}
        {repoUrl && (
          <Button asChild variant="outline" size="sm">
            <Link href={repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Github className="mr-2 h-4 w-4" />
              Código
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

