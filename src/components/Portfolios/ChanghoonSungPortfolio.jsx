import React from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles"; 
import { fadeIn } from "../../utils/motion";
import { charlie } from "../../assets"; 

const ChanghoonSungPortfolio = () => {
  return (
    <motion.div variants={fadeIn("up", "spring", 0, 1)} className="p-40">
      <div className="text-center">
        
        {/* Profile Image Section */}
        <div className="mb-10">
          <img
            src={charlie} 
            alt="Changhoon Sung"
            className="w-40 h-40 rounded-full object-cover mx-auto"
          />
        </div>
        
        {/* Name and Designation */}
        <h2 className={`${styles.sectionHeadText} mb-4`}>Changhoon Sung</h2>
        <p className={`${styles.sectionSubText} text-[18px]`}>Master’s Student</p>

        {/* Bio */}
        <div className="mt-8 text-secondary max-w-3xl mx-auto leading-[28px] text-[17px]">
          <p>
            Changhoon Sung is a Master’s student at the Broad Research and Development (BRD) team. He is actively involved in innovative projects aimed at exploring emerging technologies and advancing research in his field of expertise.
          </p>
        </div>

        {/* Contact and Links */}
        <div className="mt-8">
          <p className="text-secondary text-[16px]">
            Email: <a href="mailto:csung7167@sdsu.edu" className="text-blue-500">csung7167@sdsu.edu</a>
          </p>
          <p className="text-secondary text-[16px]">
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/changhoon-sung"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Changhoon Sung LinkedIn
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ChanghoonSungPortfolio;
