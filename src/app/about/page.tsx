import { Metadata } from "next";
import { AboutDetail } from "@/components/sections/about-detail";

export const metadata: Metadata = {
  title: "About - Kevin Gabriel Maranan | Senior Full-Stack Engineer",
  description:
    "Learn more about Kevin Gabriel, a Senior Full-Stack Engineer with over 7 years of experience, specializing in both frontend and backend development.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <AboutDetail />
    </main>
  );
}
