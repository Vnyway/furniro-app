import React from "react";
import BreadCrumbBig from "../BreadCrumbBig";
import GeneralComparison from "../comparison-components/GeneralComparison";
import Benefits from "../shop-components/Benefits";

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
