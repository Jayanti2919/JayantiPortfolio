import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { download, github, linkedin } from '../assets'

const Contact = () => {

  // template_2emjbl3
  // service_fbf7tx1
  // 6mjsQ7dmiibcgbcqe

  const formRef = useRef();

  const [form, setform] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setloading] = useState(false)

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setform({...form, [name]:value})
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);

    emailjs.send(
      "service_fbf7tx1", 
      "template_2emjbl3", 
      {
        from_name: form.name,
        to_name: 'Jayanti',
        from_email: form.email,
        to_email: 'jayanti2919@gmail.com',
        message: form.message,
      },
      "6mjsQ7dmiibcgbcqe",
      )

      .then(()=>{
        setloading(false)
        alert("Thank you for getting in touch. I will get back to you as soon as possible.")

        setform({
          name: '',
          email: '',
          message: '',
        })
      }, (error)=>{
        setloading(false)
        alert("An error occurred!")
        console.log(error)
      })
  }

  return (
    <div className='xl:mt-12 flex flex-col-reverse xl:flex-row gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] rounded-lg bg-black-200 p-8'
      >
        <p className={`${styles.sectionSubText}`}>Get in Touch!</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact</h3>

        <form onSubmit={handleSubmit} ref={formRef} className='flex flex-col gap-8 mt-12'>
          <label htmlFor="" className='flex flex-col '>
            <span className='mb-4 text-white '>Your Name</span>
            <input type="text" 
              placeholder="What's your name?"
              value={form.name}
              onChange={handleChange}
              name='name'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-xl font-medium active:border-none outline-none'
            />
          </label>
          <label htmlFor="" className='flex flex-col '>
            <span className='mb-4 text-white '>Your Email</span>
            <input type="text" 
              placeholder="What's your email?"
              value={form.email}
              onChange={handleChange}
              name='email'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-xl font-medium active:border-none outline-none'
            />
          </label>
          <label htmlFor="" className='flex flex-col '>
            <span className='mb-4 text-white '>Message</span>
            <textarea rows={5}
              placeholder="What's your message?"
              value={form.message}
              onChange={handleChange}
              name='message'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-xl font-medium active:border-none outline-none'
            />
          </label>
          <button type='submit'
            className='bg-tertiary px-10 py-3 rounded-xl outline-none w-fit text-white font-bold'          
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        <div className='flex gap-6 h-fit mt-5'>
            <img src={github} alt="github" className='h-9 w-9 cursor-pointer bg-black rounded-lg' onClick={()=>{window.open("https://github.com/Jayanti2919", "_blank")}}/>
            <img src={linkedin} alt="linkedin" className='h-9 w-9 bg-white rounded-lg cursor-pointer' onClick={()=>{window.open("https://www.linkedin.com/in/jayantigoswami/", "_blank")}}/>
            <img src={download} alt="resume" className='h-9 w-9 bg-white rounded-lg px-2 cursor-pointer' onClick={() => {window.open("https://docs.google.com/document/d/1vhBBqVtmcxwmmG0o1Ryg7bZCg9sMjlL0sQJxiv2tMHs/edit?usp=sharing", "_blank")}}/>
        </div>
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