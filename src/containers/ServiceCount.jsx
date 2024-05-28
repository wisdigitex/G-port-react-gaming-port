import React from "react";
import { ServiceCard } from "../components";

const ServiceCount = () => {
  return (
    <div className="w-full py-6 lg:py-24 px-4  mt-24 flex items-center justify-center flex-wrap gap-8">
      <ServiceCard count={"300+"} text={"Game Project"} />
      <ServiceCard count={"250+"} text={"Happy Customers"} />
      <ServiceCard count={"50+"} text={"Full-Stack Projects"} />
      <ServiceCard count={"100+"} text={"Scripting Projects"} />
    </div>
  );
};

export default ServiceCount;
