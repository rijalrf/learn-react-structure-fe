import React from "react";

interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  containerClassName?: string;
}

export const InputDropdown = ({ label, children, containerClassName = "", ...props }: DropdownProps) => (
  <div className={`flex items-center w-full bg-white border border-slate-200 transition-all focus-within:border-slate-400 ${containerClassName}`}>
    <select
      {...props}
      className="w-full p-[15px] outline-none bg-transparent text-[13px] font-medium text-slate-700 cursor-pointer appearance-none"
    >
      <option value="" disabled selected>
        {label}
      </option>
      {children}
    </select>
    <div className="pr-[15px] pointer-events-none text-slate-400">
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  </div>
);
