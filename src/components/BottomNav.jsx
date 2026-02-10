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
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden pb-safe">
      {/* Fondo con blur potente */}
      <nav className="bg-[#0e0f12]/90 backdrop-blur-lg border-t border-white/10 px-6 py-4 pb-6">
        <ul className="flex justify-between items-center">
          {navItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.href}
                className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors active:scale-90 duration-200"
              >
                {/* Icono */}
                <div className={`${item.label === 'Life' ? 'text-pink-400' : ''}`}>
                    {item.icon}
                </div>
                {/* Etiqueta pequeña */}
                <span className="text-[10px] font-medium tracking-wide">
                    {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}