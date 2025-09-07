'use client';

import { useState, FormEvent } from 'react';
import dynamic from 'next/dynamic';

// @ts-ignore
const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'), {
  ssr: false,
});

// Extend the Window interface to include our custom gtag function and Facebook Pixel
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    gtagReportConversion?: () => void;
    fbq?: (...args: any[]) => void;
  }
}

const ContactForm = () => {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    // Honeypot fields for bot detection
    website: '', // Hidden field - bots will fill this
    company_name: '', // Another honeypot field
    // How did you hear about us for lead quality
    referral_source: '',
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState(0);
  const [submissionCount, setSubmissionCount] = useState(0);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Rate limiting check
    const now = Date.now();
    const timeSinceLastSubmission = now - lastSubmissionTime;
    
    if (timeSinceLastSubmission < 5000) { // 5 second minimum between submissions
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please wait a moment before submitting again.'
      });
      return;
    }
    
    if (submissionCount >= 3) { // Max 3 submissions per session
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Too many submissions. Please refresh the page and try again.'
      });
      return;
    }
    
    // Honeypot validation - if these fields are filled, it's likely a bot
    if (formData.website || formData.company_name) {
      // Silently fail for bots
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you for your message! We will get back to you soon.'
      });
      return;
    }
    
    // reCAPTCHA validation
    if (!recaptchaToken) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please complete the reCAPTCHA verification.'
      });
      return;
    }
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill out all required fields.'
      });
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please enter a valid email address.'
      });
      return;
    }
    
    // Phone validation (if provided)
    if (formData.phone) {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      const cleanPhone = formData.phone.replace(/[\s\-\(\)\.]/g, '');
      if (!phoneRegex.test(cleanPhone)) {
        setFormStatus({
          submitted: true,
          success: false,
          message: 'Please enter a valid phone number.'
        });
        return;
      }
    }
    
    setIsSubmitting(true);
    
    try {
      // Send form data to API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Update rate limiting
        setLastSubmissionTime(now);
        setSubmissionCount(prev => prev + 1);
        
        // Success - trigger Google Ads conversion tracking
        // Primary method: Direct gtag call
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'conversion', {
            'send_to': 'AW-17079402860/QG_OCM67oeQaEOyCjNA_'
          });
        }
        
        // Backup method: Helper function
        if (typeof window !== 'undefined' && window.gtagReportConversion) {
          window.gtagReportConversion();
        }
        
        // Facebook Pixel tracking
        if (typeof window !== 'undefined' && window.fbq) {
          window.fbq('track', 'Lead');
        }
        
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Thank you for your message! We will get back to you soon.'
        });
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          website: '',
          company_name: '',
          referral_source: '',
        });
        
        // Reset reCAPTCHA
        setRecaptchaToken(null);
      } else {
        // API returned an error
        setFormStatus({
          submitted: true,
          success: false,
          message: data.error || 'Something went wrong. Please try again later.'
        });
      }
    } catch (error) {
      // Network or other error
      console.error('Error submitting form:', error);
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Unable to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-subtle p-6 md:p-8 border border-bg-secondary">
      <div>
        <h2 className="text-card-title text-2xl mb-6 text-center">
          Get in Touch
        </h2>
        
        {formStatus.submitted && (
          <div className={`mb-6 p-4 rounded-md text-center ${formStatus.success ? 'bg-[#E8F5E9] text-[#2E7D32]' : 'bg-[#FFEBEE] text-[#C62828]'}`}>
            {formStatus.message}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-primary text-sm font-medium mb-2">
                Name <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all duration-200 text-black"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-primary text-sm font-medium mb-2">
                Email <span className="text-accent">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all duration-200 text-black"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-primary text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all duration-200 text-black"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-primary text-sm font-medium mb-2">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all duration-200 bg-white appearance-none text-black"
                style={{ 
                  backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                  backgroundPosition: "right 0.5rem center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "1.5em 1.5em",
                  paddingRight: "2.5rem"
                }}
              >
                <option value="">Select a subject</option>
                <option value="Startup Growth Consultation">Startup Growth Consultation</option>
                <option value="Small Business Marketing Audit">Small Business Marketing Audit</option>
                <option value="Marketing Consultations">Marketing Consultations</option>
                <option value="Custom SaaS Tools">Custom SaaS Tools</option>
                <option value="Web Design">Web Design</option>
                <option value="Analytics & Insights">Analytics & Insights</option>
                <option value="AI Prompting Lessons">AI Prompting Lessons</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="referral_source" className="block text-primary text-sm font-medium mb-2">
                How did you hear about us?
              </label>
              <select
                id="referral_source"
                name="referral_source"
                value={formData.referral_source}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all duration-200 bg-white appearance-none text-black"
                style={{ 
                  backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                  backgroundPosition: "right 0.5rem center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "1.5em 1.5em",
                  paddingRight: "2.5rem"
                }}
              >
                <option value="">Please select</option>
                <option value="Google Search">Google Search</option>
                <option value="Social Media">Social Media</option>
                <option value="Referral">Referral from Friend/Colleague</option>
                <option value="Industry Event">Industry Event</option>
                <option value="Online Ad">Online Advertisement</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Facebook">Facebook</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          
          {/* Honeypot fields - hidden from users but visible to bots */}
          <div style={{ display: 'none' }}>
            <label htmlFor="website">Website (leave blank)</label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
            <label htmlFor="company_name">Company Name (leave blank)</label>
            <input
              type="text"
              id="company_name"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-primary text-sm font-medium mb-2">
              Message <span className="text-accent">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all duration-200 text-black"
              required
              placeholder="Tell us about your business and how we can help you grow..."
            ></textarea>
          </div>
          
          {/* reCAPTCHA */}
          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              onChange={(token: string | null) => setRecaptchaToken(token)}
              onExpired={() => setRecaptchaToken(null)}
              onError={() => setRecaptchaToken(null)}
            />
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting || !recaptchaToken}
              className={`font-figtree px-6 py-2.5 bg-accent text-white font-medium rounded-md hover:bg-light-accent hover:text-white transition-colors duration-200 ${isSubmitting || !recaptchaToken ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
