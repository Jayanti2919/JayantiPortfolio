import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { LoopRepeat } from 'three'

const Hero = () => {
  return (
    <section className='h-screen w-full relative mx-auto'>
      <div className={`${styles.paddingX} absolute mx-auto inset-0 top-[96px] flex items-start gap-10`}>
        <div className='flex flex-col justify-center items-center mt-2'>
            <div className='h-5 w-5 bg-[#915eff] rounded-full'/>
            <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#915eff]'>Jayanti</span></h1>
          <p className={`${styles.heroSubText} mt-2 `}>
            Full stack <br className='md:hidden'/>Web Developer
          </p>
        </div>
      </div>
      <ComputersCanvas/>

      <div className='absolute z-50 md:-bottom-20 -bottom-4 w-full flex justify-center items-center '>
        <a href="#about">
        <div className='rounded-3xl w-[30px] h-[64px] border-4 border-secondary p-2 items-start justify-center flex'>
          <motion.div 
            animate={{
              y:[0,24,0]
            }}
            transition={{
              duration:1.5,
              repeat:Infinity,
              repeatType:'loop'
            }}
            className='w-3 h-4 mb-1 rounded-full bg-secondary'
          />
        </div>
        </a>
      </div>
    </section>
  )
}

export default Hero