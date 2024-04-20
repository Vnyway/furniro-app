import React from "react";
import Benefits from "../shop-components/Benefits";
import Products from "../shop-components/Products";
import BreadCrumbBig from "../BreadCrumbBig";

const Shop = () => {
  return (
    <div>
      <BreadCrumbBig title="Shop" />
      <Products />
      <Benefits />
    </div>
  );
};

export default Shop;
