import {
  Brain,
  Search,
  Map,
  ShieldCheck,
  BookOpen,
  Send,
  Inbox,
  ArrowRight,
} from "lucide-react"

const spotlightAgent = {
  name: "Monara",
  role: "The Co-Founder",
  description:
    "The brain of the operation. Simply tell Monara your revenue goals in plain English, and she orchestrates her team of specialized Architects to execute the entire campaign from scratch.",
  icon: Brain,
  link: "Learn more about Monara",
}

const gridAgents = [
  {
    name: "Chase",
    role: "Prospecting Agent",
    description:
      "Scours a 700M+ B2B database to find hyper-targeted, verified leads that match your exact ideal customer profile.",
    icon: Search,
  },
  {
    name: "Atlas",
    role: "Enrichment Agent",
    description:
      "Maps out the data landscape, pulling firmographics, recent funding, and tech stack data so no lead is left cold.",
    icon: Map,
  },
  {
    name: "Quinn",
    role: "Qualifying Agent",
    description:
      "Scores and filters leads based on strict criteria, protecting your domain reputation and ensuring you only pitch the perfect fit.",
    icon: ShieldCheck,
  },
  {
    name: "Sage",
    role: "Researching Agent",
    description:
      "Scrapes websites, LinkedIn profiles, and recent news to gather deep, intelligent insights for true 1-to-1 personalization.",
    icon: BookOpen,
  },
  {
    name: "Nova",
    role: "Outbound Agent",
    description:
      "Crafts highly tailored, multi-channel sequences and launches them at the exact right time for maximum open rates.",
    icon: Send,
  },
  {
    name: "Piper",
    role: "Inbound Agent",
    description:
      "Monitors your unified inbox, categorizes replies, handles objections, and drops meeting links directly into warm conversations.",
    icon: Inbox,
  },
]

export function Architects() {
  return (
    <section
      id="architects"
      className="relative dark-section-bg py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-monara-purple-600/[0.08] blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-10">
        {/* Header */}
        <div className="flex flex-col justify-center gap-3 text-center mb-14">
          <span className="mx-auto px-4 py-1.5 rounded-full bg-white/10 text-monara-purple-200 text-sm font-medium font-inter w-fit">
            Your Autonomous Revenue Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-dm-sans leading-[2.75rem] tracking-[-0.045rem] md:tracking-[-0.06rem] md:leading-[3.75rem] text-white">
            Meet Your Future Outbound Team:{" "}
            <span className="gradient-text-secondary">The Architects.</span>
          </h2>
          <p className="text-lg font-medium leading-7 font-inter text-white/70 max-w-2xl mx-auto">
            You don&apos;t just get software; you get a fully autonomous revenue
            team.
          </p>
        </div>

        {/* Spotlight Card — Monara */}
        <div className="glass-card rounded-[1.75rem] p-8 md:p-12 mb-8 group hover:border-monara-purple-600/30 transition-all duration-500">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="size-16 md:size-20 rounded-[1.25rem] gradient-btn flex items-center justify-center">
                <spotlightAgent.icon className="size-8 md:size-10 text-white" />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold font-dm-sans text-white">
                  {spotlightAgent.name}{" "}
                  <span className="text-monara-purple-400 font-medium text-xl">
                    ({spotlightAgent.role})
                  </span>
                </h3>
              </div>
              <p className="text-base md:text-lg font-inter text-white/70 leading-7 max-w-2xl">
                {spotlightAgent.description}
              </p>
              <a
                href="#"
                className="flex items-center gap-2 text-monara-purple-400 font-medium font-inter text-sm hover:text-monara-purple-200 transition-colors group/link"
              >
                {spotlightAgent.link}
                <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gridAgents.map((agent) => (
            <div
              key={agent.name}
              className="glass-card rounded-[1.75rem] p-6 md:p-7 flex flex-col gap-4 group hover:border-monara-purple-600/30 transition-all duration-500"
            >
              <div className="flex items-center gap-3">
                <div className="size-11 rounded-[0.75rem] bg-white/10 flex items-center justify-center group-hover:bg-monara-purple-600/20 transition-colors duration-300">
                  <agent.icon className="size-5 text-monara-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-dm-sans text-white">
                    {agent.name}
                  </h4>
                  <p className="text-xs font-medium font-inter text-monara-purple-400">
                    {agent.role}
                  </p>
                </div>
              </div>
              <p className="text-sm font-inter text-white/60 leading-6">
                {agent.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
