import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useWhatsApp } from '@/hooks/useWhatsApp.js';

function StickyWhatsApp() {
  const { openWhatsApp } = useWhatsApp();

  return (
    <div className="fixed bottom-[84px] md:bottom-6 right-4 md:right-6 z-40 flex flex-col items-end gap-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={openWhatsApp}
              className="relative group flex items-center justify-center w-[60px] h-[60px] md:w-16 md:h-16 rounded-full shadow-brand-lg bg-accent hover:bg-[#E06612] text-white transition-transform duration-300 hover:scale-105 active:scale-95"
              aria-label="Contact us on WhatsApp"
            >
              <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75 duration-1000"></div>
              <MessageCircle className="w-8 h-8 relative z-10 fill-current" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="left" className="bg-primary text-primary-foreground font-medium px-3 py-2 mr-2">
            <p>Chat with us on WhatsApp</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default StickyWhatsApp;