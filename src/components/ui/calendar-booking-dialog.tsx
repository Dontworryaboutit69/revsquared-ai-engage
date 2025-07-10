import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar } from 'lucide-react';

interface CalendarBookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CalendarBookingDialog({ open, onOpenChange }: CalendarBookingDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#20215A] border-[#00E5D6]/30 text-white max-w-4xl w-[95vw] h-[90vh] max-h-[800px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#00E5D6] flex items-center gap-2" style={{
            fontFamily: 'Audiowide, sans-serif'
          }}>
            <Calendar className="w-6 h-6" />
            Book Your Free Demo
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 min-h-0">
          <iframe 
            src="https://api.leadconnectorhq.com/widget/booking/hmsTZfGshsOlQ4X3LNJn" 
            className="w-full h-full border-none rounded-lg"
            scrolling="no" 
            id="calendar-booking-iframe"
            title="Calendar Booking"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}