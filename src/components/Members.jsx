import React from "react"; // Import React
import { motion } from "framer-motion"; // Import motion from framer-motion
import { SectionWrapper } from "../hoc"; // Import SectionWrapper from higher-order component
import MemberCard from "./cards/MemberCard"; // Import MemberCard component
import { styles } from "../styles"; // Import styles
import { alumni, members } from "../constants"; // Import members data
import { fadeIn, textVariant } from "../utils/motion"; // Import animation utilities
import useResponsive from "../utils/useResponsive";


const Members = () => {

  const isMobile = useResponsive(768); // Check for mobile screen

  return (
    <>

      {/* Conditional rendering of Container based on mobile check */}
      <motion.div
        variants={!isMobile ? textVariant() : undefined}
        className="w-full"
        initial="hidden"
        animate="show"
      >
        {/* Section heading and description */}
        <p className={styles.sectionSubText}>Our Team</p>
        <h2 className={styles.sectionHeadText}>Lab Members.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={!isMobile? fadeIn("", "", 0.1, 1): undefined}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          initial="hidden"
          animate="show"
        >
          Meet our talented lab members, each bringing unique skills and expertise to our research and projects.
        </motion.p>
      </div>


      <div className='m-20 flex flex-wrap gap-10 justify-center'> {/* Increased gap for spacing */}
        {members.map((member, index) => (
          <MemberCard key={`member-${index}`} index={index} {...member} />
        ))}
      </div>

      <motion.div 
        variants={!isMobile? textVariant(): undefined}
        initial="hidden"
        animate="show"
      >
        <h2 className={`${styles.sectionHeadText}`}>Alumni.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={!isMobile? fadeIn("", "", 0.1, 1): undefined}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
          initial="hidden"
          animate="show"
        >
          Celebrate our accomplished alumni, whose contributions have left a lasting impact on our research and continue to inspire future endeavors.
        </motion.p>
      </div>

      <div className='m-20 flex flex-wrap gap-10 justify-center'> {/* Increased gap for spacing */}
        {alumni.map((member, index) => (
          <MemberCard key={`member-${index}`} index={index} {...member} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Members, "");
