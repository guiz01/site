"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TimelineStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TimelineProps {
  steps: TimelineStep[];
}

const Timeline: React.FC<TimelineProps> = ({ steps }) => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute("data-index") || "-1");
          if (entry.isIntersecting) {
            if (index !== -1) {
              setActiveStepIndex(index);
            }
          }
        });
      },
      { threshold: 0.5 } // Ativa quando 50% do item está visível
    );

    itemRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [steps]);

  return (
    <div className="relative py-8">
      {/* Linha vertical principal */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 dark:bg-gray-700 h-full top-0"></div>

      {steps.map((step, index) => (
        <div
          key={index}
          ref={(el) => (itemRefs.current[index] = el)}
          data-index={index}
          className="relative mb-16 flex items-center w-full"
        >
          {/* Círculo na linha */}
          <div
            className={cn(
              "absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10 border-2 transition-all duration-500 ease-in-out",
              activeStepIndex === index
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600"
            )}
          >
            <span className="font-bold text-lg">{index + 1}</span>
          </div>

          {/* Conteúdo do passo */}
          <div
            className={cn(
              "flex w-full",
              index % 2 === 0 ? "justify-start md:justify-end" : "justify-start"
            )}
          >
            <div
              className={cn(
                "w-full md:w-[calc(50%-2.5rem)] p-6 rounded-lg transition-all duration-500 ease-in-out",
                index % 2 === 0 ? "md:mr-10 md:text-right" : "md:ml-10 md:text-left",
                activeStepIndex === index
                  ? "bg-primary/10 dark:bg-primary/20 border border-primary shadow-md"
                  : "bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600"
              )}
            >
              <div
                className={cn(
                  "mb-4",
                  index % 2 === 0 ? "md:justify-end" : "md:justify-start",
                  "flex justify-center"
                )}
              >
                {React.cloneElement(step.icon as React.ReactElement, {
                  className: cn(
                    "h-10 w-10",
                    activeStepIndex === index ? "text-primary" : "text-gray-500 dark:text-gray-400"
                  ),
                })}
              </div>
              <h3
                className={cn(
                  "text-2xl font-bold mb-2",
                  activeStepIndex === index ? "text-primary" : "text-gray-900 dark:text-white"
                )}
              >
                {step.title}
              </h3>
              <p
                className={cn(
                  "text-lg leading-relaxed",
                  activeStepIndex === index ? "text-gray-800 dark:text-gray-200" : "text-gray-700 dark:text-gray-300"
                )}
              >
                {step.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;