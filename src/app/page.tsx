'use client';

import Image from "next/image";
import Link from "next/link";
import EnhancedHero from "@/components/EnhancedHero";
import EnhancedServicesSection from "@/components/EnhancedServicesSection";
import EnhancedAboutSection from "@/components/EnhancedAboutSection";
import EnhancedCTASection from "@/components/EnhancedCTASection";
import CldImageWrapper from "@/components/CldImageWrapper";

export default function Home() {
  return (
    <>
      <EnhancedHero />
      
      <EnhancedServicesSection />
      
      <EnhancedAboutSection />
      
      <EnhancedCTASection />
    </>
  );
}
