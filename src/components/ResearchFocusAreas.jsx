import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion"; 
import { styles } from "../styles";
import ResearchCard from "./cards/ResearchCard";
import { researchAreas } from "../constants";
import useResponsive from "../utils/useResponsive";

const ResearchFocusAreas = () => {
  const isMobile = useResponsive(768);  // Check if the screen size is mobile

  // Use motion.div only for larger screens
  const Container = isMobile ? "div" : motion.div;

  return (
    <div className="mt-20">
      {/* Conditional rendering of Container based on mobile check */}
      <motion.div
        variants={!isMobile ? fadeIn("", "", 0.1, 1) : undefined}
        className="w-full"
        initial="hidden"
        animate="show"
      >
        {/* Section heading and description */}
        <p className={`${styles.sectionSubText}`}>
          Explore our key research interests
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Research Focus Areas.
        </h2>
      </motion.div>

      {/* Research Areas Cards */}
      <div className="mt-10 flex flex-wrap gap-10 justify-center">
        {researchAreas.map((area, index) => (
          <ResearchCard key={index} index={index} title={area.title} icon={area.icon} />
        ))}
      </div>
    </div>

  );
};

export default ResearchFocusAreas;
