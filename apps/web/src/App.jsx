import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';
import TermsOfServicePage from './pages/TermsOfServicePage.jsx';
import StickyWhatsApp from './components/StickyWhatsApp.jsx';
import StickyCall from './components/StickyCall.jsx';
import MobileActionBar from './components/MobileActionBar.jsx';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Best Commerce Coaching in Ahmedabad | Dattu Sir Academy</title>
        <meta name="description" content="Class 11 & 12 Commerce coaching in Maninagar Ahmedabad. Expert Accounts & Statistics coaching with strong results." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-background font-sans">
        <Header />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          </Routes>
        </main>
        
        <Footer />
        
        {/* Sticky floating actions */}
        <StickyWhatsApp />
        <StickyCall />
        
        {/* Mobile bottom action bar */}
        <MobileActionBar />
        
        <Toaster />
      </div>
    </Router>
  );
}

export default App;