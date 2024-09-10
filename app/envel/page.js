'use client'
// components/Envelope.js
import { delay, motion } from 'framer-motion';
// import './Envelope.css'; // Menggunakan CSS module untuk styling
import { useState } from 'react';

const Envelope = () => {
  // Variasi animasi untuk bagian amplop
  const envelopeVariants = {
    closed: { transform: 'matrix(1, 0, 0, -1, 489.99951171875, 192)'},
    open: { transform: 'matrix(1, 0, 0, 1, 489.99951171875, -1)' },
    mailGoDown:{y:0},
    mailGoUp:{y:40},
    goUp:{y:0, height:400, transition: {duration:0.5, ease: 'easeOut'}},
    goDown:{y:400, height:0, transition: {duration:1}}
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex justify-center items-center w-fit' onClick={() => setIsOpen(true)}>
        <motion.svg viewBox="4.998 -70 480 500" width="100%">
            <motion.rect width="480" height="300" className='fill-[#03346E]' y="95" x="5" />
            <motion.path d="M -245 -54 L -5 96 L -485 96 L -245 -54 Z" className='fill-[#03346E]' initial= "closed" variants={envelopeVariants} animate={isOpen ? 'open' : 'closed'} transition={{ duration: 0.4 }} />
            <motion.rect x="6" width="480" className="fill-accent-1" variants={envelopeVariants} initial="goDown" animate={isOpen ? 'goUp' : 'goDown'} />
            <motion.path d="M 5.002 95 L 485.002 395 L 5.002 395 L 5.002 95 Z" className="fill-[#1C5AA5]" />
            <motion.path d="M 485.002 95 L 485.002 395 L 5.002 395 L 485.002 95 Z" className='fill-[#055A9B]' />
        </motion.svg>
        {/* <?xml version="1.0" encoding="utf-8"?>
        <svg viewBox="4.999 96 480 150" width="480" height="150" xmlns="http://www.w3.org/2000/svg" xmlns:bx="https://boxy-svg.com">
        <path d="M -245 -246 L -5 -96 L -485 -96 L -245 -246 Z" style="stroke: rgb(0, 0, 0); stroke-width: 0px; fill: rgb(3, 52, 110); transform-origin: -245px -96px;" transform="matrix(-1, 0, 0, -1, 489.9990234375, 192.000045776367)" bx:shape="triangle -485 -246 480 150 0.5 0 1@851d3022"/>
        </svg> */}
        {/* <svg viewBox="4.998 -54 480 449" width="480" height="449" xmlns="http://www.w3.org/2000/svg" xmlns:bx="https://boxy-svg.com"> */}
            {/* <path />
            <?xml version="1.0" encoding="utf-8"?>
<svg viewBox="36.165 180.361 417.669 194" width="417.669" height="194" xmlns="http://www.w3.org/2000/svg">
  <rect x="36.165" y="180.361" width="417.669" height="194" style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0); stroke-opacity: 0; stroke-width: 0px; transform-origin: 244.999px 180.4px;"/>
</svg>
            <rect width="480" height="300" style="stroke: rgb(0, 0, 0); stroke-width: 0px; fill: rgb(3, 52, 110);" y="94.996" x="4.998"/>
            <path d="M 5.002 95 L 485.002 395 L 5.002 395 L 5.002 95 Z" style="stroke: rgb(0, 0, 0); stroke-width: 0px; fill: rgb(28, 90, 165);" bx:shape="triangle 5.002 95 480 300 0 0 1@02da12c2"/>
            <path d="M 485.002 95 L 485.002 395 L 5.002 395 L 485.002 95 Z" style="stroke-width: 0px; paint-order: fill; stroke: rgb(0, 0, 0); fill: rgb(5, 90, 155);" bx:shape="triangle 5.002 95 480 300 1 0 1@85b689fd"/> */}
        {/* </svg> */}
    </div>
  );
};

export default function Home() {
    return (
      <div className='flex items-center justify-center h-svh gap-10'>
        <h1>edas </h1>
        <Envelope />
      </div>
    );
  }
