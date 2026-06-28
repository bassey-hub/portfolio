import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";

const About = dynamic(() => import("@/components/About").then((mod) => mod.About), {
  loading: () => <div className="min-h-[40vh]" />,
});

const Experience = dynamic(
  () => import("@/components/Experience").then((mod) => mod.Experience),
  {
    loading: () => <div className="min-h-[40vh]" />,
  },
);

const Projects = dynamic(
  () => import("@/components/Projects").then((mod) => mod.Projects),
  {
    loading: () => <div className="min-h-[40vh]" />,
  },
);

const Contact = dynamic(() => import("@/components/Contact").then((mod) => mod.Contact), {
  loading: () => <div className="min-h-[40vh]" />,
});

export default function Home() {
  return (
    <main className="relative flex flex-col bg-black">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
