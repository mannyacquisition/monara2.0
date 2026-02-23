"use client"

import { useState } from "react"
import {
  Database,
  Layers,
  Inbox,
  Zap,
  ShieldCheck,
} from "lucide-react"
import { cn } from "@/lib/utils"

const tabs = [
  {
    id: "database",
    label: "B2B Lead Database",
    icon: Database,
    description:
      "Access 700M+ verified B2B contacts across every industry, geography, and company size. Chase finds your ideal customers so you never run out of prospects.",
  },
  {
    id: "enrichment",
    label: "Deep Enrichment",
    icon: Layers,
    description:
      "Atlas layers on firmographic, technographic, and intent data—pulling from dozens of data sources to give you a 360° view of every lead before you make contact.",
  },
  {
    id: "inbox",
    label: "Omnichannel Inbox",
    icon: Inbox,
    description:
      "Piper manages a single unified inbox across email, LinkedIn, and SMS. Every reply is categorized, objections are handled, and meetings get booked automatically.",
  },
  {
    id: "intent",
    label: "Intent & Trigger Outbound",
    icon: Zap,
    description:
      "Nova monitors buying signals—new funding rounds, job postings, tech changes—and triggers perfectly timed sequences when prospects are most likely to convert.",
  },
  {
    id: "deliverability",
    label: "Deliverability & Warmup",
    icon: ShieldCheck,
    description:
      "Quinn monitors domain health, warms up new inboxes, and filters risky contacts to protect your sender reputation and ensure maximum inbox placement.",
  },
]

export function FeaturesMatrix() {
  const [activeTab, setActiveTab] = useState("database")
  const activeTabData = tabs.find((t) => t.id === activeTab)!

  return (
    <section className="relative py-20 md:py-28 lg:py-32 bg-monara-gray-25 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-dm-sans leading-[2.75rem] tracking-[-0.045rem] md:tracking-[-0.06rem] md:leading-[3.75rem] text-monara-gray-900">
            Innovation at Every Stage of the{" "}
            <span className="gradient-text-primary">Outbound Cycle.</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap justify-center gap-2 p-2 bg-white rounded-[2.5rem] shadow-sm border border-monara-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium font-inter transition-all duration-300 whitespace-nowrap",
                  activeTab === tab.id
                    ? "gradient-btn text-white tab-ring"
                    : "text-monara-gray-500 hover:text-monara-gray-700 hover:bg-monara-gray-50"
                )}
              >
                <tab.icon className="size-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content area — using Artisan's exact rounded + shadow math */}
        <div className="bg-white rounded-[1.75rem] feature-shadow border border-monara-gray-200 min-h-[400px] overflow-hidden">
          <div className="p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-10 items-center">
            {/* Text */}
            <div className="flex-1 flex flex-col gap-5">
              <div className="size-14 rounded-[1.25rem] bg-monara-purple-50 flex items-center justify-center">
                <activeTabData.icon className="size-7 text-monara-purple-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-dm-sans text-monara-gray-900">
                {activeTabData.label}
              </h3>
              <p className="text-base font-inter text-monara-gray-500 leading-7 max-w-lg">
                {activeTabData.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-monara-purple-600 font-medium font-inter text-sm hover:text-monara-purple-800 transition-colors"
              >
                Explore {activeTabData.label}
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            {/* Placeholder image */}
            <div className="flex-1 w-full">
              <div className="w-full aspect-[4/3] rounded-[1.25rem] bg-monara-gray-50 border border-dashed border-monara-gray-200 flex items-center justify-center">
                <div className="flex flex-col items-center gap-3 text-monara-gray-400">
                  <activeTabData.icon className="size-12 opacity-30" />
                  <p className="text-sm font-inter">
                    {activeTabData.label} UI Preview
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
