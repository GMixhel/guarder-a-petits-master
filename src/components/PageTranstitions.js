import {motion } from "framer-motion";

const PageTranstitions = ({children}) => {
  return (
    <motion.div
      className="page"
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0,
          }}
          transition={{
              ease: 'easeInOut',
              duration: 0.4,
          }}
    >
      {children}
    </motion.div>
  )
};

export default PageTranstitions;
