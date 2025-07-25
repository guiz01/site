"use client";

import React from "react";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface KanbanActionToastProps {
  isOpen: boolean;
  message: string;
}

const KanbanActionToast = ({ isOpen, message }: KanbanActionToastProps) => {
  return (
    <div
      className={cn(
        "fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-md p-4 rounded-lg shadow-2xl transition-all duration-300 ease-in-out",
        "bg-gradient-to-br from-hero-gradient-start-2 to-hero-gradient-end-2 text-white border-none",
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
    >
      <div className="flex items-center gap-4">
        <div className="p-2 bg-white/20 rounded-full flex-shrink-0">
          <Zap className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-base font-bold">Automação Ativada!</h3>
          <p className="text-sm opacity-90">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default KanbanActionToast;