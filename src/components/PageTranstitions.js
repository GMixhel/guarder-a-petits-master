import {motion } from "framer-motion";

const PageTranstitions = ({children}) => {
  return (
    <motion.div
      className="page"
      initial={{
        y: -400,
        opacity: 0,
      }}
      animate={{
       y: 0,
        opacity: 1,
      }}
      exit={{
        y: -400,
        opacity: 0,
      }}
      transition={{
          easings: "0.83, 0, 0.17, 1",
          duration: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTranstitions;
