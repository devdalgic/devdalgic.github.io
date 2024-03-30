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
        <a href={"/engineering"}
        className={"py-4 mt-2 bg-[#111111] hover:bg-[#212121]"}>
            <h2 className={"text-center"}>I create content about engineering and technology. Click here to learn more.</h2>
        </a>
        <Hero />
        <Experience />
        <Education />
        <Certificates />
        <Skills />
        <Footer />
    </main>
  )
}
