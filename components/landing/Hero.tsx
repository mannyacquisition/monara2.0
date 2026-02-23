"use client"

import { ArrowRight, Plus } from "lucide-react"

const promptPills = [
  "Find 200 SaaS founders in Austin and build a sequence to book demos.",
  "Scrape LinkedIn for marketing managers and pitch my $49/mo free trial.",
  "Target e-commerce brands that just raised funding and handle replies.",
  "Find local real estate agents in Florida and invite them to my waitlist.",
]

export function Hero() {
  return (
    <section className="relative flex flex-col w-full items-center gap-8 px-6 pb-40 text-center pt-[7.5rem] md:px-10 md:pb-52 lg:pb-[18rem] hero-bg overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[400px] rounded-full bg-monara-purple-600/[0.06] blur-[100px] pointer-events-none" />
      <div className="absolute top-40 right-1/4 w-[400px] h-[350px] rounded-full bg-monara-peach/[0.08] blur-[80px] pointer-events-none" />
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-monara-magenta/[0.04] blur-[100px] pointer-events-none" />

      {/* Headline */}
      <div className="text-4xl md:text-[3.25rem] z-10 font-bold leading-[2.75rem] tracking-[-0.045rem] md:tracking-normal md:leading-[3.5rem] w-full max-w-4xl">
        <h1 className="font-dm-sans">
          <span className="text-monara-gray-900">
            Automate Your Growth With{" "}
          </span>
          <span className="gradient-text-primary">AI Employees</span>
        </h1>
      </div>

      {/* Subheadline */}
      <p className="w-full max-w-3xl text-lg font-medium leading-7 font-inter text-monara-gray-700 z-10 px-2 md:px-8">
        Meet Monara, the AI co-founder built to drive consistent revenue growth
        on autopilot. From finding verified leads to booking sales calls or
        flooding your dashboard with direct sign-ups.
      </p>

      {/* Command Prompt UI */}
      <div className="z-20 w-full max-w-2xl">
        <div className="w-full bg-white border border-monara-gray-200 rounded-2xl p-3 md:p-6 prompt-shadow transition-shadow duration-300 hover:shadow-[0px_0px_40px_0px_rgba(106,27,224,0.2),0px_2px_10px_2px_rgba(0,0,0,0.1),0px_0px_0px_1px_rgba(196,165,255,0.3)]">
          <textarea
            placeholder="Ask Monara to build your next campaign..."
            className="w-full min-h-[60px] md:min-h-[70px] bg-transparent border-none outline-none resize-none text-monara-gray-900 placeholder:text-monara-gray-400 font-inter text-sm md:text-lg focus:outline-none focus:ring-0 mb-3 md:mb-4"
          />
          <div className="flex items-center justify-between gap-1.5 md:gap-2">
            <div className="flex items-center gap-1.5 md:gap-2">
              <button
                type="button"
                aria-label="Add attachment"
                className="h-10 w-10 md:h-12 md:w-12 rounded-full border border-monara-gray-200 hover:bg-monara-gray-100 hover:border-monara-gray-300 flex items-center justify-center transition-colors"
              >
                <Plus className="h-4 w-4 md:h-5 md:w-5 text-monara-gray-600" />
              </button>
            </div>
            <button
              type="button"
              aria-label="Submit"
              className="h-10 w-10 md:h-12 md:w-12 rounded-full gradient-btn flex items-center justify-center hover:opacity-90 transition-opacity ml-auto flex-shrink-0"
            >
              <ArrowRight className="h-4 w-4 md:h-6 md:w-6 text-white" />
            </button>
          </div>
        </div>

        {/* Prompt Pills */}
        <div className="flex overflow-x-auto gap-2 mt-4 pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible">
          {promptPills.map((pill, i) => (
            <button
              key={i}
              className="px-4 py-2 text-sm rounded-full border border-monara-purple-200/60 bg-white/50 hover:bg-monara-purple-50 hover:border-monara-purple-400 text-monara-gray-700 hover:text-monara-purple-700 transition-colors flex-shrink-0 whitespace-nowrap font-inter"
            >
              {pill}
            </button>
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="z-10 flex flex-col sm:flex-row gap-3 mt-2">
        <a
          href="#cta"
          className="group flex items-center justify-center gap-2 px-7 py-3 rounded-full text-white gradient-btn-cta font-dm-sans text-base font-medium leading-6 cta-shadow transition-all duration-300 hover:shadow-[0px_0px_20px_0px_rgba(125,55,255,0.5),0px_2px_4px_0px_rgba(0,0,0,0.25)]"
        >
          Start 14-Day Trial
          <ArrowRight className="size-4 text-white transition-transform group-hover:translate-x-0.5" />
        </a>
        <a
          href="#demo"
          className="flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-monara-gray-300 text-monara-gray-700 font-dm-sans text-base font-medium leading-6 hover:border-monara-gray-400 hover:bg-monara-gray-50 transition-all duration-300"
        >
          Book a Demo
        </a>
      </div>
    </section>
  )
}
