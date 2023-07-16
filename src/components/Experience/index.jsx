import React from "react";
import { Typography, Tag, Timeline, Image } from "antd";

const { Title, Paragraph } = Typography;
const { Item: TimelineItem } = Timeline;

const Experience = ({
  jobTitle,
  companyLogo,
  startDate,
  endDate,
  description,
  highlights,
  skills,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          src={companyLogo}
          alt={`${jobTitle} logo`}
          preview={false}
          style={{ marginRight: "1rem", maxWidth: "75px" }}
        />
        <div>
          <Title
            level={3}
            style={{ marginBottom: "0px", fontFamily: "Oswald" }}
          >
            {jobTitle}
          </Title>
          <div style={{ textAlign: "left" }}>
            <Paragraph
              style={{
                textAlign: "justify",
                marginBottom: "0px",
                fontFamily: "Oswald",
              }}
            >
              {startDate} - {endDate}
            </Paragraph>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "1rem", textAlign: "left" }}>
        <Title level={5} style={{ fontFamily: "Oswald" }}>
          Skills:
        </Title>
        <div>
          {skills.map((skill, index) => (
            <Tag
              key={index}
              color='blue'
              style={{ marginBottom: "0.5rem", marginRight: "0.5rem" }}
            >
              {skill}
            </Tag>
          ))}
        </div>
      </div>
      <Paragraph
        style={{
          textAlign: "justify",
          marginBottom: "1rem",
          fontFamily: "Oswald",
        }}
      >
        {description}
      </Paragraph>
      <div style={{ textAlign: "left" }}>
        <Title level={5} style={{ fontFamily: "Oswald" }}>
          Highlights:
        </Title>
        <Timeline style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          {highlights.map((highlight, index) => (
            <TimelineItem key={index}>
              <Paragraph
                style={{
                  textAlign: "justify",
                  marginBottom: "0px",
                  fontFamily: "Oswald",
                }}
              >
                {highlight}
              </Paragraph>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
};

export default Experience;
