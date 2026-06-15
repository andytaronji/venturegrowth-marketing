'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const checkSvg = (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
    <path d="M2.5 6.3 L4.8 8.6 L9.6 3.4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const arrowSvg = (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
    <path d="M3 8 H12 M8.5 4 L12.5 8 L8.5 12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DiscoveryAndAuditSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (headerRef.current) {
              headerRef.current.classList.add('is-visible');
            }
            setTimeout(() => {
              const content = entry.target.querySelector('.animate-card');
              if (content) content.classList.add('is-visible');
            }, 600);
          }
        });
      },
      { threshold: 1.0, rootMargin: '0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section
      id="discovery-and-audit"
      ref={sectionRef}
      className="py-16 md:py-24"
      style={{ scrollMarginTop: '100px' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className="bg-white/10 backdrop-blur-sm rounded-xl shadow-luxury overflow-hidden animate-header"
          style={{'--accent': '#38e0ff', '--line': 'rgba(56,224,255,.30)', '--glow': 'rgba(56,224,255,.16)'} as React.CSSProperties}
        >
          <div className="gradient-border-card-content">
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Content */}
                <div className="order-1 md:order-1 dms-content">
                  <div className="dms-kicker">
                    <span className="rule"></span>
                    <span className="txt">Service 01 / 06</span>
                  </div>
                  <h2 className="dms-title">Discovery and Audit</h2>
                  <p className="dms-desc">
                    Unlock your business&apos;s growth potential with comprehensive discovery and audit services. We analyze your current digital presence, identify opportunities, and create a strategic roadmap aligned with your business goals and market position.
                  </p>
                  <ul className="dms-list">
                    <li><span className="chip">{checkSvg}</span><span className="label">Business Analysis</span></li>
                    <li><span className="chip">{checkSvg}</span><span className="label">Opportunity Identification</span></li>
                    <li><span className="chip">{checkSvg}</span><span className="label">Strategic Roadmapping</span></li>
                  </ul>
                  <div className="mt-8">
                    <Link href="/contact" className="dms-btn">Contact Us {arrowSvg}</Link>
                  </div>
                </div>

                {/* Animation Panel */}
                <div className="order-2 md:order-2">
                  <div className="dms-panel">
                    <dms-anim kind="discovery" aria-hidden="true"></dms-anim>
                    <span className="dms-tick tl"></span>
                    <span className="dms-tick tr"></span>
                    <span className="dms-tick bl"></span>
                    <span className="dms-tick br"></span>
                    <div className="dms-live"><i></i><span>Live</span></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoveryAndAuditSection;
