import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Benefits } from "@/components/sections/Benefits";
import { Process } from "@/components/sections/Process";
import { Packages } from "@/components/sections/Packages";
import { BookingForm } from "@/components/sections/BookingForm";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState("vishesh");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <Hero />
        <About />
        <Benefits />
        <Process />
        <Packages onSelect={setSelectedPackage} />
        <BookingForm selectedPackage={selectedPackage} setSelectedPackage={setSelectedPackage} />
      </main>
      <Footer />
    </div>
  );
}
