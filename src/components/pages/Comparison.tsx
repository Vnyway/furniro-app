import React from "react";
import BreadCrumbBig from "../general-components/BreadCrumbBig";
import GeneralComparison from "../comparison-components/GeneralComparison";
import Benefits from "../general-components/Benefits";

const Comparison: React.FC = () => {
  return (
    <div>
      <BreadCrumbBig title="Comparison" />
      <GeneralComparison />
      <Benefits />
    </div>
  );
};

export default Comparison;
