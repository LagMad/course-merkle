import React, { useState, useEffect } from "react";

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

// Tailwind
// import Button from "../ui/Button";

// Chakra
import { Button } from "@chakra-ui/react";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Navbar behaviour
  // Navbar scroll behaviour: background colour changed after a set of threshold
  // const [isScrolled, setIsScrolled] = useState(false);

  // Navbar scroll behaviour: scroll down to disappear, scroll up to reappear
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
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

  // Navbar scroll behaviour: background colour changed after a set of threshold
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     const scrollThreshold = 150;

  //     if (scrollTop > scrollThreshold) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // Navbar scroll behaviour: scroll down to disappear, scroll up to reappear
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setVisible(false);
        setDropdownVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const socialLinks = [
    { icon: <IoMdMail />, url: "mailto:hizkiajeremmy@gmail.com" },
    { icon: <FaGithub />, url: "https://github.com/LagMad" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/hizkiajeremmy" },
    { icon: <BsMedium />, url: "https://medium.com" },
    { icon: <FaStackOverflow />, url: "https://stackoverflow.com" },
  ];

  const navLinks = [
    { label: "Projects", section: "projects" },
    { label: "Contact Me", section: "contact" },
  ];

  return (
    <nav
      className={`${
        // Navbar scroll behaviour: background colour changed after a set of threshold
        // isScrolled ? "bg-cust-black shadow-2xl shadow-[rgba(255,255,255,0.2)]" : "bg-transparent"}

        // Navbar scroll behaviour: scroll down to disappear, scroll up to reappear
        visible ? "translate-y-0" : "-translate-y-full"
      } bg-cust-black
       fixed w-full flex flex-row justify-end md:justify-center items-center text-white z-50 text-xl py-5 px-6 sm:px-16 md:px-20 lg:px-28 xl:px-32 transition-all duration-300 ease-in-out`}
    >
      {/* Desktop */}
      <div className="hidden md:flex flex-row justify-between items-center w-full">
        <div className="flex flex-row justify-start items-center md:gap-0 lg:gap-3">
          {/* Tailwind */}
          {socialLinks.map((link, index) => (
            // Tailwind
            // <Button
            //   key={index}
            //   className={`${isScrolled ? "bg-cust-black" : "bg-transparent"}`}
            //   variation="primary"
            //   onClick={() => handleIconClick(link.url)}
            // >
            // {React.cloneElement(link.icon, {
            //   className: "w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10",
            // })}
            // </Button>

            // Chakra
            <Button
              key={index}
              variant={"ghost"}
              className="hover:text-black"
              onClick={() => handleIconClick(link.url)}
            >
              {React.cloneElement(link.icon, {
                className: "w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10",
              })}
            </Button>
          ))}
        </div>
        <div className="flex flex-row justify-end gap-3">
          {/* Tailwind */}
          {/* {navLinks.map((link, index) => (
            <Button
              key={index}
              className={`${isScrolled ? "bg-cust-black" : "bg-transparent"}`}
              variation="primary"
              onClick={() => scrollToSection(link.section)}
            >
              {link.label}
            </Button>
          ))} */}

          {/* Chakra */}
          <Button
            variant={"ghost"}
            className="hover:text-black"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </Button>
          <Button
            variant={"ghost"}
            className="hover:text-black"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </Button>
        </div>
      </div>

      {/* Mobile */}
      <CDropdown dark direction="down" className="relative block md:hidden">
        {/* Tailwind */}
        {/* <Button
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
        </Button> */}

        {/* Chakra */}
        <Button variant={"ghost"} className="hover:text-black">
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
            dropdownVisible && visible ? "block" : "hidden"
          } absolute right-0 top-20 flex flex-col justify-center items-center w-max bg-cust-black rounded-2xl p-3 shadow-2xl shadow-[rgba(255,255,255,0.3)] gap-3`}
        >
          {socialLinks.map((link, index) => (
            <CDropdownItem key={index} className="w-full">
              {/* Tailwind */}
              {/* <Button
                variation="primary"
                className="w-full"
                onClick={() => handleIconClick(link.url)}
              >
                {React.cloneElement(link.icon, {
                  className: "w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10",
                })}
              </Button> */}

              {/* Chakra */}
              <Button
                variant={"ghost"}
                className="hover:text-black"
                onClick={() => handleIconClick(link.url)}
              >
                {React.cloneElement(link.icon, {
                  className: "w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10",
                })}
              </Button>
            </CDropdownItem>
          ))}

          {/* Tailwind */}
          {navLinks.map((link, index) => (
            <CDropdownItem key={index}>
              {/* Tailwind */}
              {/* <Button
                variation="primary"
                className="w-full"
                onClick={() => scrollToSection(link.section)}
              >
                {link.label}
              </Button> */}

              {/* Chakra */}
              <Button
                variant={"ghost"}
                className="hover:text-black"
                onClick={() => scrollToSection(link.section)}
              >
                {link.label}
              </Button>
            </CDropdownItem>
          ))}
        </CDropdownMenu>
      </CDropdown>
    </nav>
  );
};

export default Navbar;
