// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 1,
    y: 0
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 1,
    y: 0
  }
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0
};

function PageTransition({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
