"use client";

import React from 'react';
import { Smartphone, Send, User } from 'lucide-react';

const BulkMessageIllustration = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-white/10 rounded-full blur-3xl"></div>

      {/* Central Phone */}
      <div className="relative z-10">
        <Smartphone className="w-48 h-48 md:w-72 md:h-72 text-white" strokeWidth={0.5} />
        <div className="absolute inset-0 flex items-center justify-center">
          <Send className="w-16 h-16 md:w-24 md:h-24 text-white opacity-75 animate-pulse" />
        </div>
      </div>

      {/* User icons with animations */}
      <div className="absolute top-[10%] left-[20%] animate-bounce" style={{ animationDelay: '0.1s' }}>
        <User className="w-10 h-10 md:w-12 md:h-12 text-white/80" />
      </div>
      <div className="absolute top-[20%] right-[15%] animate-bounce" style={{ animationDelay: '0.3s' }}>
        <User className="w-10 h-10 md:w-12 md:h-12 text-white/80" />
      </div>
      <div className="absolute bottom-[15%] left-[25%] animate-bounce" style={{ animationDelay: '0.5s' }}>
        <User className="w-10 h-10 md:w-12 md:h-12 text-white/80" />
      </div>
      <div className="absolute bottom-[25%] right-[10%] animate-bounce" style={{ animationDelay: '0.7s' }}>
        <User className="w-10 h-10 md:w-12 md:h-12 text-white/80" />
      </div>
       <div className="absolute top-[50%] left-[5%] animate-bounce" style={{ animationDelay: '0.2s' }}>
        <User className="w-10 h-10 md:w-12 md:h-12 text-white/80" />
      </div>
       <div className="absolute top-[55%] right-[5%] animate-bounce" style={{ animationDelay: '0.4s' }}>
        <User className="w-10 h-10 md:w-12 md:h-12 text-white/80" />
      </div>
    </div>
  );
};

export default BulkMessageIllustration;