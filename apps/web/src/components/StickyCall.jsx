import React from 'react';
import { Phone } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

function StickyCall() {
  return (
    <div className="fixed bottom-[154px] md:bottom-[96px] right-4 md:right-6 z-40 flex flex-col items-end">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center w-[50px] h-[50px] md:w-14 md:h-14 rounded-full shadow-brand-lg bg-primary hover:bg-primary/90 text-white transition-transform duration-300 hover:scale-105 active:scale-95"
              aria-label="Call us now"
            >
              <Phone className="w-6 h-6 fill-current" />
            </a>
          </TooltipTrigger>
          <TooltipContent side="left" className="bg-accent text-accent-foreground font-medium px-3 py-2 mr-2">
            <p>Call us now</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default StickyCall;