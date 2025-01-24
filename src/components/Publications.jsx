import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { publications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const Publications = () => {
  return (
    <>

      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Our Research</p>
        <h2 className={`${styles.sectionHeadText}`}>Publications.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
            Explore our publications showcasing our research and contributions to various domains.
        </motion.p>
      </div>

     {/* Table Container */}
<div className="mt-10 overflow-x-auto p-[1px] rounded-lg shadow-lg bg-gradient-to-r from-green-500 to-pink-500">
  <div className="bg-gray-900 rounded-lg p-4">
    {/* Scrollable Table */}
    <div className="max-h-[calc(10*3rem)] overflow-y-scroll">
      <table className="min-w-full table-auto text-white">
        <thead className="sticky top-0 bg-gray-800">
          <tr className="text-center">
            <th className="py-2 px-2 sm:py-3 sm:px-4 text-sm sm:text-lg font-semibold text-gray-300">
              Title
            </th>
            <th className="py-2 px-2 sm:py-3 sm:px-4 text-sm sm:text-lg font-semibold text-gray-300">
              Venue
            </th>
            <th className="py-2 px-2 sm:py-3 sm:px-4 text-sm sm:text-lg font-semibold text-gray-300">
              Year
            </th>
            <th className="py-2 px-2 sm:py-3 sm:px-4 text-sm sm:text-lg font-semibold text-gray-300">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {publications.map((publication) => (
            <tr
              key={publication.id}
              className="border-b border-gray-700 hover:bg-gray-800 text-center"
            >
              <td className="py-2 px-2 sm:py-3 sm:px-4 text-xs sm:text-sm text-gray-200">
                {publication.title}
              </td>
              <td className="py-2 px-2 sm:py-3 sm:px-4 text-xs sm:text-sm text-gray-400">
                {publication.venue || "N/A"}
              </td>
              <td className="py-2 px-2 sm:py-3 sm:px-4 text-xs sm:text-sm text-gray-400">
                {publication.year}
              </td>
              <td className="py-2 px-2 sm:py-3 sm:px-4 text-xs sm:text-sm">
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-1 px-2 sm:py-2 sm:px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    Read More...
                  </button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>



    </>
  );
};

export default SectionWrapper(Publications, "");
