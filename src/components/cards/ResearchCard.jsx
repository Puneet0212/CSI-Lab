import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import {Tilt} from "react-tilt"; 
import useResponsive from "../../utils/useResponsive";

const ResearchCard = ({ index, title, icon }) => {

    const isMobile = useResponsive(768);  // Use the hook to check for mobile
    const Container = isMobile ? "div" : motion.div;


    return (
        <Tilt className="xs:w-[300px] w-full">
            <motion.div
                variants={!isMobile ? fadeIn("up", "spring", index * 0.5, 0.75) : undefined} 
                className="w-full"
                initial="hidden"
                animate="show"
            >
                <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
                <div className="bg-tertiary rounded-[20px] py-8 px-12 min-h-[350px] flex justify-evenly items-center flex-col">
                    <img src={icon} alt="web-development" className="w-24 h-24 object-contain" />
                    <h3 className="text-white text-[24px] font-bold text-center">{title}</h3>
                </div>
                </div>
            </motion.div>
        </Tilt>

    )
};

export default ResearchCard;