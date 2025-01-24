import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";

const News = ({ latestNews }) => {
  return (
    <div className="mt-20">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Latest Updates and Announcements</p>
        <h2 className={`${styles.sectionHeadText}`}>Latest News.</h2>
      </motion.div>

      <div className="mt-10">
        <VerticalTimeline>
          {latestNews.map((news, index) => (
            <VerticalTimelineElement
              key={index}
              date={news.date}
              iconStyle={{ background: "#232631", color: "#fff" }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={news.icon}
                    alt=""
                    className="w-[70%] h-[70%] object-contain"
                  />
                </div>
              }
              contentStyle={{
                background: "#1d1836",
                color: "#fff",
              }}
              contentArrowStyle={{ borderRight: "7px solid #232631" }}
            >
              <h3 className="text-white text-[24px] font-bold">{news.title}</h3>
              <p className="text-secondary text-[16px]">{news.description}</p>
                <a href={news.link} target="_blank" rel="noopener noreferrer">
                    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-300 transition duration-300 mx-auto block sm:w-auto w-full">
                        Learn More...
                    </button>
                </a>

            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default News;
