import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import VideoSection from "@/components/VideoSection";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Services />
      <Projects />
      <VideoSection />
      <Contact />
    </main>
  );
};

export default Index;
