import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { ContactMe } from "@/components/main/contact"
import { Footer } from "@/components/main/footer";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    </main>
  );
}
