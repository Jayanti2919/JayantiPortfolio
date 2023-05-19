import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='h-screen w-full relative mx-auto'>
      <div className={`${styles.paddingX} absolute mx-auto inset-0 top-[96px] flex items-start gap-10`}>
        <div className='flex flex-col justify-center items-center mt-2'>
            <div className='h-5 w-5 bg-[#915eff] rounded-full'/>
            <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#915eff]'>Jayanti</span></h1>
          <p className={`${styles.heroSubText} mt-2 `}>
            Web developer
          </p>
        </div>
      </div>
      <ComputersCanvas/>
    </section>
  )
}

export default Hero