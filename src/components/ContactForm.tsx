'use client';

import { useState, FormEvent } from 'react';

// Extend the Window interface to include our custom gtag function
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    gtagReportConversion?: () => void;
  }
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill out all required fields.'
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send form data to API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
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
        });
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
        <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
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
                <option value="Custom SaaS Tools">Custom SaaS Tools</option>
                <option value="Website Development">Website Development</option>
                <option value="Website Maintenance">Website Maintenance</option>
                <option value="Social Media Management">Social Media Management</option>
                <option value="Content Creation">Content Creation</option>
                <option value="Other">Other</option>
              </select>
            </div>
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
            ></textarea>
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2.5 bg-accent text-white font-medium rounded-md hover:bg-light-accent hover:text-white transition-colors duration-200 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
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
