import React from "react";
import CategoryItem from "../category-item/category-item";
import "./categories.styles.scss";

const categories = [
  {
    id: 6,
    title: "smartphones",
    imageUrl: "https://i.ibb.co/MCNkJ6Z/phones-2.jpg",
    route: "shop/smartphones",
  },
  {
    id: 7,
    title: "smartwatch",
    imageUrl: "https://i.ibb.co/100jjZd/smartwatches.jpg",
    route: "shop/smartwatch",
  },
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: "shop/mens",
  },
];

const Categories = () => {
  return (
    <div className="categories-container">
      <div className="two-items-grid">
        {categories
          .map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))
          .slice(0, 2)}
      </div>
      <div className="three-items-grid">
        {categories
          .map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))
          .slice(2, 5)}
      </div>
      <div className="two-items-grid">
        {categories
          .map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))
          .slice(5)}
      </div>
    </div>
  );
};

export default Categories;
