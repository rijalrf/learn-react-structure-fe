import type { InputHTMLAttributes } from "react";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
}

export const InputText = ({ containerClassName = "", ...props }: InputTextProps) => (
  <div className={`flex items-center w-full bg-white border border-slate-200 transition-all focus-within:border-slate-400 ${props.disabled ? "bg-slate-50 opacity-60" : ""} ${containerClassName}`}>
    <input
      {...props}
      className="w-full p-[15px] outline-none bg-transparent text-[13px] font-medium placeholder-slate-300 text-slate-700 disabled:cursor-not-allowed"
    />
  </div>
);
