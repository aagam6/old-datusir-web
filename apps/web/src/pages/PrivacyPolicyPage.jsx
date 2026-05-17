import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <Helmet>
        <title>Privacy Policy | Dattu Sir's Commerce Academy Ahmedabad</title>
        <meta name="description" content="Privacy Policy for Dattu Sir's Commerce Academy in Maninagar, Ahmedabad." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-2">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            </li>
            <li>
              <ChevronRight className="w-4 h-4" />
            </li>
            <li className="text-primary font-medium">Privacy Policy</li>
          </ol>
        </nav>

        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-12">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none text-muted-foreground">

          <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

          <h2>1. Information We Collect</h2>
          <p>
            We may collect basic information such as your name and mobile number when you contact us via WhatsApp or phone for admission enquiries.
          </p>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To respond to your enquiries regarding Class 11 & 12 Commerce coaching</li>
            <li>To provide admission details and updates</li>
            <li>To communicate important academic information</li>
          </ul>

          <h2>3. Data Sharing</h2>
          <p>
            We do not sell, rent, or share your personal information with any third party.
          </p>

          <h2>4. Communication</h2>
          <p>
            By contacting us, you agree to receive communication via phone or WhatsApp regarding your enquiry.
          </p>

          <h2>5. Data Security</h2>
          <p>
            We take reasonable steps to protect your information and keep it secure.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            <strong>Dattu Sir's Commerce Academy</strong><br />
            Utsav House, Pranav Society, Jawahar Chowk<br />
            Maninagar, Ahmedabad, India<br />
            Phone: +91 98252 49281
          </p>

          {/* CTA */}
          <div className="mt-10 p-6 bg-orange-50 rounded-xl text-center">
            <p className="font-semibold text-primary mb-3">
              For quick response, contact us on WhatsApp
            </p>
            <a
              href="https://wa.me/919825249281?text=Hi%20I%20want%20to%20enquire%20about%20Class%2011/12%20Commerce%20admission"
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              💬 Chat on WhatsApp
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;