import React, { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import optionsData from "../data/optionDataDummy.json";
import { motion } from "framer-motion";

const Contact = ({ id }) => {
  const options = optionsData.enquiryOptions;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enquiry: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: "" }); // Clear error when user types
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};

    if (!formData.name.trim()) validationErrors.name = "Name is required";
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      validationErrors.email = "Invalid email format";
    }
    if (!formData.enquiry.trim())
      validationErrors.enquiry = "Please select an enquiry type";
    if (!formData.message.trim())
      validationErrors.message = "Message is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert("Form submitted successfully!");
  };

  return (
    <div
      id={id}
      className="w-full flex flex-col justify-center items-center bg-cust-purple px-6 sm:px-16 md:px-32 py-16 gap-8 text-white overflow-hidden"
    >
      <motion.div
        className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3 text-center sm:text-left text-3xl lg:text-4xl font-bold -ml-0 md:-ml-10"
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
        Contact Me
      </motion.div>
      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col w-full md:w-3/4 lg:w-1/2 xl:w-1/3 gap-5"
        initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              duration: 0.7,
              ease: "easeOut"
            },
          }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
      >
        <Input
          label={"Name"}
          placeholder={"Your name here"}
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          error={errors.name}
        />
        <Input
          label={"Email"}
          placeholder={"your_email@example.com"}
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          error={errors.email}
        />
        <Input
          label={"Type of enquiry"}
          placeholder={"Your enquiry"}
          type={"dropdown"}
          options={options}
          value={formData.enquiry}
          onChange={(value) => handleChange("enquiry", value)}
          error={errors.enquiry}
        />
        <Input
          label={"Your message"}
          placeholder={"Your message here"}
          type={"textarea"}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          error={errors.message}
        />
        <Button type={"submit"} variation={"secondary"} className={"w-full"}>
          Submit
        </Button>
      </motion.form>
    </div>
  );
};

export default Contact;
