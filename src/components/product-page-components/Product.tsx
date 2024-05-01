import React, { useEffect } from "react";
import BreadCrumbSmall from "../BreadCrumbSmall";
import GeneralProductInfo from "./GeneralProductInfo";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import RelatedProducts from "./RelatedProducts";
import { useParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";

const Product = () => {
  const { selectedProduct } = useTypedSelector((state) => state.products);
  const { setSelectedProduct } = useActions();
  const { productId } = useParams();
  useEffect(() => {
    setSelectedProduct(Number(productId));
  }, []);
  return (
    <div>
      {selectedProduct && <BreadCrumbSmall title={selectedProduct?.name} />}
      <GeneralProductInfo />
      <RelatedProducts />
    </div>
  );
};

export default Product;
