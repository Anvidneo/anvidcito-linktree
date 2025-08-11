import { LiquidBackground } from "@/components/liquid-background"
import { LinkButton } from "@/components/link-button"
import { Globe, Github, Linkedin, Instagram } from "lucide-react"

export default function HomePage() {
  const links = [
    {
      label: "Portfolio",
      href: "https://portfolio-ashen-sigma-42.vercel.app/",
      icon: Globe,
    },
    {
      label: "GitHub",
      href: "https://github.com/Anvidneo",
      icon: Github,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/juan-botero-c/",
      icon: Linkedin,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/anvidcito/",
      icon: Instagram,
    },
  ]

  return (
    <main className="relative min-h-dvh w-full overflow-hidden text-white">
      <LiquidBackground />
      <section className="relative z-10 mx-auto flex min-h-dvh max-w-md flex-col items-center px-6 py-12">
        {/* Profile Card */}
        <div
          className="mt-10 w-full rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl"
          aria-label="Profile"
        >
          <div className="flex flex-col items-center gap-4">
            {/* Avatar */}
            <div className="relative">
              <img
                src="https://github.com/Anvidneo.png"
                alt="anvidcito profile"
                className="h-20 w-20 rounded-full ring-2 ring-white/20 backdrop-blur-md"
              />
              <div className="absolute inset-0 -z-10 rounded-full bg-[#0a84ff]/30 blur-2xl" aria-hidden="true" />
            </div>

            {/* Name + subtitle */}
            <div className="text-center">
              <h1 className="font-sans text-xl font-semibold tracking-tight">anvidcito</h1>
              <p className="text-sm text-white/70">
                👨‍💻 FullStack Developer | JS 🚀
                <br />
                💡 Proyectos, tips y vida dev
                <br />
                🌍 Making stories we can never tell
              </p>
            </div>

            {/* Links */}
            <div className="mt-4 w-full space-y-3">
              {links.map((l) => (
                <LinkButton key={l.href} href={l.href} label={l.label} icon={l.icon} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
