import AboutSection from "@/components/client/landing/about/page";
import Hero from "@/components/client/landing/hero";
import LinkSection from "@/components/client/landing/link-section";
import Programs from "@/components/client/landing/programcard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | MKSH Academy",
  description: " MKSH Academy",
};
export default function Home() {
  return (
    <main className="px-0">
      <section className="h-[80vh]">
        <Hero />
      </section>
      <Programs />
      <AboutSection />
      <LinkSection />
    </main>
  );
}
