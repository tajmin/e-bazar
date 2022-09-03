import React, { useContext } from "react";
import ProductCard from "../../components/Product-card/ProductCard";
import { ProductContext } from "../../contexts/product.context";
import "./Shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default Shop;
