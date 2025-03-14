import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowDown, Database, Layout, Mail, MapPin, Phone, Server } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import TechBadge from "@/components/tech-badge"
import ProjectCard from "@/components/project-card"
import ExperienceItem from "@/components/experience-item"
import ContactForm from "@/components/contact-form"
import { loadAllProjects } from "@/lib/load-projects"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-4 text-primary">Olá, eu sou</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Wallany Costa
                <span className="block mt-2 gradient-text">Desenvolvedor Full Stack</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transformando ideias em experiências digitais excepcionais com código limpo e design intuitivo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/#projetos">Ver Projetos</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/#contato">Fale Comigo</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto animate-float">
                <Image
                  src="/profile-pic.png?height=500&width=500"
                  alt="Wallany Costa"
                  width={500}
                  height={500}
                  className="rounded-full object-cover border-4 border-primary/20"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/#sobre">
                <ArrowDown className="h-6 w-6" />
                <span className="sr-only">Rolar para baixo</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20">
        <div className="container">
          <SectionHeading title="Sobre Mim" subtitle="Conheça um pouco da minha história e trajetória profissional" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <Image
                  src="/profile-1.jpg?height=500&width=500"
                  alt="João Wannas trabalhando"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover"
                />
                <div className="absolute bottom-14 -right-6 bg-background p-4 rounded-lg shadow-lg border">
                  <p className="text-lg font-bold gradient-text">3+ Anos</p>
                  <p className="text-sm text-muted-foreground">de experiência</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Desenvolvedor apaixonado por criar soluções inovadoras</h3>
              <p className="text-muted-foreground mb-6">
                Sou um desenvolvedor full stack com mais de 3 anos de experiência, especializado em criar aplicações web
                e mobile de alta qualidade. Minha jornada começou com uma paixão por resolver problemas através da
                tecnologia, e desde então tenho me dedicado a aprimorar minhas habilidades e acompanhar as últimas
                tendências do mercado.
              </p>
              <p className="text-muted-foreground mb-6">
                Trabalho com diversas tecnologias modernas como React, Next.js, Node.js, e tenho experiência em
                desenvolvimento de APIs, bancos de dados e arquitetura de software. Meu objetivo é sempre entregar
                produtos que não apenas funcionem bem, mas que também proporcionem uma excelente experiência ao usuário.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">Educação</h4>
                  <p className="text-muted-foreground">Licenciatura no Curso de Engenheria Informática</p>
                  <p className="text-sm text-muted-foreground">Médio técnico no curso de informática, 2019</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Localização</h4>
                  <p className="text-muted-foreground">Luanda, Angola</p>
                  <p className="text-sm text-muted-foreground">Disponível para trabalho remoto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 bg-muted/30">
        <div className="container">
          <SectionHeading
            title="Minhas Habilidades"
            subtitle="Tecnologias e ferramentas que utilizo no meu dia a dia"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <Layout className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Frontend</h3>
                  <p className="text-muted-foreground mb-4">
                    Desenvolvimento de interfaces modernas, responsivas e com ótima experiência do usuário.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["React", "Next.js", "WordPress", "TypeScript", "javascript", "Tailwind CSS", "HTML/CSS", "React-Query", "Laravel-blade"].map((tech) => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <Server className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Backend</h3>
                  <p className="text-muted-foreground mb-4">
                    Criação de APIs robustas, escaláveis e seguras para suportar aplicações complexas.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["Node.js", "Express", "NestJS", "PHP", "Laravel", "Fastify"].map((tech) => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <Database className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Banco de Dados</h3>
                  <p className="text-muted-foreground mb-4">
                    Modelagem e otimização de bancos de dados para garantir performance e segurança.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["PostgreSQL", "MongoDB", "MySQL", "Redis", "supabase", "Firebase", "Prisma"].map((tech) => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6 text-center">Outras Tecnologias</h3>
            <div className="tech-grid max-w-3xl mx-auto">
              {[
                "Docker",
                "Git",
                "CI/CD",
                "Jest",
                "React Native",
                "Figma",
                "Vercel",
                "Netlify",
                "Swigger",
                "vite",
                "maestro",
                "clean-archicteture",
                "clean code",
                "vitest",
                "MVC",
                "MVVM",
                "RESTful APIs",
              ].map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20">
        <div className="container">
          <SectionHeading title="Meus Projetos" subtitle="Uma seleção dos meus trabalhos mais recentes e relevantes" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loadAllProjects().map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                demoUrl={project.demoUrl}
                repoUrl={project.repoUrl}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="https://github.com/WalanyCosta" target="_blank" rel="noopener noreferrer">
                Ver Mais Projetos no GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-20 bg-muted/30">
        <div className="container">
          <SectionHeading
            title="Experiência Profissional"
            subtitle="Minha trajetória e experiências no mercado de trabalho"
          />

          <div className="max-w-3xl mx-auto">

            <ExperienceItem
              title="Desenvolvedor Full Stack"
              company="Tudilonga Lda"
              period="Mar 2023 - Dez 2024"
              description="Ajudei desenvolver um sass de ensino de alta demanda. Implementei sistemas de autenticação, autorização, integração com serviços de terceiros e construir interfaces. Trabalhei com React, Nextjs, React-Query, Node.js, Express, Redis e PostgreSQL."
            />

            <ExperienceItem
              title="Desenvolvedor web "
              company="Anfibio Records"
              period="Dez 2021 - Mar 2022"
              description="Desenvolvi APIs RESTful e serviços de backend para aplicações de alta demanda. Implementei sistemas de autenticação, autorização e integração com serviços de terceiros. Trabalhei com Node.js, Express, MongoDB e PostgreSQL."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20">
        <div className="container">
          <SectionHeading
            title="Vamos Conversar"
            subtitle="Entre em contato para discutirmos seu projeto ou oportunidades de trabalho"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Entre em Contato</h3>
              <p className="text-muted-foreground mb-8">
                Estou sempre aberto a novas oportunidades, parcerias e projetos interessantes. Se você tem uma ideia ou
                projeto em mente, ou apenas quer bater um papo sobre tecnologia, não hesite em entrar em contato!
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="mr-4 h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">E-mail</h4>
                    <p className="text-muted-foreground">walanybnegro@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="mr-4 h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Telefone</h4>
                    <p className="text-muted-foreground">(+244) 932624221</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="mr-4 h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Localização</h4>
                    <p className="text-muted-foreground">Luanda, Angola</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold mb-6">Envie uma Mensagem</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

