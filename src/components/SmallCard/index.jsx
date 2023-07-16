import { Divider, List, Tag } from "antd";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

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

const SkillsList = ({ skills }) => {
  console.log(skills);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {skills.map((skill) => (
        <Tag status='default'> {skill}</Tag>
      ))}
    </div>
  );
};

const SmallCard = ({ top, bottom, path, achievements, skills }) => {
  const [selected, setSelected] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.75 });

  const initialValues = { opacity: 0, y: 25 };

  return (
    <div
      className='tile-small'
      ref={ref}
      onClick={() => {
        setSelected(!selected);
      }}
    >
      <motion.div
        ref={ref}
        initial={initialValues}
        animate={
          isInView
            ? { opacity: 1, transform: "translateY(0px)" }
            : { opacity: 0 }
        }
        transition={{ duration: 0.4 }}
        className='tile-small-top tile-small-text'
      >
        {top ?? <></>}
        {selected && (
          <div style={{ marginTop: "30px" }}>
            <SkillsList skills={skills ?? []} />
            <div style={{ marginBottom: "12px" }} />
            <AchievementsList achievements={achievements ?? []} />
          </div>
        )}
      </motion.div>
      {!selected && (
        <img
          style={{ width: "40%" }}
          className='product-img'
          src={path}
          alt='SAP Software Analytics Cloud'
        />
      )}
      <motion.div
        ref={ref}
        initial={initialValues}
        animate={
          isInView
            ? { opacity: 1, transform: "translateY(0px)" }
            : { opacity: 0 }
        }
        transition={{ duration: 0.4 }}
        className='tile-small-bottom tile-small-text'
      >
        {bottom ?? <></>}
      </motion.div>
    </div>
  );
};

export default SmallCard;
