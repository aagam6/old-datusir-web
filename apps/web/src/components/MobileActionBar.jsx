import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { useWhatsApp } from '@/hooks/useWhatsApp.js';

function MobileActionBar() {
  const { openWhatsApp } = useWhatsApp();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex h-[65px] pb-safe shadow-[0_-8px_30px_rgba(0,0,0,0.15)] border-t border-white/10">
      
      {/* Call Button - Dark Blue Theme */}
      <a 
        href="tel:+919825249281"
        className="flex-1 bg-[#0b2545] text-white font-bold flex items-center justify-center gap-2 active:scale-95 transition-all border-r border-white/5"
      >
        <div className="bg-white/10 p-2 rounded-lg">
          <Phone className="w-5 h-5 fill-current text-white" />
        </div>
        <span className="text-base uppercase tracking-tight">Call Now</span>
      </a>

      {/* WhatsApp Button - Academy Orange Theme */}
      <button 
        onClick={openWhatsApp}
        className="flex-1 bg-orange-500 text-white font-bold flex items-center justify-center gap-2 active:scale-95 transition-all"
      >
        <div className="bg-white/20 p-2 rounded-lg">
          <MessageCircle className="w-5 h-5 fill-current text-white" />
        </div>
        <span className="text-base uppercase tracking-tight">WhatsApp</span>[cite: 1]
      </button>

    </div>
  );
}

export default MobileActionBar;