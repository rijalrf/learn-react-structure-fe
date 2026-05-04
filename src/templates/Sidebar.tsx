import { useNavigate, useLocation } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
}

export const Sidebar = ({ isOpen }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      label: "Work Order (SPK)",
      path: "/",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      label: "Audit Trail",
      path: "/audit-trail",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <aside 
      className={`bg-white border-r border-gray-200 transition-all duration-300 overflow-hidden flex-shrink-0 ${
        isOpen ? "w-64" : "w-0 lg:w-20"
      }`}
    >
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 p-3 transition-colors focus:outline-none ${
                isActive 
                  ? "bg-[#FFF1F1] text-[#E30613] font-bold" 
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-700 font-medium"
              }`}
            >
              <div className={`flex-shrink-0 ${isActive ? "text-[#E30613]" : "text-slate-400"}`}>
                {item.icon}
              </div>
              {isOpen && (
                <span className="text-sm whitespace-nowrap overflow-hidden transition-opacity duration-300">
                  {item.label}
                </span>
              )}
            </button>
          );
        })}
        
        {/* Submenu example for Work Order if it's expanded */}
        {isOpen && location.pathname === "/" && (
          <ul className="pl-11 space-y-3 pt-2">
            <li className="text-[13px] text-slate-400 hover:text-[#E30613] cursor-pointer transition-colors flex items-center gap-2">
              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
              Ongoing
            </li>
            <li className="text-[13px] text-slate-400 hover:text-[#E30613] cursor-pointer transition-colors flex items-center gap-2">
              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
              Ready To Process
            </li>
          </ul>
        )}
      </nav>
    </aside>
  );
};
