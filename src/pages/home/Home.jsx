import React, { Fragment } from "react";
import Categories from "../../components/categories/categories";
import HeroSlide from "../../components/HeroSlide/HeroSlide";

const Home = () => {
  return (
    <Fragment>
      <HeroSlide></HeroSlide>
      <Categories />;
    </Fragment>
  );
};

export default Home;
