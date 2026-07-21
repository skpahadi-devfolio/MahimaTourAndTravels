import React from 'react'
import { motion } from 'framer-motion'

const ScaleIn = ({children}) => {
  return (
    <motion.div

      initial={{ scale: 0.7, opacity: 0 }}

      whileInView={{ scale: 1, opacity: 1 }}

      transition={{ duration: 1 }}

      viewport={{ once: false }}

    >

      {children}

    </motion.div>
  )
}

export default ScaleIn
