export function loadAllProjects() {
    return [
        {
            title: "HelpDesk",
            description: "Um App intuitivo para que profissionais não técnicos reportem problemas em dispositivos, facilitando o trabalho dos técnicos de manutenção.",
            image: "/Banner-help-desk.png?height=300&width=500",
            technologies: ["React-native", "Arquictetura limpa", "Firebase", "expo"],
            repoUrl: "https://github.com",
        },
        {
            title: "Clinica de dentologia API",
            description: "API REST para gerenciamento de uma clínica dentária com agendamentos e prontuários.",
            image: "/clinica-dentologica.png?height=300&width=500",
            technologies: ["Prisma", "Nodejs", "Express", "PostgreSQL", "zod", "pdf-node"],
            repoUrl: "https://github.com/marta-devs/clinica-dentaria/tree/main",
        },
        {
            title: "PEPAPP",
            description: "Aplicativo para solicitação e gestão de materiais, uniformes e EPIs, com controle de aprovação pelo gestor.",
            image: "/PEAPP.png?height=300&width=500",
            technologies: ["React Native", "Superbase", "expo", "expo-router", "tailwindcss", "nativewind", "zod", "react-hook-form"],
            repoUrl: "https://github.com/WalanyCosta/pepapp",
        },
    ]
}