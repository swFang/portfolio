import {
  GithubOutlined,
  MenuOutlined,
  MailOutlined,
  LinkedinOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import React, { useState } from "react";

const listItem = {
  hidden: { y: "-25px", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.25,
      staggerChildren: 0.05,
    },
  },
};

const Navbar = () => {
  const [show, setShow] = useState(true);
  return (
    <div className='nav-container'>
      <div className='abs-navbar' onClick={() => setShow(!show)}>
        <MenuOutlined className='nav-icon' />
        {show && (
          <motion.div
            variants={listItem}
            initial='hidden'
            animate='visible'
            exit='exit'
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <a
              href='https://github.com/swFang'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GithubOutlined className='nav-icon' />
            </a>
            <a
              href='https://www.linkedin.com/in/fang-daniel/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <LinkedinOutlined className='nav-icon' />
            </a>

            <MailOutlined
              className='nav-icon'
              onClick={() => {
                window.open("mailto:danielfang@hotmail.com?subject=Hi Daniel");
              }}
            />
            <a
              href='https://drive.google.com/file/d/1ETtFUmx1O7xDHmgJMY2R8XcQ8G67ZzjJ/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
            >
              <AuditOutlined className='nav-icon' />
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
