import { ArrowRight } from "lucide-react"

export function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative dark-section-bg py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-monara-purple-600/[0.1] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-monara-peach/[0.06] blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 md:px-10 text-center flex flex-col items-center gap-8">
        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold font-dm-sans leading-[2.75rem] md:leading-[3.75rem] lg:leading-[4rem] tracking-[-0.045rem] text-white">
          Ready to Hire Monara and{" "}
          <span className="gradient-text-secondary">
            Scale Your Revenue?
          </span>
        </h2>

        <p className="text-lg font-medium leading-7 font-inter text-white/70 max-w-2xl">
          Equip your business with the ultimate AI co-founder today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <a
            href="#"
            className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-full gradient-btn-cta text-white font-dm-sans text-base font-medium leading-6 cta-shadow transition-all duration-300 hover:shadow-[0px_0px_20px_0px_rgba(255,94,58,0.5),0px_2px_4px_0px_rgba(0,0,0,0.25)]"
          >
            Start 14-Day Trial
            <ArrowRight className="size-4 text-white transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#"
            className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/20 text-white font-dm-sans text-base font-medium leading-6 hover:bg-white/5 hover:border-white/30 transition-all duration-300"
          >
            Talk to Sales
            <div className="relative flex items-center justify-center size-7 rounded-full bg-white/10 overflow-hidden">
              <ArrowRight className="size-3.5 text-white" />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
