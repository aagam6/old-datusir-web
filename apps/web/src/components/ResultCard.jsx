import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

function ResultCard({ name, accountsMarks, statsMarks, percentage, isTopPerformer, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <Card className={`h-full transition-all duration-300 hover:shadow-brand-lg ${
        isTopPerformer ? 'border-2 border-accent shadow-brand' : 'border'
      }`}>
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-lg font-semibold leading-tight">{name}</CardTitle>
            {isTopPerformer && (
              <Badge className="bg-accent text-accent-foreground shrink-0">
                <Trophy className="w-3 h-3 mr-1" />
                Top
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-secondary rounded-lg p-3">
              <p className="text-xs text-muted-foreground font-medium">Accounts</p>
              <p className="text-2xl font-bold text-primary mt-1">{accountsMarks}</p>
            </div>
            <div className="bg-secondary rounded-lg p-3">
              <p className="text-xs text-muted-foreground font-medium">Statistics</p>
              <p className="text-2xl font-bold text-primary mt-1">{statsMarks}</p>
            </div>
          </div>
          <div className="bg-accent/10 rounded-lg p-3 border border-accent/20">
            <p className="text-xs text-muted-foreground font-medium">Overall Percentage</p>
            <p className="text-3xl font-bold text-accent mt-1">{percentage}%</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ResultCard;