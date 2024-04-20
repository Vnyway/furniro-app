import React from "react";
import BreadCrumbBig from "../BreadCrumbBig";
import Benefits from "../shop-components/Benefits";
import GeneralCart from "../cart-components/GeneralCart";

const Cart = () => {
  return (
    <>
      <BreadCrumbBig title="Cart" />
      <GeneralCart />
      <Benefits />
    </>
  );
};

export default Cart;
