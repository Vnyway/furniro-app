import React from "react";
import BreadCrumbBig from "../general-components/BreadCrumbBig";
import Benefits from "../general-components/Benefits";
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
