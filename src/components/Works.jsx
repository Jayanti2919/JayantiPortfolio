import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github, webicon } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({project, key}) => {
  return (
    <div>
    <Tilt>

      <motion.div variants={fadeIn("left", "spring", 0.5*key, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-lg shadow-card'>
        <div
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className='bg-tertiary rounded-lg px-12 py-10 min-h-[200px] flex flex-col md:items-center items-start gap-8 md:justify-center justify-start'
        >
          <div className='w-[40vw] h-fit flex flex-col gap-5 relative md:items-center'>
            <img src={project.image} alt={project.title} className='rounded-lg'/>
            <div className='absolute inset-0 justify-end flex mt-2 mr-2 gap-1 md:gap-2'>
            <div className=' black-gradient md:h-10 md:w-10 w-5 h-5 rounded-full my-1 flex items-center justify-center cursor-pointer'
            onClick={() => window.open(project.source_code_link, "_blank")}>
              <img src={github} alt="github" className='md:w-6 md:h-6 w-4 h-4 object-contain'/>
            </div>
            <div className='black-gradient md:h-10 md:w-10 w-5 h-5 rounded-full my-1 flex items-center justify-center cursor-pointer'
            onClick={() => window.open(project.live_link, "_blank")}>
              <img src={webicon} alt="website" className='md:w-6 md:h-6 w-4 h-4 object-contain bg-white p-1 rounded-full'/>
            </div>
            </div>
            <div className='flex flex-col gap-4 md:items-center'>
            <h3 className='text-white font-bold text-lg text-left'>{project.name}</h3>
            <p className='text-secondary text-sm max-w-sm md:text-center'>{project.description}</p>
            </div>

            <div className='flex gap-5 mt-2'>
              {project.tags.map((tag)=>(
                <p className={`${tag.color} text-sm `}>#{tag.name}</p>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Tilt>
      </div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div>
        <p className={`${styles.sectionSubText} text-secondary`}>My</p>
        <h2 className={`${styles.sectionHeadText} text-white`}>Projects</h2>
      </motion.div>

      <div className='w-full flex'>
      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-3 text-secondary text-[17px] max-w-5xl leading-[30px]'
      >
        This section highlights a collection of my web development projects, demonstrating my skills and expertise in creating innovative and functional solutions. Each project represents a unique challenge that I have tackled with creativity and attention to detail. The code as well as the live demo of every project is included to showcase my ability to tackle complex and diverse use cases efficiently. 
      </motion.p>
      </div>

      <div className='flex flex-wrap gap-16 mt-20 justify-center'>
        {projects.map((project, index)=>(
          <ProjectCard project={project} key={index}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works)