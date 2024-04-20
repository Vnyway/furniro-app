import React from "react";
import BreadCrumbBig from "../BreadCrumbBig";
import Benefits from "../shop-components/Benefits";
import CheckoutForm from "../checkout-form/CheckoutForm";

const Checkout: React.FC = () => {
  return (
    <>
      <BreadCrumbBig title="Checkout" />
      <CheckoutForm />
      <Benefits />
    </>
  );
};

export default Checkout;
