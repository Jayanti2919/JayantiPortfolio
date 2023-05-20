import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer } from '../utils/motion'
import { styles } from '../styles'


const SectionWrapper = (Component) =>
    function hoc() {
        return(
            <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once:true, amount:0.25 }}
            className={`${styles.padding} w-full bg-primary mx-auto`}
            >
                <span className='hash-span'>
                    &nbsp;
                </span>
                <Component />
            </motion.section>
        )
    }

export default SectionWrapper