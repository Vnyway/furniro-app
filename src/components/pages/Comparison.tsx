import React from "react";
import BreadCrumbBig from "../general-components/BreadCrumbBig";
import GeneralComparison from "../comparison-components/GeneralComparison";
import Benefits from "../general-components/Benefits";

const Comparison: React.FC = () => {
  return (
    <main>
      <BreadCrumbBig title="Comparison" />
      <GeneralComparison />
      <Benefits />
    </main>
  );
};

export default Comparison;
