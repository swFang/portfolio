import { Divider, List, Tag, Typography } from "antd";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const SkillsList = ({ skills }) => {
  return (
    <div>
      {skills.map((skill) => (
        <Tag status='default'> {skill.label}</Tag>
      ))}
    </div>
  );
};

const AchievementsList = ({ achievements }) => {
  return (
    <div>
      <List
        size='small'
        bordered={false}
        dataSource={achievements}
        renderItem={(achievement) => (
          <List.Item style={{ color: "black", paddingLeft: "20px" }}>
            <span style={{ marginRight: "8px", color: "black" }}>•</span>
            {achievement}
          </List.Item>
        )}
      />
    </div>
  );
};

const Card = ({ left, leftBottom, path, skillList, achievements }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  const initialValues = { opacity: 0, y: 25 };

  const [selected, setSelected] = useState(false);

  console.log(selected);
  return (
    <div
      className='tile-large'
      ref={ref}
      onClick={() => {
        // onClick();
        setSelected(!selected);
      }}
    >
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
      {selected ? (
        <div className='job-description'>
          <SkillsList skills={skillList} />
          <Divider />
          <AchievementsList achievements={achievements} />
        </div>
      ) : (
        <img
          className='product-img'
          src={path}
          alt='SAP Software Analytics Cloud'
        />
      )}
      {/* <div className='card-side-container tile-side'>
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
      </div> */}
    </div>
  );
};

export default Card;
