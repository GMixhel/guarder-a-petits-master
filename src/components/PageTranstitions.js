import {motion } from "framer-motion";

const PageTranstitions = ({children}) => {
  return (
    <motion.div
      className="page"
      initial={{
      
        scale: 0.9,
        opacity: 0,
      }}
      animate={{
        y: 0,
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 1,
        opacity: 0,
      }}
    //   transition={{
    //     easings: "0.87, 0, 0.13, 1",
    //     duration: 0.2,
    //   }}
    >
      {children}
    </motion.div>
  );
};

export default PageTranstitions;
