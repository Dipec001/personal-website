import Hero from "@/components/Hero";
import Career from "@/components/Career";
import Certifications from "@/components/Certifications";
import Skills from "@/components/Skills";
import FeaturedProject from "@/components/FeaturedProject";
import Writing from "@/components/Writing";
import TechVerse from "@/components/TechVerse";
import GitHubActivity from "@/components/GitHubActivity";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Career />
      <Certifications />
      <Skills />
      <FeaturedProject />
      <Writing />
      <TechVerse />
      <GitHubActivity />
      <ContactSection />
    </>
  );
}
