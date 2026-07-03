const SkillCard = ({ skill }) => {
  if (!skill) return null;

  const Icon = skill.icon;

  return (
    <div className="group rounded-2xl border border-slate-700 bg-slate-800 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20">
      {Icon ? (
        <Icon className="mx-auto mb-4 text-5xl text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
      ) : (
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-700 text-slate-400">
          ?
        </div>
      )}

      <h3 className="text-lg font-semibold text-white">
        {skill.name}
      </h3>
    </div>
  );
};

export default SkillCard;