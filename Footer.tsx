import Link from "next/link"

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Resources: ["Documentation", "Community", "Support", "Status"],
  Legal: ["Privacy", "Terms", "Security"],
}

export function Footer() {
  return (
    <footer className="border-t border-monara-gray-200 bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo + tagline */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-1.5 mb-4">
              <div className="size-7 rounded-[0.375rem] gradient-btn flex items-center justify-center">
                <span className="text-white font-bold font-dm-sans text-xs">
                  M
                </span>
              </div>
              <span className="font-bold text-monara-gray-900 font-dm-sans text-base tracking-tight">
                Monara
              </span>
            </div>
            <p className="text-sm font-inter text-monara-gray-500 leading-6">
              The AI co-founder that automates your entire outbound funnel.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm font-dm-sans text-monara-gray-900 mb-4">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm font-inter text-monara-gray-500 hover:text-monara-purple-600 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-monara-gray-200 mt-12 pt-8 text-center text-sm font-inter text-monara-gray-400">
          © {new Date().getFullYear()} Monara. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
