import React from "react";
import ProjectsCard from "../components/ProjectsCard";
import stockphoto from "../assets/images/stockphoto.jpg";

const Projects = ({ id }) => {
  return (
    <div id={id} className="flex flex-col bg-cust-green px-6 sm:px-16 md:px-20 lg:px-28 xl:px-32 py-16 gap-10 text-white">
      <div className="text-left text-2xl md:text-3xl lg:text-4xl font-bold">Featured Projects</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectsCard
          image={stockphoto}
          title="React Space"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.empore modi ipsum assumenda et laborum omnis consequuntur, exercitationem veniam provident praesentium accusantium quaerat."
        />
        <ProjectsCard
          image={stockphoto}
          title="React Space"
          description="Lorem ipsum, dolor sit amet consesumenda et laborum omnis consequuntur, exercitationem veniam provident praesentium accusantium quaerat."
        />
        <ProjectsCard
          image={stockphoto}
          title="React Space"
          description="Lorem ipsum, dolorum tempore modi ipsum assumenda et laborum omnis consequuntur, exercitationem veniam provident praesentium accusantium quaerat."
        />
        <ProjectsCard
          image={stockphoto}
          title="React Space"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia unde numquam expedita. Consequatur perferendis magnam dolorum tempore modi ipsum assumenda et laborum omnis consequuntur, exercitationem veniam provident praesentium accusantium quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia unde numquam expedita. Consequatur perferendis magnam dolorum tempore modi ipsum assumenda et laborum omnis consequuntur, exercitationem veniam provident praesentium accusantium quaerat."
        />
      </div>
    </div>
  );
};

export default Projects;
