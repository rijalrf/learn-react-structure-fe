// src/templates/MainContentLayout.tsx
import { type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface MainContentLayoutProps {
  breadcrumb: ReactNode;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
}

export const MainContentLayout = ({
  breadcrumb,
  description,
  action,
  children,
}: MainContentLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full min-h-full font-sans">
      {/* 1. Area Header/Breadcrumb dengan Background Gray Halus */}
      <div className="bg-[#F9FAFB] border-b border-gray-200 p-5 flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="p-1.5 hover:bg-gray-200 rounded-full transition-colors text-gray-500 hover:text-gray-800 cursor-pointer"
          title="Go Back"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <h1 className="text-[18px] font-bold text-[#E30613] uppercase tracking-tight">
          {breadcrumb}
        </h1>
      </div>

      {description && (
        <div className="border-b border-gray-200 p-5">
          <p className="text-gray-500 text-[13px] font-normal leading-relaxed max-w-5xl">
            {description}
          </p>
        </div>
      )}

      {/* 2. Area Action/Filter - Menempel di bawah Header */}
      {action && (
        //buat element rata kiri dan kanan
        <div className="border-b border-gray-200 p-2 flex items-center gap-3 justify-between">
          {action}
        </div>
      )}

      {/* 3. Area Konten Utama (Tabel) */}
      <div className="flex-1">
        <div className="overflow-x-auto">{children}</div>
      </div>
    </div>
  );
};
