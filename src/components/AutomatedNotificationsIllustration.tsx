"use client";

import React from 'react';
import { Smartphone, Bell, MessageSquare, Zap } from 'lucide-react';

const AutomatedNotificationsIllustration = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-white/10 rounded-full blur-3xl"></div>

      {/* Central Phone */}
      <div className="relative z-10">
        <Smartphone className="w-48 h-48 md:w-72 md:h-72 text-white" strokeWidth={0.5} />
        <div className="absolute inset-0 flex items-center justify-center">
          <Zap className="w-16 h-16 md:w-24 md:h-24 text-white opacity-75 animate-pulse" />
        </div>
      </div>

      {/* Floating icons */}
      <div className="absolute top-[15%] left-[15%] animate-pulse" style={{ animationDelay: '0s' }}>
        <Bell className="w-10 h-10 md:w-12 md:h-12 text-white/80" />
      </div>
      <div className="absolute top-[25%] right-[10%] animate-pulse" style={{ animationDelay: '0.5s' }}>
        <MessageSquare className="w-10 h-10 md:w-12 md:h-12 text-white/80" />
      </div>
      <div className="absolute bottom-[20%] left-[25%] animate-pulse" style={{ animationDelay: '1s' }}>
        <MessageSquare className="w-10 h-10 md:w-12 md:h-12 text-white/80" />
      </div>
      <div className="absolute bottom-[30%] right-[20%] animate-pulse" style={{ animationDelay: '1.5s' }}>
        <Bell className="w-10 h-10 md:w-12 md:h-12 text-white/80" />
      </div>
    </div>
  );
};

export default AutomatedNotificationsIllustration;