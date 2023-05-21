import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, webicon } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ project, key }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", key * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px] bg-black rounded-lg'>
          <img
            src={project.image}
            alt='project_image'
            className='w-full h-full object-contain rounded-lg'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-2'>
            <div
              onClick={() => window.open(project.source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            <div
              onClick={() => window.open(project.live_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={webicon}
                alt='live project'
                className='w-1/2 h-1/2 object-contain bg-white rounded-full'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{project.name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{project.description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {project.tags.map((tag) => (
            <p
              key={`${key}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div>
      <motion.div>
        <p className={`${styles.sectionSubText} text-secondary`}>My</p>
        <h2 className={`${styles.sectionHeadText} text-white`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-5 text-secondary text-[17px] max-w-5xl leading-[30px]"
        >
          This section highlights a collection of my web development projects,
          demonstrating my skills and expertise in creating innovative and
          functional solutions. Each project represents a unique challenge that
          I have tackled with creativity and attention to detail. The code as
          well as the live demo of every project is included to showcase my
          ability to tackle complex and diverse use cases efficiently.
        </motion.p>
      </div>

      <div className="flex flex-wrap gap-16 mt-10 justify-start">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works);
