import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWhatsApp } from '@/hooks/useWhatsApp.js';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openWhatsApp } = useWhatsApp();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section if on homepage, else just link behavior
  const handleNavClick = (e, targetId) => {
    if (location.pathname !== '/') return; // Let default router behavior handle if not on home
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Home', href: '/', targetId: 'home' },
    { name: 'Why Us', href: '/#why-us', targetId: 'why-us' },
    { name: 'Results', href: '/#results', targetId: 'results' },
    { name: 'Faculty', href: '/#faculty', targetId: 'faculty' },
    { name: 'Contact', href: '/#contact', targetId: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary shadow-lg py-3' : 'bg-primary py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex flex-col">
            <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-none">
              Dattu Sir's
            </span>
            <span className="text-sm md:text-base font-semibold text-accent tracking-widest uppercase">
              Academy
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.targetId)}
                className="text-sm font-semibold text-white/90 hover:text-accent transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <button
              onClick={openWhatsApp}
              className="flex items-center gap-2 text-sm font-semibold text-accent hover:text-white transition-colors duration-200 group"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              WhatsApp
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-accent transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-primary border-t border-white/10 shadow-xl"
          >
            <nav className="flex flex-col px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.targetId)}
                  className="py-4 text-base font-semibold text-white/90 hover:text-accent border-b border-white/5 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;