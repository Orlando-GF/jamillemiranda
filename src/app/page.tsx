import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FloatingCards from "@/components/FloatingCards";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-[100dvh] bg-background relative selection:bg-gold/30 selection:text-dark overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
