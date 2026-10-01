import Hero from "@/components/client/landing/hero";
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
    </main>
  );
}
