import { motion } from "framer-motion";
import profile from "../../assets/images/Profile.png";

const HeroImage = () => {
  return (
    <div className="flex justify-center lg:justify-end">
      <motion.img
        src={profile}
        alt="Md Bilal Ur Rahman - MERN Stack Developer"
        draggable={false}
        decoding="async"
        className="select-none h-80 w-80 rounded-full border-4 border-cyan-400/90 object-cover shadow-[0_0_45px_rgba(34,211,238,0.25)] transition-transform duration-300 md:h-[360px] md:w-[360px] lg:h-[430px] lg:w-[430px]"
        whileHover={{
          scale: 1.03,
        }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
          scale: {
            duration: 0.3,
          },
        }}
      />
    </div>
  );
};

export default HeroImage;