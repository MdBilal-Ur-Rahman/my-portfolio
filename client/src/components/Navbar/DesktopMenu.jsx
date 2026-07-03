const links = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "About", href: "#about" },
  { id: 3, name: "Skills", href: "#skills" },
  { id: 4, name: "Projects", href: "#projects" },
  { id: 5, name: "Contact", href: "#contact" },
];

const DesktopMenu = ({ activeSection }) => {
  return (
    <nav aria-label="Primary Navigation">
      <ul className="hidden items-center gap-8 lg:gap-10 md:flex">
        {links.map((link) => {
          const isActive = activeSection === link.href.substring(1);

          return (
            <li key={link.id}>
              <a
                href={link.href}
                className={`group relative text-[15px] font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-cyan-400"
                    : "text-slate-200 hover:text-cyan-400"
                }`}
              >
                {link.name}

                <span
                  className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-cyan-400 transition-all duration-300 ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default DesktopMenu;