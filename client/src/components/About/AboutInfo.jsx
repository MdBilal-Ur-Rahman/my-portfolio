import personal from "../../data/personal";

const AboutInfo = () => {
  return (
    <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-800 p-8 shadow-xl">
      <div className="mb-5 flex items-center justify-between border-b border-slate-700 pb-3">
        <span className="font-medium text-slate-400">Name</span>
        <span className="font-semibold text-white">
          {personal.name}
        </span>
      </div>

      <div className="mb-5 flex items-center justify-between border-b border-slate-700 pb-3">
        <span className="font-medium text-slate-400">Email</span>
        <span className="text-white">
          {personal.email}
        </span>
      </div>

      <div className="mb-5 flex items-center justify-between border-b border-slate-700 pb-3">
        <span className="font-medium text-slate-400">Degree</span>
        <span className="text-white">
          {personal.degree}
        </span>
      </div>

      <div className="mb-5 flex items-center justify-between border-b border-slate-700 pb-3">
        <span className="font-medium text-slate-400">Experience</span>
        <span className="text-white">
          {personal.experience}
        </span>
      </div>

      <div className="mb-5 flex items-center justify-between border-b border-slate-700 pb-3">
        <span className="font-medium text-slate-400">Location</span>
        <span className="text-white">
          {personal.location}
        </span>
      </div>

      <div className="mb-5 flex items-center justify-between border-b border-slate-700 pb-3">
        <span className="font-medium text-slate-400">Phone</span>
        <span className="text-white">
          {personal.phone}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <span className="font-medium text-slate-400">Status</span>

        <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-semibold text-green-400">
          {personal.status}
        </span>
      </div>
    </div>
  );
};

export default AboutInfo;