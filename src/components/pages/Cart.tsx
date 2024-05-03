import React from "react";
import BreadCrumbBig from "../general-components/BreadCrumbBig";
import Benefits from "../general-components/Benefits";
import GeneralCart from "../cart-components/GeneralCart";

const Cart: React.FC = () => {
  return (
    <>
      <BreadCrumbBig title="Cart" />
      <GeneralCart />
      <Benefits />
    </>
  );
};

export default Cart;
