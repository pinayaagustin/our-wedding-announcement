'use client'
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Great_Vibes } from 'next/font/google';
const great = Great_Vibes({weight:['400'],subsets:['latin']})
const Envelope = () => {
  const envelopeVariants = {
    closed: { transform: 'matrix(1, 0, 0, -1, 489.99951171875, 192)'},
    open: { transform: 'matrix(1, 0, 0, 1, 489.99951171875, -1)' },
    goUp:{y:-70, height:500, transition: {duration:1, delay:1.5, ease: 'easeOut'}},
    goDown:{y:500, height:0, transition: {duration:1, ease: 'easeOut'}},
    zoomIn: { scale: 4, y:90, transition: { duration: 3, ease: 'easeInOut' } },
    zoomOut:{ scale: 1}
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div className='flex justify-center items-center w-fit' onClick={() => setIsOpen(true)} variants={envelopeVariants} initial="zoomOut" animate={isOpen ? 'zoomIn' : 'zoomOut'} transition={{ duration: 3 }}>
        <motion.svg viewBox="5 -70 480 500" width="80%">
            <motion.rect width="480" height="300" className='fill-[#9b3b48]' y="95" x="5" /> 
            <motion.path d="M -245 -54 L -5 96 L -485 96 L -245 -54 Z" className='fill-[#9b3b48]' initial= "closed" variants={envelopeVariants} animate={isOpen ? 'open' : 'closed'} transition={{ duration: 1,delay:0.5 }} />
            <motion.rect x="5" width="480" className="fill-primary" variants={envelopeVariants} initial="goDown" animate={isOpen ? 'goUp' : 'goDown'} />
            <motion.path d="M 5 95 L 485 395 L 5 395 L 5 95 Z" className="fill-[#b77c84]" />
            <motion.path d="M 485 95 L 485 395 L 5 395 L 485 95 Z" className='fill-[#e58a96]' />
        </motion.svg>
    </motion.div>
  );
};

export default function Envel({setOpenParent}) {
  const [isOpen, setIsOpen] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);

  const envelopeVariants = {
    slideDown:{y:windowHeight},
    slideStandby:{y:0}
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // console.log(window.innerHeight,window.screenY)
      setWindowHeight(window.innerHeight);
    }
  }, []);
    return (
      <motion.div className='overflow-hidden bg-primary'>
        <motion.div className='flex items-center justify-center flex-col h-svh gap-10 bg-white overflow-hidden' animate={isOpen ? 'slideDown' : 'slideStandby'} variants={envelopeVariants} initial="slideStandby" transition={{duration:1,delay:4,ease:'easeInOut'}}>
          <p className={great.className + ' sm:text-5xl text-3xl text-center w-[80%] text-primary' } > Hari Bahagia Kami<br/>Segera Tiba! </p>
          <motion.div animate={isOpen ? {scale: 1} : {
            scale: [1, 1.05, 1],
            transition: {
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut'
            }
          }} onClick={()=>{
              setIsOpen(true)
              setOpenParent(true)
            }}>
            <Envelope />
          </motion.div>
          <p className=' sm:text-5xl text-sm text-center w-[80%] text-primary' > Ketuk pada gambar untuk melanjutkan </p>
        </motion.div>
      </motion.div>
      
    );
  }
