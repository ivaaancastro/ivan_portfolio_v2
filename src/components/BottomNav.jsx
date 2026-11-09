import { Home, User, Briefcase, Code2, Heart } from "lucide-react";

export default function BottomNav() {
  const navItems = [
    { icon: <Home size={20} />, label: "Inicio", href: "/#home" },
    { icon: <User size={20} />, label: "Mí", href: "/#about" },
    { icon: <Briefcase size={20} />, label: "Exp", href: "/#experience" },
    { icon: <Code2 size={20} />, label: "Proy", href: "/#projects" },
    { icon: <Heart size={20} />, label: "Life", href: "/personal" },
  ];

  return (
    <div className="pb-safe fixed bottom-0 left-0 z-50 w-full md:hidden">
      {/* Fondo con blur potente */}
      <nav className="border-t border-white/10 bg-[#0e0f12]/90 px-6 py-4 pb-6 backdrop-blur-lg">
        <ul className="flex items-center justify-between">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="flex flex-col items-center gap-1 text-gray-400 transition-colors duration-200 hover:text-primary active:scale-90"
              >
                {/* Icono */}
                <div className={`${item.label === "Life" ? "text-pink-400" : ""}`}>{item.icon}</div>
                {/* Etiqueta pequeña */}
                <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
