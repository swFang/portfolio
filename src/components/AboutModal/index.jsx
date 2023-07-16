import { Modal } from "antd";
import React from "react";
import Experience from "../Experience";
import { AristaContent } from "./aboutContent";

const descriptions = {
  sap: {
    jobTitle: "SAP HANA University",
    startDate: "September 2019",
    endDate: "September 2020",
    location: "Vancouver, Canada",
    description:
      "Worked with fellow interns to consolidate employee training materials",
    highlights: [
      "Responsible to integrating SAP's existing SSO into our webapp ",
      "Used cookies to keep users logged in",
      "MERN stack to store learning materials, achievements and KPI",
    ],
    skills: ["Swift", "React", "Node.js", "JavaScript", "HTML", "CSS"],
  },

  emaily: {
    jobTitle: "Emaily",
    startDate: "Jan 2018",
    endDate: "Dec 2018",
    description:
      "Worked with the mobile team to develop both our native app and responsive web app. This was an 8 month internship which got extended to 12 months",
    highlights: [
      "Redesigned and rewrote our navigation bar to allow for additional features to be incorporated",
      "Redesigned out swipe gesture functionality that allowed for native swipe recognition while sending data to our web app",
      "Reponsible for PnR testing to ensure that our app remained performant",
    ],
    skills: ["Swift", "React", "Node.js", "JavaScript", "HTML", "CSS"],
  },
};
const AboutModal = ({ visible, value, onClose }) => {
  let content;
  switch (value) {
    case "arista":
      content = <AristaContent />;
      break;
    default:
      content = (
        <Experience
          jobTitle={descriptions.sap.jobTitle}
          company={descriptions.sap.company}
          startDate={descriptions.sap.startDate}
          endDate={descriptions.sap.endDate}
          location={descriptions.sap.location}
          description={descriptions.sap.description}
          highlights={descriptions.sap.highlights}
          skills={descriptions.sap.skills}
          companyLogo={"./sap-logo.png"}
        />
      );
      break;
  }

  return (
    <Modal open={visible} onCancel={() => onClose()} footer={null}>
      <div className='modal-content'>{content}</div>
    </Modal>
  );
};

export default AboutModal;
