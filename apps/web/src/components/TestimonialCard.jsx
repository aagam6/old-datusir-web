import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

function TestimonialCard({ quote, name, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <Card className="h-full flex flex-col bg-secondary border-none shadow-brand hover:shadow-brand-lg transition-all duration-300">
        <CardContent className="pt-6 flex-1 flex flex-col">
          <Quote className="w-8 h-8 text-accent mb-4" />
          <blockquote className="text-base leading-relaxed flex-1 mb-4">
            "{quote}"
          </blockquote>
          <div className="mt-auto pt-4 border-t border-border">
            <p className="font-semibold text-primary">{name}</p>
            <p className="text-sm text-muted-foreground">{className}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default TestimonialCard;