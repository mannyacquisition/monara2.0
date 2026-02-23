"use client"

import { ArrowRight, Globe } from "lucide-react"

export function InteractiveDemo() {
  return (
    <section
      id="demo"
      className="relative py-20 md:py-28 lg:py-32 bg-white overflow-hidden"
    >
      {/* Subtle background radial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_400px_at_50%_30%,rgba(243,236,255,0.5),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-monara-purple-50 text-monara-purple-700 text-sm font-semibold font-inter mb-5 badge-shadow">
            <Globe className="size-4" />
            Live Preview
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-dm-sans leading-[2.75rem] tracking-[-0.045rem] md:tracking-[-0.06rem] md:leading-[3.75rem] text-monara-gray-900">
            See Monara&apos;s Team{" "}
            <span className="gradient-text-primary">in Action.</span>
          </h2>
        </div>

        {/* Browser Window */}
        <div className="rounded-[1.75rem] overflow-hidden feature-shadow bg-white border border-monara-gray-200">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-5 py-3.5 bg-monara-gray-50 border-b border-monara-gray-200">
            <div className="flex gap-1.5">
              <div className="size-3 rounded-full bg-red-400" />
              <div className="size-3 rounded-full bg-yellow-400" />
              <div className="size-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-white rounded-lg px-4 py-1.5 text-sm text-monara-gray-400 font-inter border border-monara-gray-200 max-w-md mx-auto text-center">
                app.monara.ai/campaigns
              </div>
            </div>
          </div>

          {/* Browser content */}
          <div className="p-8 md:p-12 lg:p-16 bg-gradient-to-b from-monara-gray-25 to-white">
            <div className="max-w-lg mx-auto flex flex-col items-center gap-6 text-center">
              <div className="size-16 rounded-[1.25rem] gradient-btn flex items-center justify-center">
                <Globe className="size-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-dm-sans text-monara-gray-900 mb-2">
                  Generate a Campaign
                </h3>
                <p className="text-sm font-inter text-monara-gray-500">
                  Enter your website URL and Monara will analyze your product,
                  identify the ideal audience, and build a full outbound campaign
                  in under 60 seconds.
                </p>
              </div>

              {/* URL Input */}
              <div className="w-full flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <input
                    type="url"
                    placeholder="Enter your website URL"
                    className="w-full h-12 rounded-[1.25rem] px-5 text-sm font-inter bg-white border border-monara-gray-200 text-monara-gray-900 placeholder:text-monara-gray-400 focus:outline-none focus:ring-2 focus:ring-monara-purple-600/30 transition shadow-sm"
                  />
                </div>
                <button className="h-12 px-6 rounded-[1.25rem] gradient-btn-vivid text-white font-dm-sans font-medium text-sm flex items-center justify-center gap-2 cta-shadow transition-all duration-300 hover:shadow-[0px_0px_20px_0px_rgba(125,55,255,0.5),0px_2px_4px_0px_rgba(0,0,0,0.25)] whitespace-nowrap">
                  Generate Campaign
                  <ArrowRight className="size-4" />
                </button>
              </div>

              {/* Placeholder result area */}
              <div className="w-full mt-4 rounded-[1.25rem] bg-monara-gray-50 border border-dashed border-monara-gray-200 min-h-[120px] flex items-center justify-center">
                <p className="text-sm font-inter text-monara-gray-400">
                  Campaign preview will appear here...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
