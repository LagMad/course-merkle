import React from "react";
import ProjectsCard from "../components/ProjectsCard";
import stockphoto from "../assets/images/stockphoto.jpg";
import { motion } from "framer-motion";

const Projects = ({ id }) => {
  return (
    <div
      id={id}
      className="flex flex-col bg-cust-green px-6 sm:px-16 md:px-20 lg:px-28 xl:px-32 py-16 gap-10 text-white"
    >

      {/* Title */}
      <motion.div
        className="text-left text-3xl lg:text-4xl font-bold"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            type: "spring",
            duration: 2,
            damping: 10,
            stiffness: 100,
          },
        }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
              duration: 1,
              ease: "easeOut"
            },
          }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <ProjectsCard
            image={stockphoto}
            title="React Space"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.empore modi ipsum assumenda et laborum omnis consequuntur, exercitationem veniam provident praesentium accusantium quaerat."
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
              duration: 1,
              ease: "easeOut"
            },
          }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <ProjectsCard
            image={stockphoto}
            title="React Space"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.empore modi ipsum assumenda et laborum omnis consequuntur, exercitationem veniam provident praesentium accusantium quaerat."
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
              duration: 1,
              ease: "easeOut"
            },
          }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <ProjectsCard
            image={stockphoto}
            title="React Space"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.empore modi ipsum assumenda et laborum omnis consequuntur, exercitationem veniam provident praesentium accusantium quaerat."
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
              duration: 1,
              ease: "easeOut"
            },
          }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <ProjectsCard
            image={stockphoto}
            title="React Space"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.empore modi ipsum assumenda et laborum omnis consequuntur, exercitationem veniam provident praesentium accusantium quaerat."
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
