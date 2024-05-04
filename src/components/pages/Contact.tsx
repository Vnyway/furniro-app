import React from "react";
import BreadCrumbBig from "../general-components/BreadCrumbBig";
import GeneralContact from "../contact-components/GeneralContact";
import Benefits from "../general-components/Benefits";

const Contact: React.FC = () => {
  return (
    <main>
      <BreadCrumbBig title="Contact" />
      <GeneralContact />
      <Benefits />
    </main>
  );
};

export default Contact;
