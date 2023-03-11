import { ArrowRightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { motion } from "framer-motion";
import React from "react";
import Card from "../Card";

const title = "Fang _";
const subtext = "03. 09. 2023";

const LandingPage2 = () => {
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
        <div style={{ display: "flex" }} className='title-container'>
          <div className='title-text'>Fang _</div>
          <div className='title-subtext'>{subtext}</div>
          <div className='title-subtext-2'>v0.01</div>
        </div>
      </motion.div>
      <Row className='tile-container' gutter={[0, "15vh"]}>
        <Col push={4} span={16}>
          <Card left='Arista' leftBottom='Software Engineer' right='>' />
        </Col>
        <Col push={4} span={16}>
          <Card left='SAP' leftBottom='Mobile Developer Intern' right='>' />
        </Col>
      </Row>
    </div>
  );
};

export default LandingPage2;
