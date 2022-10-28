import React from "react";
import Categories from "../../components/categories/categories";
import HeroSlide from "../../components/HeroSlide/HeroSlide";
import { SecondaryContainer } from "../../Global.styles";

const Home = () => {
  return (
    <SecondaryContainer>
      <HeroSlide />
      <Categories />
    </SecondaryContainer>
  );
};

export default Home;
