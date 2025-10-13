import React, { Component } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Teams from "@/components/Teams";
import Specs from "@/components/Specs";
import SEO from "@/components/SEO";
import Clients from "@/components/Clients";
import Pricing from "@/components/Pricing";
import ForEveryone from "@/components/ForEveryone";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Teams />
      <Specs />
      <SEO />
      <Clients />
      <Pricing />
      <ForEveryone />
      <Footer />
    </div>
  );
};

export default page;
