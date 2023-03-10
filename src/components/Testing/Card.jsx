import { useState } from "react";
import { motion } from "framer-motion";
import "./styles.css";

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout='preserve-aspect'
      transition={{ layout: { duration: 1, type: "spring" } }}
      className='card'
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.h2 layout='position'>
        <div>
          <img src={"./arista-logo.png"} alt='Trees' width='200' />{" "}
        </div>
      </motion.h2>
      {isOpen && (
        <motion.div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum natus
            inventore velit iusto dignissimos esse quibusdam fuga maxime. At
            accusamus labore dicta obcaecati, laudantium incidunt in. Autem
            consequuntur accusamus quasi.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum natus
            inventore velit iusto dignissimos esse quibusdam fuga maxime. At
            accusamus labore dicta obcaecati, laudantium incidunt in. Autem
            consequuntur accusamus quasi.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Card;
