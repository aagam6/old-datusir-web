import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

function CourseCard({ title, subjects, features, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <Card className="h-full flex flex-col shadow-brand hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1 border-2">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary">{title}</CardTitle>
          <CardDescription className="text-base mt-2">
            <div className="flex flex-wrap gap-2 mt-3">
              {subjects.map((subject, index) => (
                <Badge key={index} variant="secondary" className="text-sm font-medium">
                  {subject}
                </Badge>
              ))}
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="mt-auto">
          <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-all duration-200 active:scale-[0.98]">
            Enroll Now
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default CourseCard;