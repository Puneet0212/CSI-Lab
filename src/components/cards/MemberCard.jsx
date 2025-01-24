import React from "react";
import { motion } from "framer-motion";
import {Tilt} from "react-tilt"; 

import { fadeIn } from "../../utils/motion"; 
import useResponsive from "../../utils/useResponsive";

const MemberCard = ({
  index,
  name,
  designation,
  image,
  portfolio_link,
}) => {

  const isMobile = useResponsive(768);

  return (
    <Tilt className='xs:w-[300px] w-full'> {/* Increased card width */}
      <motion.div
        variants={!isMobile? fadeIn("up", "spring", index * 0.5, 0.75): undefined}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        initial="hidden"
        animate="show"
      >
        <div className='bg-tertiary rounded-[20px] py-8 px-5 min-h-[350px] flex justify-evenly items-center flex-col'> {/* Increased padding and min-height */}
          <div className='relative w-full h-[300px]'> {/* Height for portrait images */}
            <img
              src={image}
              alt='member_image'
              className='w-full h-full object-cover rounded-2xl' // Maintain aspect ratio
            />
          </div>

          <div className='mt-3'> {/* Reduced margin-top for better spacing */}
            <h3 className='text-white text-[24px] font-bold text-center'> {/* Increased font size */}
              {name}
            </h3>
            <p className='mt-1 text-secondary text-[14px] text-center'> {/* Adjusted font size */}
              {designation}
            </p>
          </div>

          <div className='mt-2'>
            <button
              onClick={() => window.open(portfolio_link)}
              className='text-white bg-blue-500 hover:bg-blue-300 px-3 py-1 rounded text-[16px]' // Adjusted padding for button
            >
              View Portfolio
            </button>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default MemberCard;
