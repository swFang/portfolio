import { Col, Row } from "antd";
import { motion } from "framer-motion";
import React, { useState } from "react";
import AboutModal from "../AboutModal";
import Card from "../Card";
import Navbar from "../Navbar";
import SmallCard from "../SmallCard";

const SUBTITLE = "03. 09. 2023";

const LandingPage2 = () => {
  const [selectedModal, setSelectedModal] = useState(undefined);

  const handleCardClicked = (modal) => {
    setSelectedModal(modal);
  };

  const closeModal = () => {
    setSelectedModal(undefined);
  };

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
    <div>
      <AboutModal
        visible={selectedModal ? true : false}
        value={selectedModal}
        onClose={() => closeModal()}
      />
      <div className='landing-page section'>
        <Navbar />
        <motion.div
          variants={dropIn}
          initial='hidden'
          animate='visible'
          exit='exit'
        >
          <Row className='tile-container' gutter={[0, "15vh"]}>
            <Col push={4} span={16}>
              <div style={{ display: "flex" }} className='title-container'>
                <div className='title-text'>Fang _</div>
                <div className='title-subtext'>{SUBTITLE}</div>
                <div className='title-subtext-2'>v0.01</div>
              </div>
            </Col>
          </Row>
        </motion.div>
        <Row className='tile-container' gutter={[0, "15vh"]}>
          <Col push={4} span={16}>
            <Card
              left='Arista'
              leftBottom='Software Engineer'
              key='arista'
              path='./arista-1.png'
              skillList={[
                { label: "React" },
                { label: "Redux" },
                { label: "TypeScript" },
                { label: "Cypress" },
              ]}
              achievements={[
                "Spearheaded a small team in policy creation workflow redesign for DMF",
                "Worked extensively with UX and QA teams to ensure features were shipped with quality and accuracy",
                "Feature development: Login/Logout migration to React, Users, Groups, RBAC, SPAN... etc",
                "Upgraded cypress testing environment to include virtual switches with internal APIs to better test depth",
                // "Migrated login/logout functionality to React",
                // "Users and Group pages, which included creating, deleting, permissions, RBAC... etc",
                // "SPAN feature in UI for CCF, to allow configuration and viewing of realtime data ",
                "System Status Dashboard which aggregated health data from multiple controllers (max 65) into a single dashboard",
                "Responsible for creating/maintaining our e2e framework through jenkins and groovies scripts",
                "Improved e2e test coverage by adding in tests to all new features as well as covering cases that were previously missed",
              ]}
              onClick={() => handleCardClicked("arista")}
            />
          </Col>
          <Col push={4} span={16}>
            <Card
              left='SAP'
              leftBottom='Mobile Developer Intern'
              key='sap'
              path='./sap-sac-img.webp'
              skillList={[
                { label: "React" },
                { label: "Redux" },
                { label: "TypeScript" },
                { label: "Swift" },
                { label: "Objective-C" },
              ]}
              achievements={[
                "Improved navigation bar in React by reorganizing and working with UX",
                "Added additional kebab menu in the navigation bar to expand functionality",
                "Improved App UX by implementing a hybrid webapp/native swipe recognition",
                "Responsible for PnR testing every sprint to maintain performance",
              ]}
            />
          </Col>
          {/* <Col span={4}>empty for spacing</Col> */}
          <Col offset={4} span={7}>
            <SmallCard
              top='SAP HANA University'
              bottom='Frontend Developer'
              path='./UniversityHana.png'
              achievements={[
                "Web app to consolidate SAP learning material",
                "Integrating SAP's existing SSO into our webapp ",
                "Used cookies to keep users logged in",
                "MongoDB to store user data & stats",
              ]}
              skills={["React", "Node.js", "JavaScript"]}
            />
          </Col>
          <Col offset={2} span={7}>
            <SmallCard
              top='Emaily'
              bottom='Full Stack Developer'
              path='./Emaily.png'
              achievements={[
                "Web app to bulk send emails for payment",
                "Implement OAuth2 flow from google servers",
                "Use Sendgrid API to bulk send emails",
                "Use Stripe API to receive payment",
              ]}
              skills={["React", "Node.js", "JavaScript"]}
            />
          </Col>
          <Col offset={4} span={7}>
            <SmallCard
              top="Bus's R Us"
              key='bus'
              bottom='Mobile Developer'
              path='./Scheduler.png'
              achievements={[
                "School project to track bus schedule",
                "Use Translink API to track bus locations",
                "Android app to draw bus stops and location",
              ]}
              skills={["Java", "Android Studio"]}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LandingPage2;
