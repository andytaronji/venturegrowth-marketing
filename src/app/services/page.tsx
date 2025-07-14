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
            description="Get a comprehensive consultation to craft strategies that drive growth for Georgia businesses. Our Atlanta-based experts provide one-on-one consultations to help Marietta and Georgia businesses develop effective strategies and achieve measurable results."
            features={[
              {
                title: "Strategic Planning",
                description: "Our Atlanta-based experts provide comprehensive marketing strategy development tailored specifically for Georgia businesses, with deep knowledge of local markets and competition."
              },
              {
                title: "Expert Guidance",
                description: "Receive actionable steps you can implement immediately to see real results. One-on-one consultations with experienced marketing professionals who understand the Atlanta and Marietta business landscape."
              },
              {
                title: "Actionable Insights",
                description: "Practical recommendations designed specifically for small businesses and startups in Georgia, with proven strategies that work in the Atlanta market."
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
            description="Get a comprehensive audit to uncover growth opportunities and outperform your competition in Marietta, Atlanta, and beyond. Our detailed marketing audits help Georgia businesses identify areas for improvement and benchmark against local competitors."
            features={[
              {
                title: "Performance Analysis",
                description: "Detailed analysis of your current marketing performance across all channels and platforms, with insights delivered through comprehensive reports tailored for Atlanta and Georgia businesses."
              },
              {
                title: "Opportunity Identification",
                description: "Identify untapped opportunities specific to the Georgia market and areas where you can improve your marketing effectiveness against local competition."
              },
              {
                title: "Competitive Assessment",
                description: "Comprehensive review of your competitive landscape in the Atlanta and Marietta markets, with positioning strategies that work for Georgia businesses."
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
            description="We've built SaaS tools for Atlanta accountants, Georgia retailers, and more. Take control and dominate your industry with custom tools built specifically for your industry and service offerings, designed to scale with businesses expanding beyond Georgia."
            features={[
              {
                title: "Industry-Specific Solutions",
                description: "Tailored software solutions designed specifically for Atlanta and Georgia businesses, with examples including tools for local accountants, retailers, and service providers."
              },
              {
                title: "Custom Workflow Automation",
                description: "Streamline your business processes with automated workflows that save time and reduce errors, built specifically for the unique needs of Georgia businesses."
              },
              {
                title: "Scalable Architecture",
                description: "Built to grow with your business as you expand from Marietta and Atlanta to serve customers across Georgia and beyond, ensuring optimal performance at every stage."
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
            description="Specializing in web design for Marietta, Atlanta, and Georgia businesses—built to convert visitors into customers. All sites are responsive and optimized for local SEO to help your business rank in Atlanta and Georgia searches."
            features={[
              {
                title: "Custom Web Applications",
                description: "Tailored web applications that meet the specific requirements of Atlanta and Georgia businesses, built with local market considerations in mind."
              },
              {
                title: "E-commerce Solutions",
                description: "Secure, user-friendly online stores optimized for Georgia customers that drive sales and enhance customer experience for local businesses."
              },
              {
                title: "Content Management Systems",
                description: "Easy-to-use CMS implementations optimized for local SEO that allow Marietta and Atlanta businesses to update content effortlessly while maintaining search rankings."
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
            description="Our analytics help Atlanta and Georgia businesses make data-driven decisions. We use Google Analytics and custom dashboards to provide comprehensive insights tailored for local market performance."
            features={[
              {
                title: "Performance Tracking",
                description: "Comprehensive tracking using Google Analytics and custom dashboards to monitor your marketing campaigns and website performance specifically for Atlanta and Georgia markets."
              },
              {
                title: "Data Analysis",
                description: "In-depth analysis of your marketing data to identify trends, patterns, and opportunities specific to the Georgia business landscape and local competition."
              },
              {
                title: "Reporting & Insights",
                description: "Regular reports with actionable insights tailored for Atlanta and Georgia businesses to help you optimize your marketing strategies for local success."
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
            description="Learn to leverage AI tools for marketing, content creation, and workflow automation through local workshops and virtual sessions for Georgia businesses. Discover the business impact of effective AI communication."
            features={[
              {
                title: "Prompt Engineering",
                description: "Master the art of crafting effective prompts specifically for marketing and business applications, with examples relevant to Atlanta and Georgia businesses."
              },
              {
                title: "AI Tool Optimization",
                description: "Learn how to use various AI platforms and tools to their full potential for your business needs, with focus on applications for Georgia small businesses and startups."
              },
              {
                title: "Productivity Enhancement",
                description: "Discover techniques to streamline your workflow and increase efficiency using AI assistance, with local workshops available for Marietta and Atlanta businesses."
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
            description="Serving Marietta, Atlanta, and all of Georgia. Book your free consultation now to discuss how our services can help your business grow."
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
