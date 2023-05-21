import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {

  const [form, setform] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setloading] = useState(false)

  const handleChange = (e) => {}
  const handleSubmit = (e) => {}

  return (
    <div className='xl:mt-12 flex flex-col-reverse xl:flex-row gap-10 overflow-hiddenrelative z-0'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] rounded-lg bg-black-200 p-8'
      >
        <p className={`${styles.sectionSubText}`}>Get in Touch!</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact Me</h3>

        <form action="" onSubmit={handleSubmit} className='flex flex-col gap-8 mt-12'>
          <label htmlFor="" className='flex flex-col '>
            <span className='mb-4 text-white '>Your Name</span>
            <input type="text" 
              placeholder="What's your name?"
              value={form.name}
              onClick={handleChange}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-xl font-medium active:border-none outline-none'
            />
          </label>
          <label htmlFor="" className='flex flex-col '>
            <span className='mb-4 text-white '>Your Email</span>
            <input type="text" 
              placeholder="What's your email?"
              value={form.email}
              onClick={handleChange}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-xl font-medium active:border-none outline-none'
            />
          </label>
          <label htmlFor="" className='flex flex-col '>
            <span className='mb-4 text-white '>Message</span>
            <textarea rows={5} cols={5} 
              placeholder="What's your message?"
              value={form.message}
              onClick={handleChange}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-xl font-medium active:border-none outline-none'
            />
          </label>
          <button type='submit'
            className='bg-tertiary px-10 py-3 rounded-xl outline-none w-fit text-white font-bold'          
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div 
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact)