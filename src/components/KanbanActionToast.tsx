"use client";

import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Zap } from "lucide-react";

interface KanbanActionToastProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const KanbanActionToast = ({ isOpen, message, onClose }: KanbanActionToastProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-br from-hero-gradient-start-2 to-hero-gradient-end-2 text-white border-none shadow-2xl rounded-lg p-8 max-w-md text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="p-3 bg-white/20 rounded-full">
            <Zap className="h-12 w-12 text-white" />
          </div>
          <h3 className="text-2xl font-bold">Automação Ativada!</h3>
          <p className="text-lg opacity-90">{message}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default KanbanActionToast;