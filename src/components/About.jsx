import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ServiceCard = ({title, index, icon, desc}) => {
  return (
    <div className=' relative z-0'>
    <Tilt>

      <motion.div variants={fadeIn("right", "spring", 0.5*index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-lg shadow-card'>
        <div
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className='bg-tertiary rounded-lg px-12 py-10 min-h-[280px] flex flex-col items-center gap-5 justify-center'
        >
          <img src={icon} alt="icon-for-web" className='h-16 w-16'/>
          <h3 className='text-center text-white font-bold'>{title}</h3>
          <p className='text-secondary text-sm text-center'>{desc}</p>
        </div>
      </motion.div>
    </Tilt>
      </div>
  )
}

const About = () => {
  return (
    <div className='bg-primary h-fit w-full'>
      <motion.div variants={textVariant()} className='px-10 pt-24'>
        <p className={`${styles.sectionSubText}`}>About</p>
        <h2 className={`${styles.sectionHeadText}`}>Me</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='max-w-5xl mt-5 px-10 pb-10 leading-7 text-secondary'>
      Welcome to my portfolio! I'm a versatile web developer experienced in front-end and back-end development. With a passion for creating engaging user experiences, I've successfully delivered multiple projects. My expertise includes HTML, CSS, JavaScript, React, Node.js, and databases like MongoDB, PostgreSQL and MySQL. I look forward to working with you on your next project.
      </motion.p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-20 gap-10 px-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} icon={service.icon} desc={service.desc} {...service}/>
        ))}
      </div>
    </div>
  )
}

export default About