'use client';

import Image from "next/image";
import Link from "next/link";
import EnhancedHero from "@/components/EnhancedHero";
import EnhancedServicesSection from "@/components/EnhancedServicesSection";
import EnhancedAboutSection from "@/components/EnhancedAboutSection";
import EnhancedCTASection from "@/components/EnhancedCTASection";
import CldImageWrapper from "@/components/CldImageWrapper";
import OrganizationSchema from "@/components/OrganizationSchema";
import FAQSchema from "@/components/FAQSchema";
import ReviewSchema from "@/components/ReviewSchema";

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      <FAQSchema />
      <ReviewSchema />
      <EnhancedHero />
      
      <EnhancedServicesSection />
      
      <EnhancedAboutSection />
      
      <EnhancedCTASection />
    </>
  );
}
