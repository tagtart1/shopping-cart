import { React, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/FocusBackground.css";

const FocusBackground = (props) => {
  return (
    <AnimatePresence>
      {props.isVisible && (
        <motion.div
          key="dark"
          initial={{ opacity: 0.2, scaleX: 0 }}
          animate={{ opacity: 0.7, scaleX: 1 }}
          transition={{ duration: 0.75 }}
          exit={{ opacity: 0.2, scaleX: 0 }}
          className="background-dark"
          onClick={props.toggleDisplayCart}
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default FocusBackground;
