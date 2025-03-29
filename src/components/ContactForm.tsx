'use client';

import { useState, FormEvent } from 'react';

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

  const handleSubmit = (e: FormEvent) => {
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
    
    // In a real application, you would send the form data to a server here
    // For now, we'll just simulate a successful submission
    
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
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-navy-blue mb-6">Get in Touch</h2>
      
      {formStatus.submitted && (
        <div className={`mb-6 p-4 rounded-md ${formStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {formStatus.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-dark-text font-medium mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-light-blue"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-dark-text font-medium mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-light-blue"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-dark-text font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-light-blue"
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-dark-text font-medium mb-2">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-light-blue"
            >
              <option value="">Select a subject</option>
              <option value="Website Design">Website Design</option>
              <option value="Website Development">Website Development</option>
              <option value="Website Maintenance">Website Maintenance</option>
              <option value="Social Media Management">Social Media Management</option>
              <option value="Content Creation">Content Creation</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        
        <div className="mt-6">
          <label htmlFor="message" className="block text-dark-text font-medium mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-light-blue"
            required
          ></textarea>
        </div>
        
        <div className="mt-6">
          <button
            type="submit"
            className="px-6 py-3 bg-navy-blue text-white font-medium rounded-md hover:bg-light-blue transition-colors duration-200"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
