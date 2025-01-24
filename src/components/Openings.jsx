import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from "../hoc"; // Assuming you have this wrapper in your project
import { styles } from "../styles"; // Assuming you have a styles file
import { textVariant } from "../utils/motion"; // Assuming this motion utility is available
import { fadeIn } from "../utils/motion"; // Adjust the import path accordingly


const Openings = () => {
  return (
    <>
    
    <motion.div variants={textVariant()}>
      <div className="bg-primary ">
        <p className={`${styles.sectionSubText} text-accent`}>Join Us</p>
        <h2 className={`${styles.sectionHeadText} text-highlight`}>Current Openings.</h2>
      </div>
    </motion.div>

    <div className="w-full flex mt-10">
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        We are looking for talented and passionate individuals to join our team in cutting-edge projects in cyber-physical systems, optimization, modeling, and perception. Below are the current openings and projects. Please send your resume and a bit about yourself to <a href="mailto:bdonyanavard@sdsu.edu" className="text-highlight underline">bdonyanavard@sdsu.edu</a>.
      </motion.p>
    </div>


    <motion.div
        variants={fadeIn("up", "spring", 0.5, 1)}
        initial="hidden"
        animate="show"
      >

      {/* Highlighted Section for Desired Experience */}
      <div className="mt-20">
        <h3 className="text-white font-bold text-[24px] mb-4 text-highlight">Desired Experience/Knowledge</h3>
        <ul className="text-secondary text-[16px] list-disc pl-8">
          <li className="text-accent">Experience in at least one of the following areas: <strong>cyber-physical systems, optimization, modeling, perception</strong></li>
          <li className="text-accent"><strong>Experience in the following languages:</strong> C++, Python</li>
          <li>Ability to formulate problems and solve them independently and in groups</li>
          <li>Strong analytical skills and ability to acquire new knowledge, apply it, and spread it to others</li>
          <li>Strong communication skills in written and spoken English and good presentation skills</li>
        </ul>
      </div>

      {/* Highlighted Section for Current Openings */}
      <div className="mt-20">
        <h3 className="text-white font-bold text-[24px] mb-4 text-highlight">Current Openings</h3>
        <ul className="text-secondary text-[16px] list-disc pl-8">
          <li><strong className="text-accent">PhD Student for Fall 2025:</strong> Collaborative perception in edge networks. Contact us as soon as possible if interested.</li>
          <li><strong className="text-accent">SDSU students interested in GPU or HDL programming:</strong> Ongoing projects.</li>
          <li><strong className="text-accent">SDSU students interested in evaluating realtime SLAM applications:</strong> For embedded systems.</li>
        </ul>
      </div>

      {/* Highlighted Section for Undergraduate/Graduate Projects */}
      <div className="mt-20">
        <h3 className="text-white font-bold text-[24px] mb-4 text-highlight">Undergraduate/Graduate Projects</h3>
        <p className="text-secondary text-[17px] leading-[30px]">
          Ongoing projects consistently have opportunities for undergraduate (or graduate) student contributions. Key skills include proficiency in <strong className="text-accent">Python, C++, and the Linux command-line interface</strong>. See my research page and recent publications for general topics such as <strong className="text-accent">autonomous cyber-physical systems</strong> and <strong className="text-accent">intelligent edge systems</strong>. Contact me if you are interested in contributing.
        </p>
      </div>
    </motion.div>

    </>
  );
};

export default SectionWrapper(Openings, "openings");
