'use client';

import { useEffect, useRef } from 'react';
import Link from "next/link";
import CldImageWrapper from "@/components/CldImageWrapper";
import EnhancedServicesHero from "@/components/EnhancedServicesHero";
import EnhancedServiceDetailSection from "@/components/EnhancedServiceDetailSection";
import EnhancedCTASection from "@/components/EnhancedCTASection";
import ServicesSchema from "@/components/ServicesSchema";
import { useGSAPAnimation } from "@/components/GSAPProvider";
import { Metadata } from "next";

// Metadata needs to be in a separate file or handled differently with client components
// This is just for reference and won't be used in the client component
const pageMetadata = {
  title: "Services | Digital Mosaic Studios",
  description: "Explore our comprehensive range of web design, development, maintenance, social media management, and content creation services.",
};

export default function ServicesPage() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const { gsap } = useGSAPAnimation();

  // Removed gradient animation to eliminate moving line effect

  return (
    <>
      <ServicesSchema />
      
      {/* Dark gradient background container */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Animated Background */}
        <div 
          ref={backgroundRef}
          className="fixed inset-0 bg-gradient-to-br from-primary via-secondary to-primary z-0"
          style={{
            backgroundSize: '200% 200%',
            backgroundPosition: '0% center'
          }}
        />
        
        {/* Decorative Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-accent opacity-10 rounded-full blur-xl" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-light-accent opacity-5 rounded-full blur-2xl" />
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-accent opacity-8 rounded-full blur-lg" />
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-light-accent opacity-6 rounded-full blur-xl" />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <EnhancedServicesHero />
          
          <EnhancedServiceDetailSection
            id="consultations"
            title="Consultations"
            description="Expert marketing consultations to help you develop effective strategies and grow your business."
            features={[
              {
                title: "Strategic Planning",
                description: "Comprehensive marketing strategy development tailored to your business goals and target audience."
              },
              {
                title: "Expert Guidance",
                description: "One-on-one consultations with experienced marketing professionals to address your specific challenges."
              },
              {
                title: "Actionable Insights",
                description: "Practical recommendations and actionable steps to implement immediately for business growth."
              }
            ]}
            imageSrc="https://res.cloudinary.com/di4phdven/image/upload/v1752192508/u9524928111_A_transparent_glass_boardroom_with_two_profession_48566216-c499-4db5-97ab-e79e9456f054_2_w1cyjr.png"
            imageAlt="Marketing Consultations Services"
            imagePosition="right"
            backgroundColor="secondary"
            showContactButton={true}
          />
          
          <EnhancedServiceDetailSection
            id="audits"
            title="Audits"
            description="Comprehensive marketing audits to identify opportunities and areas for improvement in your current strategy."
            features={[
              {
                title: "Performance Analysis",
                description: "Detailed analysis of your current marketing performance across all channels and platforms."
              },
              {
                title: "Opportunity Identification",
                description: "Identify untapped opportunities and areas where you can improve your marketing effectiveness."
              },
              {
                title: "Competitive Assessment",
                description: "Comprehensive review of your competitive landscape and positioning in the market."
              }
            ]}
            imageSrc="https://res.cloudinary.com/di4phdven/image/upload/v1752192878/u9524928111_A_sleek_digital_magnifying_glass_scanning_a_netwo_fe306951-15d8-4e55-8c45-22747766baeb_3_pfpqjh.png"
            imageAlt="Marketing Audits Services"
            imagePosition="left"
            backgroundColor="white"
            showContactButton={true}
          />
          
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
            imageSrc="https://res.cloudinary.com/di4phdven/image/upload/v1752192971/u9524928111_A_radiant_futuristic_interface_cube_pulsating_wit_69245bf5-2161-4f16-b305-c34f365eb112_3_xacv0n.png"
            imageAlt="Custom SaaS Tools Services"
            imagePosition="right"
            backgroundColor="secondary"
            showContactButton={true}
          />
          
          <EnhancedServiceDetailSection
            id="web-design"
            title="Web Design"
            description="Custom, responsive websites that convert visitors into customers and reflect your brand."
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
            imageSrc="https://res.cloudinary.com/di4phdven/image/upload/v1752192877/u9524928111_A_modern_laptop_on_a_pristine_white_desk_with_mar_e105cd71-8430-4cc1-9f82-8c74bc3ec33c_2_pjgw63.png"
            imageAlt="Web Design Services"
            imagePosition="left"
            backgroundColor="white"
            showContactButton={true}
          />
          
          <EnhancedServiceDetailSection
            id="analytics"
            title="Analytics"
            description="Data-driven insights and analytics to help you make informed marketing decisions and track performance."
            features={[
              {
                title: "Performance Tracking",
                description: "Comprehensive tracking and monitoring of your marketing campaigns and website performance."
              },
              {
                title: "Data Analysis",
                description: "In-depth analysis of your marketing data to identify trends, patterns, and opportunities."
              },
              {
                title: "Reporting & Insights",
                description: "Regular reports with actionable insights to help you optimize your marketing strategies."
              }
            ]}
            imageSrc="https://res.cloudinary.com/di4phdven/image/upload/v1752192346/u9524928111_Futuristic_modular_UI_panels_and_code_snippets_fl_a76642d7-73db-4b3b-9018-4cedc4e8015a_3_ds0rbi.png"
            imageAlt="Analytics Services"
            imagePosition="right"
            backgroundColor="secondary"
            showContactButton={true}
          />
          
          <EnhancedServiceDetailSection
            id="ai-prompting-lessons"
            title="AI Prompting Lessons"
            description="Learn how to effectively communicate with AI tools to maximize productivity and achieve better results."
            features={[
              {
                title: "Prompt Engineering",
                description: "Master the art of crafting effective prompts that get you the results you want from AI tools."
              },
              {
                title: "AI Tool Optimization",
                description: "Learn how to use various AI platforms and tools to their full potential for your business needs."
              },
              {
                title: "Productivity Enhancement",
                description: "Discover techniques to streamline your workflow and increase efficiency using AI assistance."
              }
            ]}
            imageSrc="https://res.cloudinary.com/di4phdven/image/upload/v1752192346/u9524928111_A_bright_modern_classroom_of_students_at_laptops__7b221d44-61f0-42d5-ac95-a2f82d38ee17_0_afy8gt.png"
            imageAlt="AI Prompting Lessons Services"
            imagePosition="left"
            backgroundColor="white"
            showContactButton={true}
          />
          
          <EnhancedCTASection
            title="Ready to Grow Your Business?"
            description="Contact us today to discuss how our services can help your business grow."
            buttons={[
              { text: "Get Started", href: "/contact", variant: "primary" },
              { text: "About Us", href: "/about", variant: "secondary" }
            ]}
          />
        </div>
      </div>
    </>
  );
}
