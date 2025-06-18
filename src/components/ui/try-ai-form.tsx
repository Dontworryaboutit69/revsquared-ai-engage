
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Loader2 } from 'lucide-react';

interface TryAIFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TryAIForm({ open, onOpenChange }: TryAIFormProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Demo Call Scheduled!",
      description: "Our AI will call you within the next 5 minutes to demonstrate our capabilities."
    });

    setIsLoading(false);
    onOpenChange(false);
    setFormData({ name: '', phone: '', email: '', company: '' });
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#20215A] border-[#00E5D6]/30 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#00E5D6] flex items-center gap-2" style={{
            fontFamily: 'Audiowide, sans-serif'
          }}>
            <Phone className="w-6 h-6" />
            Try Our AI Agent
          </DialogTitle>
          <DialogDescription className="text-[#D3D4FF]" style={{
            fontFamily: 'Manrope, sans-serif'
          }}>
            Enter your details and our AI will call you within 5 minutes to demonstrate its capabilities.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-[#00E5D6] font-semibold">
                Full Name *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={e => updateFormData('name', e.target.value)}
                className="mt-1 bg-[#0D0D0D]/50 border-[#E536C1]/30 text-white placeholder-[#D3D4FF]/70"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <Label htmlFor="company" className="text-[#00E5D6] font-semibold">
                Company
              </Label>
              <Input
                id="company"
                value={formData.company}
                onChange={e => updateFormData('company', e.target.value)}
                className="mt-1 bg-[#0D0D0D]/50 border-[#E536C1]/30 text-white placeholder-[#D3D4FF]/70"
                placeholder="ABC Corp"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="phone" className="text-[#00E5D6] font-semibold">
              Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={e => updateFormData('phone', e.target.value)}
              className="mt-1 bg-[#0D0D0D]/50 border-[#E536C1]/30 text-white placeholder-[#D3D4FF]/70"
              placeholder="(555) 123-4567"
              required
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-[#00E5D6] font-semibold">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={e => updateFormData('email', e.target.value)}
              className="mt-1 bg-[#0D0D0D]/50 border-[#E536C1]/30 text-white placeholder-[#D3D4FF]/70"
              placeholder="john@company.com"
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1 border-[#E536C1] text-[#E536C1] hover:bg-[#E536C1] hover:text-[#0D0D0D]"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-[#00E5D6] text-[#0D0D0D] hover:bg-[#00E5D6]/90 font-bold"
              style={{
                fontFamily: 'Audiowide, sans-serif'
              }}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Scheduling...
                </>
              ) : (
                'Get AI Demo Call'
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
