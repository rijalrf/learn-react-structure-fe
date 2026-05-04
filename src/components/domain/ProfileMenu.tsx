import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";

interface ProfileMenuProps {
  name: string;
  initials: string;
}

export const ProfileMenu = ({ name, initials }: ProfileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 p-1 rounded-full hover:bg-slate-50 transition-all cursor-pointer focus:outline-none"
      >
        <div className="w-9 h-9 bg-[#E30613] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-sm">
          {initials}
        </div>
        <svg
          className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
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
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 z-50 py-2 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-2 border-b border-slate-100 mb-1">
            <p className="text-[12px] text-slate-400">Signed in as</p>
            <p className="text-[13px] font-bold text-slate-800 truncate">
              {name}
            </p>
          </div>

          <button
            onClick={() => {
              console.log("Navigate to Account");
              setIsOpen(false);
            }}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-[13px] font-medium text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <svg
              className="w-4 h-4 opacity-70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Account Settings
          </button>

          <button
            onClick={() => {
              authService.logout();
              setIsOpen(false);
              navigate("/login");
            }}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-[13px] font-medium text-red-500 hover:bg-red-50 transition-colors"
          >
            <svg
              className="w-4 h-4 opacity-70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
