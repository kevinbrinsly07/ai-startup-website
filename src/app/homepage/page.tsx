import React, { Component } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Teams from "@/components/Teams";
import Specs from "@/components/Specs";

const page = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Teams />
      <Specs />
    </div>
  );
};

export default page;
