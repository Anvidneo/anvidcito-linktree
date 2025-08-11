import type { LucideIcon } from "lucide-react"

type Props = {
  href: string
  label: string
  icon: LucideIcon
}

export function LinkButton({ href, label, icon: Icon }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative block w-full overflow-hidden rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-center font-medium text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] active:scale-[0.98]"
    >
      {/* Enhanced glass morphism effect */}
      <span className="pointer-events-none absolute inset-0">
        {/* Top highlight for glass effect */}
        <span className="absolute inset-x-1 top-0 h-1/3 rounded-t-2xl bg-gradient-to-b from-white/30 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

        {/* Bottom subtle glow */}
        <span className="absolute inset-x-1 bottom-0 h-1/4 rounded-b-2xl bg-gradient-to-t from-white/10 to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-60" />

        {/* Hover glow effect */}
        <span className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-purple-400/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
      </span>

      <span className="relative z-10 flex items-center justify-center gap-3">
        <Icon size={20} className="text-white/90" />
        <span className="text-white/95">{label}</span>
      </span>
    </a>
  )
}
