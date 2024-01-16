import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
        <Navbar />
        <Hero />
        <Experience />
        <Education />
        <Certificates />
        <Skills />
        <Footer />
    </main>
  )
}
