import { motion } from 'framer-motion';
import Button from '../common/Button';

const Hero = () => {
  return (
    <div className="relative h-[80vh] min-h-[500px] w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2 -z-10"
        poster="/assets/images/cookies/chocolate-chip.png"
      >
        <source src="https://videos.pexels.com/video-files/4690382/4690382-hd_1920_1080_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl drop-shadow-lg"
        >
          Freshly Baked Happiness
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-lg md:text-2xl mt-4 max-w-2xl"
        >
          Handcrafted cookies made with love, quality ingredients, and a dash of magic.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8"
        >
          <Button to="/cookies" variant="secondary" className="text-lg">
            Explore Our Cookies
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
