import type { InputHTMLAttributes } from "react";

interface InputDateProps extends InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
}

export const InputDate = ({ containerClassName = "", ...props }: InputDateProps) => (
  <div className={`flex items-center w-full bg-white border border-slate-200 transition-all focus-within:border-slate-400 ${containerClassName}`}>
    <input
      type="date"
      {...props}
      className="w-full p-[15px] outline-none bg-transparent text-[13px] font-medium placeholder-slate-300 text-slate-700 appearance-none"
    />
  </div>
);
