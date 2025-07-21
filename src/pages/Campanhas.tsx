"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CampaignsHeroSection from "@/components/CampaignsHeroSection";
import CampaignsHowItWorksSection from "@/components/CampaignsHowItWorksSection";
import CampaignsTestimonialsSection from "@/components/CampaignsTestimonialsSection";
import CampaignsPricingSection from "@/components/CampaignsPricingSection";

const Campanhas = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <CampaignsHeroSection />
        <CampaignsHowItWorksSection />
        <CampaignsTestimonialsSection />
        <CampaignsPricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Campanhas;