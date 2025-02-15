import React, { useState, useEffect } from "react";
import Button from "../ui/Button";
import { IoMdMail } from "react-icons/io";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import {
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleIconClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollThreshold = 150;

      if (scrollTop > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? "bg-cust-black shadow-2xl shadow-[rgba(255,255,255,0.2)]" : "bg-transparent"
      } fixed w-full flex flex-row justify-end md:justify-center items-center text-white z-50 text-xl py-5 px-6 sm:px-16 md:px-20 lg:px-28 xl:px-32 transition-all duration-300 ease-in-out`}
    >
      {/* Mobile */}
      <div className="hidden md:flex flex-row justify-between items-center w-full">
        <div className="flex flex-row justify-start items-center md:gap-0 lg:gap-3">
          <Button
            className={`${isScrolled ? "bg-cust-black" : "bg-transparent"}`}
            variation={"primary"}
            onClick={() => handleIconClick("mailto:hizkiajeremmy@gmail.com")}
          >
            <IoMdMail className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
          </Button>
          <Button
            className={`${isScrolled ? "bg-cust-black" : "bg-transparent"}`}
            variation={"primary"}
            onClick={() => handleIconClick("https://github.com/LagMad")}
          >
            <FaGithub className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
          </Button>
          <Button
            className={`${isScrolled ? "bg-cust-black" : "bg-transparent"}`}
            variation={"primary"}
            onClick={() =>
              handleIconClick("https://linkedin.com/in/hizkiajeremmy")
            }
          >
            <FaLinkedin className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
          </Button>
          <Button
            className={`${isScrolled ? "bg-cust-black" : "bg-transparent"}`}
            variation={"primary"}
            onClick={() => handleIconClick("https://medium.com")}
          >
            <BsMedium className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
          </Button>
          <Button
            className={`${isScrolled ? "bg-cust-black" : "bg-transparent"}`}
            variation={"primary"}
            onClick={() => handleIconClick("https://stackoverflow.com")}
          >
            <FaStackOverflow className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
          </Button>
        </div>
        <div className="flex flex-row justify-end gap-3">
          <Button
            className={`${isScrolled ? "bg-cust-black" : "bg-transparent"}`}
            variation={"primary"}
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </Button>
          <Button
            className={`${isScrolled ? "bg-cust-black" : "bg-transparent"}`}
            variation={"primary"}
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </Button>
        </div>
      </div>

      {/* Desktop */}
      <CDropdown dark direction="down" className="relative block md:hidden">
        <Button
          className={`${isScrolled ? "bg-cust-black" : "bg-transparent"}`}
          variation={"primary"}
        >
          <CDropdownToggle
            className="flex justify-end items-end"
            color="secondary"
            onClick={toggleDropdown}
          >
            <FiMenu />
          </CDropdownToggle>
        </Button>
        <CDropdownMenu
          className={`${
            visible ? "block" : "hidden"
          } absolute right-0 top-10 flex flex-col justify-center items-center w-max bg-cust-black rounded-2xl p-3 shadow-2xl shadow-[rgba(255,255,255,0.3)] gap-3`}
        >
          <CDropdownItem className="w-full custom-dropdown-item">
            <Button
              variation={"primary"}
              className={"w-full"}
              onClick={() => handleIconClick("mailto:hizkiajeremmy@gmail.com")}
            >
              <IoMdMail className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
            </Button>
          </CDropdownItem>
          <CDropdownItem>
            <Button
              variation={"primary"}
              className={"w-full"}
              onClick={() => handleIconClick("https://github.com/LagMad")}
            >
              <FaGithub className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
            </Button>
          </CDropdownItem>
          <CDropdownItem className="w-full">
            <Button
              variation={"primary"}
              className={"w-full"}
              onClick={() =>
                handleIconClick("https://linkedin.com/in/hizkiajeremmy")
              }
            >
              <FaLinkedin className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
            </Button>
          </CDropdownItem>
          <CDropdownItem>
            <Button
              variation={"primary"}
              className={"w-full"}
              onClick={() => handleIconClick("https://medium.com")}
            >
              <BsMedium className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
            </Button>
          </CDropdownItem>
          <CDropdownItem>
            <Button
              variation={"primary"}
              className={"w-full"}
              onClick={() => handleIconClick("https://stackoverflow.com")}
            >
              <FaStackOverflow className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
            </Button>
          </CDropdownItem>
          <CDropdownItem>
            <Button
              className={"text-left w-full"}
              variation={"primary"}
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </Button>
          </CDropdownItem>
          <CDropdownItem>
            <Button
              variation={"primary"}
              className={"w-full"}
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </nav>
  );
};

export default Navbar;
