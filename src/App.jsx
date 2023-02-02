import React, { useState } from 'react'
import '../tailwind.css'
import {motion, AnimatePresence} from 'framer-motion'
import "./main.scss"

const App = () => {
  let [contactMenu, setContactMenu] = useState(false); 
  let [leftArrow, setLeftArrow] = useState(true); 
  let [rightArrow, setRightArrow] = useState(true); 
  const contactOpen = {
    open: { rotate: 180, x: "98vw", opacity: 1, color: 'white'}, 
    closed: { rotate: 0, x: 0, opacity: 1, scale: 1,}
  }
  const contactMenuOpen = {
    open: { x: "99.9vw"},
    closed: {x: 0}
  }
  return (
    <div className='h-[100vh] w-[100%] bg-gray-900'>
        <motion.div initial={{y: -40}} animate={{y:0}}
          transition={{delay: 1, type: 'tween', duration: '.8', ease: "easeInOut"}} className='bg-black h-[5vh] flex justify-center items-center'>
            <h1 className='text-white text-sm'>JNR</h1>
        </motion.div>
        <motion.div className=' heroCont h-[95%] w-[100%] flex justify-center items-center'>
          <motion.h1 initial={{y: 40, opacity: 0, scale: .9}} animate={{y: 0, opacity: 1, scale: 1}}  
          transition={{type: 'tween', duration: 1, type: 'spring', stiffness: 100, ease: "easeInOut"}} className='text-white text-[22.4px] p-10 text-center'>Hello, my name is Julian Naranjo Ramos, a self taught developer. </motion.h1>
          { leftArrow ? <motion.i initial={{x: -40, opacity: 0, scale: .9, rotate: 0}} animate={contactMenu ? "open" : "closed"} variants={contactOpen}
          transition={{type:'tween', duration: 1.5, ease: "easeInOut", type: 'spring', stiffness: 100}} className='contactMeBtn z-20 fa-solid fa-chevron-left text-[5vh] text-blue-500 animate-pulse fixed left-0 ' onClick={() => { setContactMenu(contactMenu => !contactMenu); setRightArrow(rightArrow => !rightArrow)}}></motion.i> : null }
          { rightArrow ? <motion.i initial={{x: 40, opacity: 0, scale: .9}} animate={{x: 0, opacity: 1, scale: 1}}
          transition={{type: 'tween', duration: 1, ease: "easeInOut", type: 'spring', stiffness: 100}} className='techBtn fa-solid fa-chevron-right text-[5vh] text-blue-600 animate-pulse fixed right-0'></motion.i> : null }
        </motion.div>
        <motion.div initial={{x: -"100rem"}} animate={contactMenu ? "open" : "closed"} variants={contactMenuOpen} className='contactMenu h-[100vh] w-[100%] bg-gray-800 z-10 absolute top-0 left-[-100%] flex flex-col items-center'>
          <h1 className='text-white text-center'>Contact Me</h1>
          <form action="https://formsubmit.co/juliannaranjoramos@gmail.com" method="POST" className='flex flex-col w-[80%] gap-5'>
            <label>Name</label>
            <input type="text" name="name" required placeholder='John Doe'/>
            <label>Email: </label>
            <input type="email" name="email" required placeholder='Example@domain.com'/>
            <label>Leave A Message:</label>
            <textarea className='y-resize'></textarea>
            <button type="submit" className='p-1 bg-blue-600 text-white'>Send</button>
          </form>
        </motion.div>
        
    </div>
  )
}

export default App