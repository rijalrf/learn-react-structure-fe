interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string;
}

export const ButtonIcon = ({ icon, label, ...props }: ButtonIconProps) => (
  <button 
    {...props}
    className="flex items-center gap-2.5 bg-white border border-gray-200 p-[15px]  hover:bg-gray-50 hover:border-gray-300 transition-all flex-shrink-0 whitespace-nowrap cursor-pointer"
  >
    <span className="text-gray-500">{icon}</span>
    {label}
  </button>
);