import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import ResultCard from './ResultCard.jsx';
import { motion } from 'framer-motion';

const studentsData = [
  // 2024-25 CBSE
  { name: 'Priya Sharma', accountsMarks: 98, statsMarks: 97, percentage: 97.2, year: '2024-25', board: 'CBSE', isTopPerformer: true },
  { name: 'Arjun Patel', accountsMarks: 96, statsMarks: 95, percentage: 95.4, year: '2024-25', board: 'CBSE', isTopPerformer: true },
  { name: 'Sneha Desai', accountsMarks: 94, statsMarks: 96, percentage: 94.8, year: '2024-25', board: 'CBSE', isTopPerformer: false },
  { name: 'Rohan Mehta', accountsMarks: 93, statsMarks: 92, percentage: 92.6, year: '2024-25', board: 'CBSE', isTopPerformer: false },
  { name: 'Kavya Shah', accountsMarks: 91, statsMarks: 94, percentage: 92.1, year: '2024-25', board: 'CBSE', isTopPerformer: false },
  
  // 2024-25 GSEB
  { name: 'Dhruv Modi', accountsMarks: 99, statsMarks: 98, percentage: 98.3, year: '2024-25', board: 'GSEB', isTopPerformer: true },
  { name: 'Ananya Joshi', accountsMarks: 97, statsMarks: 96, percentage: 96.7, year: '2024-25', board: 'GSEB', isTopPerformer: true },
  { name: 'Karan Trivedi', accountsMarks: 95, statsMarks: 94, percentage: 94.2, year: '2024-25', board: 'GSEB', isTopPerformer: false },
  { name: 'Riya Pandya', accountsMarks: 93, statsMarks: 95, percentage: 93.8, year: '2024-25', board: 'GSEB', isTopPerformer: false },
  
  // 2023-24 CBSE
  { name: 'Aditya Kumar', accountsMarks: 97, statsMarks: 96, percentage: 96.4, year: '2023-24', board: 'CBSE', isTopPerformer: true },
  { name: 'Ishita Singh', accountsMarks: 95, statsMarks: 97, percentage: 95.8, year: '2023-24', board: 'CBSE', isTopPerformer: true },
  { name: 'Vivek Reddy', accountsMarks: 94, statsMarks: 93, percentage: 93.2, year: '2023-24', board: 'CBSE', isTopPerformer: false },
  { name: 'Meera Nair', accountsMarks: 92, statsMarks: 94, percentage: 92.7, year: '2023-24', board: 'CBSE', isTopPerformer: false },
  { name: 'Siddharth Rao', accountsMarks: 91, statsMarks: 90, percentage: 90.3, year: '2023-24', board: 'CBSE', isTopPerformer: false },
  
  // 2023-24 GSEB
  { name: 'Diya Parikh', accountsMarks: 98, statsMarks: 97, percentage: 97.6, year: '2023-24', board: 'GSEB', isTopPerformer: true },
  { name: 'Jay Thakkar', accountsMarks: 96, statsMarks: 95, percentage: 95.3, year: '2023-24', board: 'GSEB', isTopPerformer: true },
  { name: 'Nisha Vora', accountsMarks: 94, statsMarks: 96, percentage: 94.7, year: '2023-24', board: 'GSEB', isTopPerformer: false },
  { name: 'Harsh Raval', accountsMarks: 92, statsMarks: 93, percentage: 92.4, year: '2023-24', board: 'GSEB', isTopPerformer: false },
  
  // 2022-23 GSEB
  { name: 'Tanvi Bhatt', accountsMarks: 97, statsMarks: 98, percentage: 97.1, year: '2022-23', board: 'GSEB', isTopPerformer: true },
  { name: 'Yash Amin', accountsMarks: 95, statsMarks: 94, percentage: 94.6, year: '2022-23', board: 'GSEB', isTopPerformer: false },
  { name: 'Pooja Dave', accountsMarks: 93, statsMarks: 95, percentage: 93.9, year: '2022-23', board: 'GSEB', isTopPerformer: false },
  { name: 'Nikhil Soni', accountsMarks: 92, statsMarks: 91, percentage: 91.2, year: '2022-23', board: 'GSEB', isTopPerformer: false },
  { name: 'Kriti Kapoor', accountsMarks: 90, statsMarks: 92, percentage: 90.8, year: '2022-23', board: 'GSEB', isTopPerformer: false },
  
  // 2021-22 GSEB
  { name: 'Rahul Jain', accountsMarks: 96, statsMarks: 97, percentage: 96.2, year: '2021-22', board: 'GSEB', isTopPerformer: true },
  { name: 'Simran Kaur', accountsMarks: 94, statsMarks: 95, percentage: 94.4, year: '2021-22', board: 'GSEB', isTopPerformer: false },
  { name: 'Aman Gupta', accountsMarks: 93, statsMarks: 92, percentage: 92.3, year: '2021-22', board: 'GSEB', isTopPerformer: false },
  { name: 'Neha Agarwal', accountsMarks: 91, statsMarks: 93, percentage: 91.7, year: '2021-22', board: 'GSEB', isTopPerformer: false },
];

function ResultsSection() {
  const [selectedYear, setSelectedYear] = useState('2024-25');

  const filteredStudents = studentsData.filter(student => student.year === selectedYear);

  return (
    <section id="results" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4" style={{ letterSpacing: '-0.02em' }}>
            Outstanding Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our students consistently achieve excellence in board examinations
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <div className="w-full max-w-xs space-y-2">
            <Label htmlFor="year-filter" className="text-sm font-medium">
              Select Academic Year
            </Label>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger id="year-filter" className="text-gray-900">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024-25">2024-25</SelectItem>
                <SelectItem value="2023-24">2023-24</SelectItem>
                <SelectItem value="2022-23">2022-23</SelectItem>
                <SelectItem value="2021-22">2021-22</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredStudents.map((student, index) => (
            <ResultCard
              key={index}
              name={student.name}
              accountsMarks={student.accountsMarks}
              statsMarks={student.statsMarks}
              percentage={student.percentage}
              isTopPerformer={student.isTopPerformer}
              delay={index * 0.05}
            />
          ))}
        </div>

        {filteredStudents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No results available for this year.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ResultsSection;