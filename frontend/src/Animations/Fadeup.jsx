import React from 'react'
import { motion } from 'framer-motion'

const Fadeup = ({children}) => {
  return (
    <motion.div

      initial={{ y: 100, opacity: 0 }}

      whileInView={{ y: 0, opacity: 1 }}

      transition={{ duration: 1 }}

      viewport={{ once: false }}

    >

      {children}

    </motion.div>

  )
}

export default Fadeup
