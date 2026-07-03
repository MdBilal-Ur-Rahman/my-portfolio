import { motion } from "framer-motion";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-slate-950 pt-24 lg:pt-0"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 xl:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroContent />
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="order-first flex justify-center lg:order-last lg:justify-end"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroImage />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;