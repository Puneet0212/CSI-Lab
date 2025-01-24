import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center xl:mt-12 gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("top", "tween", 0.2, 1)}
        className='xl:w-[80%] w-full h-[400px]'
      >
        <EarthCanvas />
      </motion.div>

      <motion.div
        variants={slideIn("bottom", "tween", 0.2, 1)}
        className='bg-black-100 p-8 rounded-2xl w-full xl:w-[40%] flex flex-col items-center'
      >
        <p className={styles.sectionSubText}>Get in touch...</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <p>Email: <a href="mailto:bdonyanavard@sdsu.edu">bdonyanavard@sdsu.edu</a></p>
        <p>Director: Bryan Donyanavard</p>
        <p>Physical Address: PS-94 at SDSU</p>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
