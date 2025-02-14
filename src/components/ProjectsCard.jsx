import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ProjectsCard = ({
  image,
  title = "lorem ipsum",
  description = "lorem ipsum dolor sit amet.",
  onClick = () => alert("click!"),
}) => {
  return (
    <button
      className="grid flex-col justify-center items-stretch group"
      onClick={onClick}
    >
      <div className="bg-cust-black w-full h-[600px] rounded-2xl overflow-hidden z-10">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt="project img"
        />
      </div>
      <div className="flex flex-col justify-between items-stretch gap-5 w-full h-max bg-white rounded-2xl pt-[80px] px-5 pb-5 z-0 -mt-[54px]">
        <div className="flex flex-col justify-start gap-5">
          <div className="font-bold text-cust-black text-3xl text-left line-clamp-1">
            {title}
          </div>
          <div className="text-gray-500 text-xl text-left line-clamp-2">
            {description}
          </div>
        </div>
        <div className="flex flex-row justify-start items-center gap-5 text-cust-black">
          <div className="font-semibold text-2xl">See More</div>
          <div className="translate-x-0 group-hover:translate-x-5 transform transition-all duration-300 ease-in-out">
            <FaArrowRightLong size={32} />
          </div>
        </div>
      </div>
    </button>
  );
};

export default ProjectsCard;
