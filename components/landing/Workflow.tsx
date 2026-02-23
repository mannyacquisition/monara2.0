import {
  MessageSquare,
  Database,
  UserCheck,
  Rocket,
} from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Command Monara",
    description: "You set the goal. Monara builds the strategy.",
  },
  {
    number: "02",
    icon: Database,
    title: "Sourcing & Enrichment",
    description:
      "Chase and Atlas pull and verify data from our 700M+ database.",
  },
  {
    number: "03",
    icon: UserCheck,
    title: "Hyper-Personalization",
    description:
      "Sage and Quinn research the leads to ensure fit and craft the message.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Omnichannel Execution",
    description:
      "Nova launches the sequences, and Piper catches the replies to book the meeting.",
  },
]

export function Workflow() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 bg-white overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white text-monara-gray-900 text-sm font-semibold font-inter mb-5 badge-shadow">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-dm-sans leading-[2.75rem] tracking-[-0.045rem] md:tracking-[-0.06rem] md:leading-[3.75rem] text-monara-gray-900 mb-3">
            A Full-Funnel Workflow,{" "}
            <span className="gradient-text-cta">Managed Without You.</span>
          </h2>
          <p className="text-lg font-medium leading-7 font-inter text-monara-gray-500 max-w-xl mx-auto">
            Get better results without increasing headcount.
          </p>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center group">
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-r from-monara-purple-200 to-monara-peach/40" />
              )}

              {/* Icon circle */}
              <div className="relative z-10 size-20 rounded-[1.25rem] bg-monara-gray-50 border border-monara-gray-200 flex items-center justify-center mb-5 group-hover:border-monara-purple-200 group-hover:bg-monara-purple-50 transition-all duration-300">
                <step.icon className="size-8 text-monara-purple-600" />
                {/* Step number badge */}
                <div className="absolute -top-2 -right-2 size-7 rounded-full gradient-btn flex items-center justify-center text-white text-xs font-bold font-dm-sans">
                  {step.number}
                </div>
              </div>

              <h3 className="text-lg font-bold font-dm-sans text-monara-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm font-inter text-monara-gray-500 leading-6 max-w-[240px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
