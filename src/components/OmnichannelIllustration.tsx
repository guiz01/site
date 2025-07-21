"use client";

import React from 'react';
import { MessagesSquare, Instagram, MessageCircle, MessageSquare } from 'lucide-react';

const OmnichannelIllustration = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-white/10 rounded-full blur-3xl"></div>

      {/* Central Inbox */}
      <div className="relative z-10">
        <MessagesSquare className="w-40 h-40 md:w-56 md:h-56 text-white" strokeWidth={1} />
      </div>

      {/* Channel icons orbiting */}
      <div className="absolute top-[10%] left-[50%] transform -translate-x-1/2 animate-bounce" style={{ animationDuration: '4s' }}>
        <div className="p-3 bg-white/20 rounded-full">
          <Instagram className="w-8 h-8 md:w-10 md:h-10 text-white" />
        </div>
      </div>
      <div className="absolute bottom-[10%] left-[50%] transform -translate-x-1/2 animate-bounce" style={{ animationDuration: '4s', animationDelay: '2s' }}>
        <div className="p-3 bg-white/20 rounded-full">
          <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />
        </div>
      </div>
      <div className="absolute left-[10%] top-[50%] transform -translate-y-1/2 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
        <div className="p-3 bg-white/20 rounded-full">
          {/* Using MessageSquare again for WhatsApp */}
          <MessageSquare className="w-8 h-8 md:w-10 md:h-10 text-white" />
        </div>
      </div>
       <div className="absolute right-[10%] top-[50%] transform -translate-y-1/2 animate-bounce" style={{ animationDuration: '4s', animationDelay: '3s' }}>
        <div className="p-3 bg-white/20 rounded-full">
          {/* Another channel, maybe email or other */}
           <MessagesSquare className="w-8 h-8 md:w-10 md:h-10 text-white" />
        </div>
      </div>
    </div>
  );
};

export default OmnichannelIllustration;