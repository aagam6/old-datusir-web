import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

function TermsOfServicePage() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <Helmet>
        <title>Terms of Service | Dattu Sir's Commerce Academy Ahmedabad</title>
        <meta name="description" content="Terms of Service for Dattu Sir's Commerce Academy in Maninagar, Ahmedabad." />
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
            <li className="text-primary font-medium">Terms of Service</li>
          </ol>
        </nav>

        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-12">
          Terms of Service
        </h1>

        <div className="prose prose-lg max-w-none text-muted-foreground">

          <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

          <h2>1. Services</h2>
          <p>
            Dattu Sir’s Commerce Academy provides coaching for Class 11 & 12 Commerce students,
            including Accounts, Statistics, Economics, and related subjects.
          </p>

          <h2>2. Enquiries & Communication</h2>
          <p>
            All enquiries are handled via WhatsApp or phone. By contacting us, you agree to receive
            communication regarding admissions, batches, and academic updates.
          </p>

          <h2>3. Academy Rules & Discipline</h2>
          <p>
            Students are expected to maintain discipline, attend classes regularly, and follow academy guidelines.
            The academy reserves the right to take action in case of misconduct.
          </p>

          <h2>4. Fees & Payments</h2>
          <p>
            Fees and payment terms will be communicated at the time of admission.
            Fees once paid are non-refundable unless stated otherwise by the academy.
          </p>

          <h2>5. Results Disclaimer</h2>
          <p>
            While we aim for excellent academic results, performance depends on the student’s effort,
            consistency, and dedication. We do not guarantee specific marks or ranks.
          </p>

          <h2>6. Changes to Terms</h2>
          <p>
            The academy may update these terms at any time. Continued use of services indicates acceptance
            of the updated terms.
          </p>

          <h2>7. Contact</h2>
          <p>
            <strong>Dattu Sir's Commerce Academy</strong><br />
            Utsav House, Pranav Society, Jawahar Chowk<br />
            Maninagar, Ahmedabad, India<br />
            Phone: +91 98252 49281
          </p>

          {/* CTA */}
          <div className="mt-10 p-6 bg-orange-50 rounded-xl text-center">
            <p className="font-semibold text-primary mb-3">
              For admission enquiries, contact us on WhatsApp
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

export default TermsOfServicePage;