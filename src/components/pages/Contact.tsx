import React from "react";
import BreadCrumbBig from "../BreadCrumbBig";
import GeneralContact from "../contact-components/GeneralContact";
import Benefits from "../shop-components/Benefits";

const Contact = () => {
  return (
    <div>
      <BreadCrumbBig title="Contact" />
      <GeneralContact />
      <Benefits />
    </div>
  );
};

export default Contact;
