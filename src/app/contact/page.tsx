'use client';

import EnhancedContactHero from "@/components/EnhancedContactHero";
import EnhancedContactSection from "@/components/EnhancedContactSection";
import EnhancedMapSection from "@/components/EnhancedMapSection";
import ContactPageSchema from "@/components/ContactPageSchema";

export default function ContactPage() {
  return (
    <>
      <ContactPageSchema />
      <EnhancedContactHero />
      <EnhancedContactSection />
      <EnhancedMapSection />
    </>
  );
}
