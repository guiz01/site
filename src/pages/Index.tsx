"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;