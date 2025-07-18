export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Sophisticated dark background container */}
      <div className="relative min-h-screen overflow-hidden bg-dark-solid">
        {/* Elegant decorative elements for premium feel */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-20 left-20 w-16 h-16 bg-white opacity-3 rounded-full blur-xl" />
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent opacity-8 rounded-full blur-2xl" />
          <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-white opacity-4 rounded-full blur-lg" />
          <div className="absolute bottom-1/2 left-1/3 w-20 h-20 bg-light-accent opacity-6 rounded-full blur-xl" />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white text-on-dark">Privacy Policy</h1>
              <p className="text-xl text-white text-opacity-90">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              <p className="text-sm text-white text-opacity-80 mt-4">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </section>

          {/* Privacy Policy Content */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-white text-opacity-90 mb-4">
                Digital Mosaic Studios ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website digitalmosaicstudios.com or use our services.
              </p>
              <p className="text-white text-opacity-90">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
              <p className="text-white text-opacity-90 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-white text-opacity-80 mb-6">
                <li>Fill out contact forms on our website</li>
                <li>Request information about our services</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Interact with us on social media</li>
                <li>Contact us directly via email or phone</li>
              </ul>
              
              <p className="text-white text-opacity-90 mb-4">
                This personal information may include:
              </p>
              <ul className="list-disc pl-6 text-white text-opacity-80 mb-6">
                <li>Name and contact information (email address, phone number)</li>
                <li>Company name and business information</li>
                <li>Project details and service requirements</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">Automatically Collected Information</h3>
              <p className="text-white text-opacity-90 mb-4">
                When you visit our website, we may automatically collect certain information about your device and usage patterns, including:
              </p>
              <ul className="list-disc pl-6 text-white text-opacity-80 mb-6">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website</li>
                <li>Device information</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="text-white text-opacity-90 mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-white text-opacity-80 mb-6">
                <li>To respond to your inquiries and provide customer service</li>
                <li>To provide, maintain, and improve our services</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To analyze website usage and improve user experience</li>
                <li>To detect, prevent, and address technical issues</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and the rights of others</li>
              </ul>
            </div>

            {/* Cookies and Tracking Technologies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Cookies and Tracking Technologies</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">Google Analytics</h3>
              <p className="text-white text-opacity-90 mb-4">
                We use Google Analytics to analyze website traffic and user behavior. Google Analytics uses cookies to collect information such as:
              </p>
              <ul className="list-disc pl-6 text-white text-opacity-80 mb-6">
                <li>How users find and use our website</li>
                <li>Which pages are most popular</li>
                <li>How long users spend on our site</li>
                <li>User demographics and interests (when available)</li>
              </ul>
              
              <p className="text-white text-opacity-90 mb-4">
                Google Analytics data is used to improve our website and services. You can opt-out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on or by adjusting your browser settings to block cookies.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">Other Cookies</h3>
              <p className="text-white text-opacity-90 mb-4">
                Our website may use other cookies and similar technologies to:
              </p>
              <ul className="list-disc pl-6 text-white text-opacity-80 mb-6">
                <li>Remember your preferences and settings</li>
                <li>Improve website functionality</li>
                <li>Analyze website performance</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Information Sharing and Disclosure</h2>
              <p className="text-white text-opacity-90 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-white text-opacity-80 mb-6">
                <li><strong className="text-white">Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and conducting our business</li>
                <li><strong className="text-white">Legal Requirements:</strong> We may disclose information when required by law or to protect our rights, property, or safety</li>
                <li><strong className="text-white">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                <li><strong className="text-white">Consent:</strong> We may share information with your explicit consent</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="text-white text-opacity-90 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
              <p className="text-white text-opacity-90 mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. When we no longer need your personal information, we will securely delete or anonymize it.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Your Privacy Rights</h2>
              <p className="text-white text-opacity-90 mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-white text-opacity-80 mb-6">
                <li><strong className="text-white">Access:</strong> Request access to your personal information</li>
                <li><strong className="text-white">Correction:</strong> Request correction of inaccurate personal information</li>
                <li><strong className="text-white">Deletion:</strong> Request deletion of your personal information</li>
                <li><strong className="text-white">Portability:</strong> Request a copy of your personal information in a portable format</li>
                <li><strong className="text-white">Objection:</strong> Object to the processing of your personal information</li>
                <li><strong className="text-white">Restriction:</strong> Request restriction of processing your personal information</li>
              </ul>
              <p className="text-white text-opacity-90 mb-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Links</h2>
              <p className="text-white text-opacity-90 mb-4">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
              <p className="text-white text-opacity-90 mb-4">
                Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
              </p>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Privacy Policy</h2>
              <p className="text-white text-opacity-90 mb-4">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date. You are advised to review this privacy policy periodically for any changes.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-white text-opacity-90 mb-4">
                If you have any questions about this privacy policy or our privacy practices, please contact us:
              </p>
              <div className="bg-white bg-opacity-90 p-6 rounded-lg border border-gray-200">
                <p className="text-gray-900 mb-2"><strong>Digital Mosaic Studios</strong></p>
                <p className="text-gray-700 mb-2">Email: infodigitalmosaicstudios@gmail.com</p>
                <p className="text-gray-700 mb-2">Phone: 404-861-7744</p>
                <p className="text-gray-700">Website: digitalmosaicstudios.com</p>
              </div>
            </div>

          </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
