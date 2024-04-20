import React from "react";
import BreadCrumbSmall from "../BreadCrumbSmall";
import GeneralProductInfo from "./GeneralProductInfo";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import RelatedProducts from "./RelatedProducts";

const Product = () => {
  const { selectedProduct } = useTypedSelector((state) => state.products);
  return (
    selectedProduct && (
      <div>
        <BreadCrumbSmall title={selectedProduct.name} />
        <GeneralProductInfo />
        <RelatedProducts />
      </div>
    )
  );
};

export default Product;
