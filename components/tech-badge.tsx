import { cn } from "@/lib/utils"

interface TechBadgeProps {
  name: string
  className?: string
}

export default function TechBadge({ name, className }: TechBadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center px-3 py-1 rounded-full text-sm font-medium bg-muted hover:bg-primary/10 transition-colors",
        className,
      )}
    >
      {name}
    </div>
  )
}

