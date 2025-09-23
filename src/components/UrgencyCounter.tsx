"use client";

import React, { useState, useEffect } from "react";
import { Clock, Zap } from "lucide-react";

interface UrgencyCounterProps {
  accountsRemaining: number;
  totalAccounts: number;
  endTime: Date;
}

const UrgencyCounter: React.FC<UrgencyCounterProps> = ({
  accountsRemaining,
  totalAccounts,
  endTime,
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = endTime.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  const percentage = ((totalAccounts - accountsRemaining) / totalAccounts) * 100;

  return (
    <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-lg p-4 text-white text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Zap className="h-5 w-5 animate-pulse" />
        <span className="font-bold text-lg">
          Restam apenas {accountsRemaining} vagas!
        </span>
      </div>
      
      <div className="mb-3">
        <div className="flex justify-between text-sm mb-1">
          <span>Vagas preenchidas</span>
          <span>{Math.round(percentage)}%</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2">
          <div 
            className="bg-white h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
      
      <div className="flex items-center justify-center gap-1 text-sm">
        <Clock className="h-4 w-4" />
        <span>
          Oferecimento válido por {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </span>
      </div>
    </div>
  );
};

export default UrgencyCounter;