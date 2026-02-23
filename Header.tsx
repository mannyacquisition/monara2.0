"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ArrowRight } from "lucide-react"

const navLinks = [
  { label: "The Architects", href: "#architects" },
  { label: "Pricing", href: "#pricing" },
  { label: "Login", href: "#login" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full flex justify-center px-4 pt-4">
      {/* Pill nav bar — matches Artisan's bg-white/70 rounded-full with shadow */}
      <div className="flex items-center w-full max-w-5xl p-2 pr-4 rounded-full gap-7 bg-white/70 backdrop-blur-xl shadow-[0px_0px_10px_0px_rgba(0,0,0,0.08)]">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 p-[0.5625rem] pr-0"
        >
          <div className="flex items-center gap-1.5">
            <div className="size-8 rounded-[0.5rem] gradient-btn flex items-center justify-center">
              <span className="text-white font-bold font-dm-sans text-sm">M</span>
            </div>
            <span className="font-bold text-monara-gray-900 font-dm-sans text-lg tracking-tight">
              Monara
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm font-medium leading-5 rounded-xl transition-all duration-300 ease-in-out font-inter text-monara-gray-700 hover:bg-monara-purple-50 hover:text-monara-purple-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3 ml-auto">
          <Link
            href="#cta"
            className="group flex items-center gap-2 p-1 pr-3 border rounded-full transition border-monara-purple-200 cta-shadow text-white gradient-btn-vivid font-dm-sans text-sm font-medium leading-6"
          >
            <div className="rounded-full flex items-center justify-center p-1.5 bg-white/10">
              <ArrowRight className="size-4 text-white" />
            </div>
            Start Free Trial
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-auto p-2 rounded-xl hover:bg-monara-gray-100 transition"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="size-5 text-monara-gray-900" />
          ) : (
            <Menu className="size-5 text-monara-gray-900" />
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="absolute top-20 left-4 right-4 md:hidden bg-white rounded-[1.25rem] shadow-[0px_2px_10px_2px_rgba(0,0,0,0.15)] p-4 flex flex-col gap-2 animate-fade-in-up">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-4 py-3 text-sm font-medium rounded-xl text-monara-gray-700 hover:bg-monara-purple-50 hover:text-monara-purple-700 transition font-inter"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#cta"
            className="mt-2 text-center py-3 rounded-full text-white gradient-btn-vivid font-dm-sans text-sm font-medium"
            onClick={() => setMobileOpen(false)}
          >
            Start Free Trial
          </Link>
        </div>
      )}
    </header>
  )
}
