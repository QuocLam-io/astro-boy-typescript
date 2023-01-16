import React from 'react'
import {motion} from 'framer-motion'

interface HowToPlayProps {
  setHowToPlay: React.Dispatch<React.SetStateAction<boolean>>
}

const HowToPlay = ({setHowToPlay}:HowToPlayProps) => {
  return (
    <motion.div className='HowToPlay'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >

    </motion.div>
  )
}

export default HowToPlay