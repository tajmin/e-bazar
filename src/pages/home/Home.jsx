import React from "react";
import Categories from "../../components/categories/categories";
import HeroSlide from "../../components/HeroSlide/HeroSlide";
import { Container } from "../../Global.styles";

const Home = () => {
  return (
    <Container>
      <HeroSlide />
      <Categories />
    </Container>
  );
};

export default Home;
