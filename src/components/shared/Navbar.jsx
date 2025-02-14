import React from "react";
import Button from "../ui/Button";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";

const Navbar = () => {
  const handleIconClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <nav className="fixed w-full flex flex-row justify-between items-center text-white z-50 bg-cust-black text-xl py-5 px-32">
      <div className="flex flex-row justify-start items-center gap-3">
        <Button variation={"primary"} onClick={() => handleIconClick("mailto:hizkiajeremmy@gmail.com")}>
          <IoMdMail size={40} />
        </Button>
        <Button variation={"primary"} onClick={() => handleIconClick("https://github.com/LagMad")}>
          <FaGithub size={40} />
        </Button>
        <Button variation={"primary"} onClick={() => handleIconClick("https://linkedin.com/in/hizkiajeremmy")}>
          <FaLinkedin size={40} />
        </Button>
        <Button variation={"primary"} onClick={() => handleIconClick("https://medium.com")}>
          <BsMedium size={40} />
        </Button>
        <Button variation={"primary"} onClick={() => handleIconClick("https://stackoverflow.com")}>
          <FaStackOverflow size={40} />
        </Button>
      </div>
      <div className="flex flex-row justify-end gap-3">
        <Button variation={"primary"} onClick={() => alert("click!")}>Projects</Button>
        <Button variation={"primary"} onClick={() => alert("click!")}>Contact Me</Button>
      </div>
    </nav>
  );
};

export default Navbar;
