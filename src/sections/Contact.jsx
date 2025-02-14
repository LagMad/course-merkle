import React from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const Contact = () => {
const options = ["option 1", "option 2", "option 3"]

  return (
    <div className="w-full flex flex-col justify-center items-center bg-cust-purple px-32 py-16 gap-8">
      <div className="w-1/3 text-left text-3xl font-bold -ml-10">
        Contact Me
      </div>
      <div className="flex flex-col w-1/3 gap-5">
        <Input label={"Name"} placeholder={"Your name here"} />
        <Input label={"Email"} placeholder={"your_email@example.com"} />
        <Input
          label={"Type of enquiry"}
          placeholder={"Your enquiry"}
          type={"dropdown"}
          options={options}
          className={"mb-5"}
        />
        <Input
          label={"Your message"}
          placeholder={"Your message here"}
          type={"textarea"}
        />
        <Button variation={"secondary"} className={"w-full"}>Submit</Button>
      </div>
    </div>
  );
};

export default Contact;
