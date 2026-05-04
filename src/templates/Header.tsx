import { ProfileMenu } from "../components/domain/ProfileMenu";

interface HeaderProps {
  onToggleSidebar: () => void;
}

export const Header = ({ onToggleSidebar }: HeaderProps) => (
  <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-40">
    <div className="flex items-center gap-6">
      <button 
        onClick={onToggleSidebar}
        className="p-2 border border-gray-200 rounded-none text-slate-500 hover:bg-gray-50 focus:outline-none"
      >
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </button>
      <img src="/src/assets/logo-perkasa.png" alt="Perkasa" className="h-7" />
    </div>
    <div className="flex items-center gap-5">
      <ProfileMenu name="Admin Perkasa" initials="AP" />
    </div>
  </header>
);
