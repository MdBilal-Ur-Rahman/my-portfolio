const links = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "About", href: "#about" },
  { id: 3, name: "Skills", href: "#skills" },
  { id: 4, name: "Projects", href: "#projects" },
  { id: 5, name: "Contact", href: "#contact" },
];

const MobileMenu = ({ closeMenu, activeSection }) => {
  return (
    <div className="border-t border-slate-800 bg-slate-950 md:hidden">
      <nav>
        <ul className="flex flex-col py-3">
          {links.map((link) => {
            const isActive = activeSection === link.href.substring(1);

            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className={`block border-l-4 px-6 py-4 text-base font-medium transition-all duration-300 ${
                    isActive
                      ? "border-cyan-400 bg-slate-800 text-cyan-400"
                      : "border-transparent text-white hover:border-cyan-400 hover:bg-slate-800 hover:text-cyan-400"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;