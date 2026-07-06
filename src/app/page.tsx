import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import PetoryScene from "@/components/sections/PetoryScene";
import VelaScene from "@/components/sections/VelaScene";
import SelectedWork from "@/components/sections/SelectedWork";
import Archive from "@/components/sections/Archive";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export const dynamic = "error";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <PetoryScene />
      <VelaScene />
      <SelectedWork />
      <Archive />
      <About />
      <Contact />
    </main>
  );
}
