'use client';

import Link from "next/link";
import CldImageWrapper from "@/components/CldImageWrapper";
import EnhancedServicesHero from "@/components/EnhancedServicesHero";
import EnhancedServiceDetailSection from "@/components/EnhancedServiceDetailSection";
import EnhancedCTASection from "@/components/EnhancedCTASection";
import { Metadata } from "next";

// Metadata needs to be in a separate file or handled differently with client components
// This is just for reference and won't be used in the client component
const pageMetadata = {
  title: "Services | Digital Mosaic Studios",
  description: "Explore our comprehensive range of web design, development, maintenance, social media management, and content creation services.",
};

export default function ServicesPage() {
  return (
    <>
      <EnhancedServicesHero />
      
      <EnhancedServiceDetailSection
        id="custom-saas-tools"
        title="Custom SaaS Tools"
        description="Take control and dominate your industry with custom tools built specifically to your industry and service offerings."
        features={[
          {
            title: "Industry-Specific Solutions",
            description: "Tailored software solutions designed specifically for your industry's unique challenges and workflows."
          },
          {
            title: "Custom Workflow Automation",
            description: "Streamline your business processes with automated workflows that save time and reduce errors."
          },
          {
            title: "Scalable Architecture",
            description: "Built to grow with your business, ensuring optimal performance as your needs expand."
          }
        ]}
        imageSrc="Screenshot_2025-06-09_111230_hq24ze"
        imageAlt="Custom SaaS Tools Services"
        imagePosition="right"
        backgroundColor="white"
      />
      
      <EnhancedServiceDetailSection
        id="website-development"
        title="Website Development"
        description="We build robust, scalable websites using cutting-edge technologies that ensure optimal performance, security, and functionality."
        features={[
          {
            title: "Custom Web Applications",
            description: "Tailored web applications that meet your specific business requirements."
          },
          {
            title: "E-commerce Solutions",
            description: "Secure, user-friendly online stores that drive sales and enhance customer experience."
          },
          {
            title: "Content Management Systems",
            description: "Easy-to-use CMS implementations that allow you to update your website content effortlessly."
          }
        ]}
        imageSrc="Screenshot_2025-05-13_150720_ab2fyw"
        imageAlt="Website Development Services"
        imagePosition="left"
        backgroundColor="secondary"
      />
      
      <EnhancedServiceDetailSection
        id="website-maintenance"
        title="Website Maintenance"
        description="Keep your website running smoothly with our comprehensive maintenance services that ensure security, performance, and up-to-date content."
        features={[
          {
            title: "Regular Updates",
            description: "Timely updates to software, plugins, and content to keep your website current."
          },
          {
            title: "Security Monitoring",
            description: "Proactive security measures to protect your website from threats and vulnerabilities."
          },
          {
            title: "Performance Optimization",
            description: "Regular optimization to ensure fast loading times and smooth user experience."
          }
        ]}
        imageSrc="Screenshot_2025-05-13_150241_yld8vo"
        imageAlt="Website Maintenance Services"
        imagePosition="right"
        backgroundColor="white"
      />
      
      <EnhancedServiceDetailSection
        id="social-media"
        title="Social Media Management"
        description="Build and maintain a strong social media presence that engages your audience, builds brand awareness, and drives traffic to your website."
        features={[
          {
            title: "Content Strategy",
            description: "Strategic planning and creation of engaging content tailored to your target audience."
          },
          {
            title: "Community Management",
            description: "Active engagement with your audience to build relationships and foster community."
          },
          {
            title: "Analytics & Reporting",
            description: "Regular performance analysis and reporting to track growth and optimize strategies."
          }
        ]}
        imageSrc="samples/ecommerce/accessories-bag"
        imageAlt="Social Media Management Services"
        imagePosition="left"
        backgroundColor="secondary"
      />
      
      <EnhancedServiceDetailSection
        id="content-creation"
        title="Content Creation"
        description="Compelling, high-quality content that engages your audience, establishes your expertise, and drives organic traffic to your website."
        features={[
          {
            title: "Blog Writing",
            description: "Informative, engaging blog posts that establish your authority and improve SEO."
          },
          {
            title: "Copywriting",
            description: "Persuasive copy for websites, landing pages, and marketing materials that convert visitors into customers."
          },
          {
            title: "Visual Content",
            description: "Eye-catching graphics, infographics, and videos that enhance your message and increase engagement."
          }
        ]}
        imageSrc="Screenshot_2025-05-13_151506_jysyqn"
        imageAlt="Content Creation Services"
        imagePosition="right"
        backgroundColor="white"
      />
      
      <EnhancedCTASection
        title="Ready to Grow Your Business?"
        description="Contact us today to discuss how our services can help your business grow."
        buttons={[
          { text: "Get Started", href: "/contact", variant: "primary" },
          { text: "About Us", href: "/about", variant: "secondary" }
        ]}
      />
    </>
  );
}
