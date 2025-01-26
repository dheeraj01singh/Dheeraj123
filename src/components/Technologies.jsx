import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {RiReactjsLine} from "react-icons/ri"
import { motion} from "framer-motion"

const iconVariants = (duration) =>({
  initial: { y: -10 },
  animate:{
    y: [10, -10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",
    }
  }
})




const Technologies = () => {
  return (
    <div className="pb-24">
        <motion.h2
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
         className="my-20 text-center text-4xl">Technologies

        </motion.h2>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x: -100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4 lg:gap-30">
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)} >
              <FaHtml5 className="text-7xl text-orange-500"/> 
              </motion.div>

            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
             className="p-4 ">
              <FaCss3 className="text-7xl text-slate-100"/> 
              </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(5)}
            className="p-4">
              <RiTailwindCssFill className="text-7xl text-cyan-400"/>
              </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(2)}
            className="p-4">
              <FaBootstrap className="text-7xl text-blue-700"/>
              </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(6)}
            className="p-4">
              <IoLogoJavascript  className="text-7xl text-yellow-400"/>
              </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(4)}
            className="p-4">
              <RiReactjsLine className="text-7xl text-cyan-400"/>
              </motion.div>      
        </motion.div>
    </div>
  )
}

export default Technologies