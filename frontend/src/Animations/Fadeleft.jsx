import React from 'react'
import { motion } from 'framer-motion'

const Fadeleft = ({children}) => {
  return (
    <motion.div

      initial={{ x: -100, opacity: 0 }}

      whileInView={{ x: 0, opacity: 1 }}

      transition={{ duration: 1 }}

      viewport={{ once: false }}

    >

      {children}

    </motion.div>

  )
}

export default Fadeleft
