"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CampaignsHeroSection from "@/components/CampaignsHeroSection";
import CampaignsHowItWorksSection from "@/components/CampaignsHowItWorksSection";
import CampaignsPricingSection from "@/components/CampaignsPricingSection";
import usePageTitle from "@/hooks/usePageTitle";
import BrandsCarouselSection from "@/components/BrandsCarouselSection";
import CampaignsContactsPreviewSection from "@/components/CampaignsContactsPreviewSection";

const Campanhas = () => {
  usePageTitle("Campanhas de Marketing no WhatsApp | ConnectMe");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <CampaignsHeroSection />
        <CampaignsHowItWorksSection />
        <CampaignsContactsPreviewSection />
        <BrandsCarouselSection />
        <CampaignsPricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Campanhas;