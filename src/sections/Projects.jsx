import React from "react";
import ProjectsCard from "../components/ProjectsCard";
import stockphoto from "../assets/images/stockphoto.jpg";

const Projects = () => {
  return (
    <div className="flex flex-col bg-cust-green px-32 py-16 gap-10">
      <div className="text-left text-4xl font-bold">Featured Projects</div>
      <div className="grid grid-cols-2 gap-8">
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
