import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    class: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.mobile || !formData.class) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.mobile)) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid 10-digit mobile number.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    const submission = {
      ...formData,
      timestamp: new Date().toISOString()
    };

    const existingData = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    existingData.push(submission);
    localStorage.setItem('contactSubmissions', JSON.stringify(existingData));

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent",
        description: "We'll get back to you soon."
      });
      setFormData({ name: '', mobile: '', class: '' });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium">
          Full Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="text-gray-900 placeholder:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="mobile" className="text-sm font-medium">
          Mobile Number <span className="text-destructive">*</span>
        </Label>
        <Input
          id="mobile"
          type="tel"
          placeholder="10-digit mobile number"
          value={formData.mobile}
          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
          required
          maxLength={10}
          className="text-gray-900 placeholder:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="class" className="text-sm font-medium">
          Class <span className="text-destructive">*</span>
        </Label>
        <Select value={formData.class} onValueChange={(value) => setFormData({ ...formData, class: value })}>
          <SelectTrigger id="class" className="text-gray-900">
            <SelectValue placeholder="Select your class" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="11">Class 11 Commerce</SelectItem>
            <SelectItem value="12">Class 12 Commerce</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        type="submit"
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-all duration-200 active:scale-[0.98]"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}

export default ContactForm;