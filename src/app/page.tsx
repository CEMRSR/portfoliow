import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { FeaturedProjects } from "@/components/sections/featured-projects";

export const metadata = {
  title: "Kevin Gabriel Maranan - Senior Full-Stack Engineer | Versatile Software Engineering Expert | Healthcare, Fintech & E-Commerce",
  description:
    "Portfolio of Kevin Gabriel Maranan, a Senior Full-Stack Engineer specializing in Node.js, React, Django, .NET, cloud architecture, and modern development.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <FeaturedProjects />
    </main>
  );
}
