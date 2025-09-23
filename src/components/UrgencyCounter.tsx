"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Zap, Users, AlertTriangle } from "lucide-react";

interface UrgencyCounterProps {
  accountsRemaining: number;
  totalAccounts: number;
  endTime: Date;
}

const UrgencyCounter: React.FC<UrgencyCounterProps> = ({ 
  accountsRemaining, 
  totalAccounts, 
  endTime 
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = endTime.getTime() - new Date().getTime();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Set initial time
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [endTime]);

  const percentageUsed = ((totalAccounts - accountsRemaining) / totalAccounts) * 100;
  const isLowStock = accountsRemaining <= 10;
  const isVeryLowStock = accountsRemaining <= 5;

  return (
    <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200 dark:from-red-950/20 dark:to-orange-950/20 dark:border-red-800">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <AlertTriangle className="h-6 w-6 text-red-500" />
            <h3 className="text-xl font-bold text-red-800 dark:text-red-300">
              OFERTA LIMITADA!
            </h3>
          </div>
          <p className="text-red-600 dark:text-red-400">
            Apenas {accountsRemaining} contas restantes de {totalAccounts} disponíveis
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-red-600 dark:text-red-400 mb-2">
            <span>Vendidas: {totalAccounts - accountsRemaining}</span>
            <span>{percentageUsed.toFixed(1)}% esgotado</span>
          </div>
          <div className="w-full bg-red-200 rounded-full h-3 dark:bg-red-800">
            <div 
              className={`h-3 rounded-full transition-all duration-1000 ease-out ${
                isVeryLowStock ? 'bg-red-600' : isLowStock ? 'bg-orange-500' : 'bg-red-500'
              }`}
              style={{ width: `${percentageUsed}%` }}
            ></div>
          </div>
        </div>

        {/* Countdown */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center">
            <div className="bg-red-100 dark:bg-red-900/30 rounded-lg p-3 mb-2">
              <div className="text-2xl font-bold text-red-800 dark:text-red-300">
                {timeLeft.days.toString().padStart(2, '0')}
              </div>
              <div className="text-xs text-red-600 dark:text-red-400">DIAS</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-red-100 dark:bg-red-900/30 rounded-lg p-3 mb-2">
              <div className="text-2xl font-bold text-red-800 dark:text-red-300">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <div className="text-xs text-red-600 dark:text-red-400">HORAS</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-red-100 dark:bg-red-900/30 rounded-lg p-3 mb-2">
              <div className="text-2xl font-bold text-red-800 dark:text-red-300">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <div className="text-xs text-red-600 dark:text-red-400">MIN</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-red-100 dark:bg-red-900/30 rounded-lg p-3 mb-2">
              <div className="text-2xl font-bold text-red-800 dark:text-red-300">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <div className="text-xs text-red-600 dark:text-red-400">SEG</div>
            </div>
          </div>
        </div>

        {/* Urgency messages */}
        <div className="text-center">
          {isVeryLowStock && (
            <Badge variant="destructive" className="mb-2 bg-red-600 hover:bg-red-700">
              ⚠️ ÚLTIMAS CONTAS DISPONÍVEIS!
            </Badge>
          )}
          {isLowStock && !isVeryLowStock && (
            <Badge variant="secondary" className="mb-2 bg-orange-500 text-white hover:bg-orange-600">
              ⚠️ CONTAS ACABANDO RÁPIDO!
            </Badge>
          )}
          <p className="text-sm text-red-600 dark:text-red-400">
            {isVeryLowStock 
              ? "Corra! Apenas poucas contas restantes antes que a promoção acabe!"
              : isLowStock
              ? "Acelere! As contas estão acabando rápido!"
              : "Garanta agora antes que acabe!"
            }
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default UrgencyCounter;