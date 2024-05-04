import React from "react";
import BreadCrumbBig from "../general-components/BreadCrumbBig";
import Benefits from "../general-components/Benefits";
import GeneralCart from "../cart-components/GeneralCart";

const Cart: React.FC = () => {
  return (
    <main>
      <BreadCrumbBig title="Cart" />
      <GeneralCart />
      <Benefits />
    </main>
  );
};

export default Cart;
