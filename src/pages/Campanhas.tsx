"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CampaignsHeroSection from "@/components/CampaignsHeroSection";
import CampaignsPricingSection from "@/components/CampaignsPricingSection";
import usePageTitle from "@/hooks/usePageTitle";
import BrandsCarouselSection from "@/components/BrandsCarouselSection";
import CampaignsContactsPreviewSection from "@/components/CampaignsContactsPreviewSection";
import CampaignsMessageBuilderSection from "@/components/CampaignsMessageBuilderSection";

const Campanhas = () => {
  usePageTitle("Campanhas de Marketing no WhatsApp | ConnectMe");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <CampaignsHeroSection />
        <CampaignsMessageBuilderSection />
        <CampaignsContactsPreviewSection />
        <CampaignsPricingSection />
        <BrandsCarouselSection />
      </main>
      <Footer />
    </div>
  );
};

export default Campanhas;