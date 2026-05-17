import React from 'react';
import { MapPin, Phone, MessageCircle, Trophy } from 'lucide-react';
import { useWhatsApp } from '@/hooks/useWhatsApp.js';
import { Link } from 'react-router-dom';

function Footer() {
  const { openWhatsApp } = useWhatsApp();

  return (
    <footer className="bg-[#081528] text-white pt-16 pb-24 md:pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-12">
          
          {/* Academy Info */}
          <div className="md:col-span-4">
            <Link to="/" className="flex flex-col mb-6">
              <span className="text-3xl font-extrabold text-white tracking-tight leading-none uppercase">
                Dattu Sir's
              </span>
              <span className="text-base font-semibold text-orange-400 tracking-widest uppercase">
                Academy
              </span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed mb-6 max-w-sm">
              Ahmedabad's most trusted commerce academy since 2003. 
              Dedicated to building concepts, confidence, and careers for Class 11 & 12 Commerce students for over 23 years[cite: 2].
            </p>
            <div className="text-orange-400 italic text-sm font-medium border-l-2 border-orange-500 pl-4">
              "There Is No Substitute for Hard Work."
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 lg:col-span-2">
            <h3 className="font-bold text-lg mb-6 text-white tracking-wide">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-sm text-white/70 hover:text-orange-400 transition-colors">Home</Link></li>
              <li><a href="/#why-us" className="text-sm text-white/70 hover:text-orange-400 transition-colors">Why Choose Us</a></li>
              <li><a href="/#results" className="text-sm text-white/70 hover:text-orange-400 transition-colors">Proven Results</a></li>
              <li><a href="/#contact" className="text-sm text-white/70 hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-5 lg:col-span-4 lg:col-start-9">
            <h3 className="font-bold text-lg mb-6 text-white tracking-wide">Get in Touch</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <span className="text-sm text-white/70 leading-relaxed">
                  Utsav House, Maninagar, Ahmedabad, Gujarat 380008
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-400 shrink-0" />
                <a href="tel:+919825249281" className="text-sm text-white/70 hover:text-orange-400 transition-colors font-bold">
                  +91 98252 49281
                </a>
              </li>
              <li>
                <button onClick={openWhatsApp} className="flex items-center gap-3 group mt-2 bg-white/5 p-3 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-4 h-4 text-white fill-current" />
                  </div>
                  <span className="text-sm text-white/90 font-bold group-hover:text-orange-400 transition-colors">
                    Admissions Open: Chat Now
                  </span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-xs text-white/50 leading-relaxed max-w-2xl">
            Best Commerce Coaching Classes in Maninagar, Ahmedabad for Class 11 & 12 GSEB & CBSE Students[cite: 1].
            <br />
            © {new Date().getFullYear()} Dattu Sir's Academy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-xs text-white/50 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-xs text-white/50 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;