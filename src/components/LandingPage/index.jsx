import { motion, AnimatePresence } from "framer-motion";

const title = "Fang.";
const subtext =
  "Hi, I'm Daniel. A Software Engineer and a learning enthusiast.";

const LandingPage = () => {
  const dropIn = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 2,
        type: "spring",
        damping: 50,
        stiffness: 500,
      },
    },
  };

  return (
    <div className='landing-page section'>
      {/* <AnimatePresence initial={true}> */}
      <motion.div
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <div className='title-text'>{title}</div>
        <div className='title-subtext'>{subtext}</div>
      </motion.div>
      {/* </AnimatePresence> */}
    </div>
  );
};

export default LandingPage;
