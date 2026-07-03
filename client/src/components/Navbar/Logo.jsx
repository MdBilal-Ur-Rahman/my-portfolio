import personal from "../../data/personal";

const Logo = () => {
  return (
    <a
      href="#home"
      aria-label="Go to Home"
      title={`${personal.name} Portfolio`}
      className="select-none text-3xl font-extrabold tracking-tight transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
    >
      <span className="text-cyan-400">{personal.logo}</span>
      <span className="text-white">.dev</span>
    </a>
  );
};

export default Logo;