// import { Slider } from "@mui/material";

import React from "react";
import Slider from "../../components/Slider/Slider";
import FeatureProducts from "../../components/Feature/FeatureProducts";

import "./Home.scss";
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <div className="home">
      
      <Slider />
      <FeatureProducts type="feature" />
      <Categories />
      <FeatureProducts type="trending" />
      <Contact />

    </div>
  );
};

export default Home;
