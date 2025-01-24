import React from "react";

import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { latestNews } from "../constants";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import ResearchFocusAreas from "./ResearchFocusAreas";
import useResponsive from "../utils/useResponsive";
import News from "./sub-components/News";

const Home = () => {

  const isMobile = useResponsive(768);  // Use the custom hook to check for mobile screens

  // Shared content
  const introductionContent = (
    <>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </>
  );

  const paragraphContent = (
    <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      At CSI Lab, we pioneer research in intelligent systems management to
      ensure efficient and robust performance on networked mobile devices. By
      developing self-aware systems, we enhance applications across the
      Internet-of-Things (IoT) and Cyber-Physical Systems (CPS) domains, from
      mobile autonomous devices to AR/XR headsets. Our collaborations with top
      research institutions and industry leaders such as Meta, Google, and
      Apple drive innovation in the future of connected devices.
    </p>
  );
  

  return (
    <div className="bg-primary">
      {/* Banner Section */}
      <div className="relative h-[300px] flex items-center justify-center bg-banner-pattern">
        <h1 className="text-white text-4xl font-bold">Welcome to CSI Lab</h1>
      </div>


      {/* Conditional Rendering based on screen size */}
      <div>
        {introductionContent}
        
        <motion.div
          variants={textVariant()}
          initial="hidden"
          animate="show"
        >
          {isMobile ? (
            paragraphContent
          ) : (
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
              {paragraphContent}
            </motion.p>
          )}
        </motion.div>
      </div>


      {/* Research Focus Areas Section */}
      <ResearchFocusAreas />



      
      {/* Latest News Section with Vertical Timeline */}
      <News latestNews={latestNews} />


      
    </div>
  );
};

export default SectionWrapper(Home, "home");
