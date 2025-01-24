import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import {Tilt} from "react-tilt"; 

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
  }) => {
    return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="xs:w-[360px] w-full"
        >
          <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
            <div className="bg-tertiary p-5 rounded-2xl">
              <a href={source_code_link} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full h-[230px]">
                  <img
                    src={image}
                    alt="project_image"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </a>
  
              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">{name}</h3>
                <p className="mt-2 text-secondary text-[14px]">{description}</p>
              </div>
  
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <p
                    key={`${name}-${tag.name}`}
                    className={`text-[14px] ${tag.color}`}
                  >
                    #{tag.name}
                  </p>
                ))}
              </div>
  
              {source_code_link && (
                <div className="mt-4 flex justify-center">
                  <a
                    href={source_code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-blue-500 px-3 py-2 rounded-lg text-[16px] hover:bg-blue-600 transition"
                  >
                    Learn More...
                  </a>
                </div>
              )}
            </div>
          </div>
        </Tilt>
      </motion.div>
    );
  };

export default ProjectCard


