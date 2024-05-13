import React from "react";
import TopSection from "../home-components/TopSection";
import BrowseTheRange from "../home-components/BrowseTheRange";
import OurProducts from "../home-components/OurProducts";
import ShareSetup from "../home-components/ShareSetup";

const Home: React.FC = () => {
  return (
    <main>
      <TopSection />
      <BrowseTheRange />
      <OurProducts />
      <ShareSetup />
    </main>
  );
};

export default Home;
