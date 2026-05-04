import React, { type InputHTMLAttributes } from "react";

interface InputIconProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
  containerClassName?: string;
}

export const InputIcon = ({ icon, containerClassName = "", ...props }: InputIconProps) => (
  <div className={`flex items-center w-full bg-white border border-slate-200 transition-all focus-within:border-slate-400 ${containerClassName}`}>
    <div className="pl-[15px] text-slate-400 flex-shrink-0 flex items-center justify-center">
      {icon}
    </div>
    <input
      {...props}
      className="w-full p-[15px] pl-[10px] outline-none bg-transparent text-[13px] font-medium placeholder-slate-300 text-slate-700"
    />
  </div>
);
