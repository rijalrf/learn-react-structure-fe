import React, { useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-slate-200 mb-4 bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 p-4 text-left hover:bg-slate-50 transition-colors focus:outline-none"
      >
        <span className="text-[18px] font-medium text-slate-500 w-4 flex-shrink-0">
          {isOpen ? "−" : "+"}
        </span>
        <span className="text-[14px] font-semibold text-slate-700 uppercase tracking-wider">
          {title}
        </span>
      </button>
      {isOpen && (
        <div className="p-4 border-t border-slate-100 bg-white">
          {children}
        </div>
      )}
    </div>
  );
};

