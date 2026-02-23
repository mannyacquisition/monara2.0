import { Header } from "@/components/landing/Header"
import { Hero } from "@/components/landing/Hero"
import { Architects } from "@/components/landing/Architects"
import { InteractiveDemo } from "@/components/landing/InteractiveDemo"
import { Workflow } from "@/components/landing/Workflow"
import { FeaturesMatrix } from "@/components/landing/FeaturesMatrix"
import { FinalCTA } from "@/components/landing/FinalCTA"
import { Footer } from "@/components/landing/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Architects />
        <InteractiveDemo />
        <Workflow />
        <FeaturesMatrix />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
