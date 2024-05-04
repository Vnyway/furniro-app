import React, { useEffect } from "react";
import BreadCrumbSmall from "../general-components/BreadCrumbSmall";
import GeneralProductInfo from "../product-page-components/GeneralProductInfo";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import RelatedProducts from "../product-page-components/RelatedProducts";
import { useParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";

const Product: React.FC = () => {
  const { selectedProduct } = useTypedSelector((state) => state.products);
  const { setSelectedProduct } = useActions();
  const { productId } = useParams();
  useEffect(() => {
    setSelectedProduct(Number(productId));
  }, []);
  return (
    <main>
      {selectedProduct && <BreadCrumbSmall title={selectedProduct?.name} />}
      <GeneralProductInfo />
      <RelatedProducts />
    </main>
  );
};

export default Product;
