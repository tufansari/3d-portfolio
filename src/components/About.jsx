import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import linkedin from "../assets/tech/linkedin.png";
import github from "../assets/tech/github.jpg";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a middle experienced software developer with a strong background in
        JavaScript and mid-level in frameworks like React, Node.js, and
        Three.js. I'm a fast learner who works closely with clients to develop
        efficient, scalable, and user-friendly solutions. Let’s collaborate to
        bring your ideas to life!
        <div className="flex">
        <a href="https://www.linkedin.com/in/tufan-sari/" target="_blank">
        <img
              src={linkedin}
              alt="LinkedIn Profile"
              className="w-10 h-10 rounded-full mt-5"
            />
        </a>
        <a href="https://github.com/tufansari" target="_blank">
        <img
              src={github}
              alt="LinkedIn Profile"
              className="w-10 h-10 rounded-full mt-5 ml-5"
            />
        </a>
        </div>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
