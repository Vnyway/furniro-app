import React from "react";
import Benefits from "../general-components/Benefits";
import Products from "../shop-components/Products";
import BreadCrumbBig from "../general-components/BreadCrumbBig";

const Shop: React.FC = () => {
  return (
    <main>
      <BreadCrumbBig title="Shop" />
      <Products />
      <Benefits />
    </main>
  );
};

export default Shop;
