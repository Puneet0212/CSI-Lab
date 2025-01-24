import React from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles"; 
import { fadeIn } from "../../utils/motion"; 
import { rebel } from "../../assets";


const AllesRebelPortfolio = () => {
  return (
    <motion.div variants={fadeIn("up", "spring", 0, 1)} className="p-40">
      <div className="text-center">
      
        {/* Profile Image Section */}
        <div className="mb-10">
          <img
            src={rebel} 
            alt="Alles Rebel"
            className="w-40 h-40 rounded-full  object-cover mx-auto"
          />
        </div>
        
        {/* Name and Designation */}
        <h2 className={`${styles.sectionHeadText} mb-4`}>Alles Rebel</h2>
        <p className={`${styles.sectionSubText} text-[18px]`}>PhD Student</p>

        {/* Bio */}
        <div className="mt-8 text-secondary max-w-3xl mx-auto leading-[28px] text-[17px]">
          <p>
            Alles Rebel is a PhD student at the University of California, Irvine (UCI) under the guidance of Prof. Nikil Dutt. He is
            jointly affiliated with the Computational Science Research Center at San Diego State University (SDSU).
          </p>
        </div>

        {/* Contact and Links */}
        <div className="mt-8">
          <p className="text-secondary text-[16px]">
            Email: <a href="mailto:arebel4097@sdsu.edu" className="text-blue-500">arebel4097@sdsu.edu</a>
          </p>
          <p className="text-secondary text-[16px]">
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/allesrebel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Alles Rebel LinkedIn
            </a>
          </p>
          <p className="text-secondary text-[16px]">
            Joint PhD with{" "}
            <a
              href="https://duttgroup.ics.uci.edu/group-members"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Nikil Dutt at UCI
            </a>
          </p>
          <p className="text-secondary text-[16px]">
            Affiliated with{" "}
            <a
              href="https://www.csrc.sdsu.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              SDSU’s Computational Science Research Center
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AllesRebelPortfolio;
