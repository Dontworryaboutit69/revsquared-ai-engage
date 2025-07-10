import React from 'react';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Calendar, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface CalendarBookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CalendarBookingDialog({ open, onOpenChange }: CalendarBookingDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#20215A] border-[#00E5D6]/30 text-white max-w-6xl w-[98vw] h-[98vh] max-h-none p-0 flex flex-col relative">
        {/* Custom Close Button */}
        <Button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-[#E536C1]/20 hover:bg-[#E536C1]/40 border border-[#E536C1]/50 hover:border-[#E536C1] transition-all duration-200 hover:scale-110 group p-0"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5 text-[#E536C1] group-hover:text-white transition-colors duration-200" />
          {/* Hover tooltip */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#0D0D0D] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Close
          </div>
        </Button>

        <div className="p-6 border-b border-[#00E5D6]/30 flex-shrink-0">
          <DialogTitle className="text-2xl font-bold text-[#00E5D6] flex items-center gap-2" style={{
            fontFamily: 'Audiowide, sans-serif'
          }}>
            <Calendar className="w-6 h-6" />
            Book Your Free Demo
          </DialogTitle>
        </div>

        <div className="flex-1 min-h-0 overflow-hidden">
          <iframe 
            src="https://api.leadconnectorhq.com/widget/booking/hmsTZfGshsOlQ4X3LNJn" 
            className="w-full h-full border-none"
            scrolling="yes" 
            id="calendar-booking-iframe"
            title="Calendar Booking"
            allow="camera; microphone; geolocation"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}