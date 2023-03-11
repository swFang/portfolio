import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Card = ({ left, leftBottom, right }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  const initialValues = { opacity: 0, y: 25 };

  return (
    <div className='tile-large' ref={ref}>
      <div className='card-side-container tile-side'>
        <motion.div
          ref={ref}
          initial={initialValues}
          animate={
            isInView
              ? { opacity: 1, transform: "translateY(0px)" }
              : { opacity: 0 }
          }
          transition={{ duration: 0.4 }}
          className='tile-left-top tile-side'
        >
          {left ?? <></>}
        </motion.div>
        <motion.div
          ref={ref}
          initial={initialValues}
          animate={
            isInView
              ? { opacity: 1, transform: "translateY(0px)" }
              : { opacity: 0 }
          }
          transition={{ duration: 0.4 }}
          className='tile-left-bottom tile-side'
        >
          {leftBottom ?? <></>}
        </motion.div>
      </div>
      <img
        className='product-img'
        src='./sap-sac-img.webp'
        alt='SAP Software Analytics Cloud'
      />
      <div className='card-side-container tile-side'>
        <motion.div
          ref={ref}
          initial={initialValues}
          animate={
            isInView
              ? { opacity: 1, transform: "translateY(0px)" }
              : { opacity: 0 }
          }
          transition={{ duration: 0.4 }}
          className='tile-right tile-side'
        >
          {right ?? <></>}
        </motion.div>
      </div>
    </div>
  );
};

export default Card;
