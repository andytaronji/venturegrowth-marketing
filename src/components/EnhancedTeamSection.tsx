'use client';

import { useEffect, useRef } from 'react';
import CldImageWrapper from './CldImageWrapper';
import { useGSAPAnimation } from './GSAPProvider';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

interface EnhancedTeamSectionProps {
  title?: string;
  description?: string;
  teamMembers?: TeamMember[];
}

const EnhancedTeamSection = ({
  title = "Our Team",
  description = "Meet the talented professionals behind Digital Mosaic Studios.",
  teamMembers = [
    {
      name: "Andrew Taronji",
      role: "Founder & CEO",
      description: "With over 5 years of experience in digital marketing and web development, Andrew leads our team with vision and expertise.",
      imageSrc: "Mosaic_Studios_Andrew_ldl9fo",
      imageAlt: "Andrew Taronji - Founder & CEO"
    },
    {
      name: "Joseph Coile",
      role: "Chief Sales Officer",
      description: "Joseph leads our sales team with a client-focused approach, building strong relationships and ensuring our solutions align with client business goals.",
      imageSrc: "Sleepy_Stunting_gvn3at",
      imageAlt: "Joseph Coile - Chief Sales Officer"
    },
    {
      name: "Devin Novelli",
      role: "Chief Financial Officer",
      description: "Devin oversees our financial operations, ensuring sustainable growth and helping clients maximize their return on investment in digital marketing.",
      imageSrc: "man-smiling-behind-wall-portrait-glasses-beard-white-shirt-indoor-casual-happy-young-man-thumbnail_ymzvkv",
      imageAlt: "Devin Novelli - Chief Financial Officer"
    }
  ]
}: EnhancedTeamSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const teamGridRef = useRef<HTMLDivElement>(null);
  
  const { gsap } = useGSAPAnimation();

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, descriptionRef.current], {
        opacity: 0,
        y: 30
      });

      // Set initial states for team cards
      const teamCards = teamGridRef.current?.querySelectorAll('.team-card');
      if (teamCards) {
        gsap.set(teamCards, {
          opacity: 0,
          y: 40,
          scale: 0.95
        });
      }

      // Create main timeline
      const teamTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'bottom 25%',
          toggleActions: 'play none none reverse',
          markers: false
        }
      });

      // Animate header
      teamTimeline
        .to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out'
        })
        .to(descriptionRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out'
        }, '-=0.4');

      // Animate team cards with stagger
      if (teamCards && teamCards.length > 0) {
        teamTimeline.to(teamCards, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.15
        }, '-=0.3');
      }

      // Add hover effects for team cards
      if (teamCards) {
        teamCards.forEach((card) => {
          const cardElement = card as HTMLElement;
          const imageContainer = cardElement.querySelector('.team-image');
          
          cardElement.addEventListener('mouseenter', () => {
            gsap.to(cardElement, {
              y: -8,
              duration: 0.3,
              ease: 'power2.out'
            });
            
            if (imageContainer) {
              gsap.to(imageContainer, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
              });
            }
          });

          cardElement.addEventListener('mouseleave', () => {
            gsap.to(cardElement, {
              y: 0,
              duration: 0.3,
              ease: 'power2.out'
            });
            
            if (imageContainer) {
              gsap.to(imageContainer, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
              });
            }
          });
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, [gsap]);

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white z-index-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold text-primary mb-4 gsap-will-change"
          >
            {title}
          </h2>
          <p 
            ref={descriptionRef}
            className="text-lg text-secondary max-w-3xl mx-auto gsap-will-change"
          >
            {description}
          </p>
        </div>
        
        <div 
          ref={teamGridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="team-card bg-white rounded-lg shadow-subtle overflow-hidden border border-bg-secondary gsap-will-change gsap-hardware-accel"
            >
              <div className="team-image relative h-80 w-full overflow-hidden">
                <CldImageWrapper
                  src={member.imageSrc}
                  alt={member.imageAlt}
                  width={600}
                  height={800}
                  crop={member.imageSrc.includes('Sleepy_Stunting') ? "fit" : member.imageSrc.includes('man-smiling') ? "fill" : "fit"}
                  gravity={member.imageSrc.includes('man-smiling') ? "face" : "center"}
                  quality="auto:best"
                  className={`rounded-t-lg absolute inset-0 w-full h-full ${
                    member.imageSrc.includes('Sleepy_Stunting') ? 'object-contain' : 'object-cover'
                  }`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-accent font-medium mb-4">{member.role}</p>
                <p className="text-secondary text-sm mb-4">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedTeamSection;
