import {motion } from "framer-motion";

const PageTranstitions = ({children}) => {
  return (
    <motion.div
      className="page"
      initial={{
        scale: 0.9,
        opacity: 1,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0.9,
        opacity: 1,
      }}
      transition={{
        easings: "0.83, 0, 0.17, 1",
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTranstitions;
