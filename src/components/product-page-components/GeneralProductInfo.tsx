import React, { useEffect, useState } from "react";
import starImg from "../../images/star-img.png";
import halfStarImg from "../../images/half-star-img.png";
import facebookImg from "../../images/share-facebook-icon.png";
import linkedinImg from "../../images/share-linked-in-image.png";
import twitterImg from "../../images/share-twitter-image.png";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { useParams } from "react-router-dom";

const GeneralProductInfo: React.FC = () => {
  const { productId } = useParams();
  const { selectedProduct, boughtProducts } = useTypedSelector(
    (state) => state.products
  );
  const { setProductsToCart, setProductsToCompared, setSelectedProduct } =
    useActions();

  useEffect(() => {
    setSelectedProduct(Number(productId));
  }, []);

  const [count, setCount] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState(1);
  const [selectedColor, setSelectedColor] = useState(1);
  const findInBought = () => {
    for (let i = 0; i < boughtProducts.length; i++) {
      if (boughtProducts[i].id === selectedProduct?.id) {
        return i;
      }
      return undefined;
    }
  };
  const renderStars = () => {
    if (selectedProduct) {
      const fullStars = Math.floor(selectedProduct.rating);
      const hasHalfStar = selectedProduct.rating % 1 !== 0;

      const starElements = [];

      for (let i = 0; i < fullStars; i++) {
        starElements.push(<img key={i} src={starImg} alt="star" />);
      }

      if (hasHalfStar) {
        starElements.push(<img key="half" src={halfStarImg} alt="half-star" />);
      }

      return starElements;
    }
  };
  const productIndex = findInBought();
  const stars = renderStars();
  return (
    selectedProduct && (
      <section className="border-b-[2px] border-b-[#D9D9D9]">
        <div className="container mx-auto mt-[40px] flex flex-col md:flex-row gap-[20px] md:gap-[70px] px-[20px]">
          <div>
            <img
              src={selectedProduct.image}
              alt="mainImg"
              className="w-[300px] md:w-[481px] rounded-[10px]"
            />
          </div>

          <div className="font-poppins flex flex-col">
            <h1 className="font-normal text-[#000000] text-[36px] md:text-[42px]">
              {selectedProduct.name}
            </h1>
            <h3 className="font-medium text-customGray1 text-[20px] md:text-[24px]">
              Rp {selectedProduct.currentPrice.toLocaleString("id-ID")}
            </h3>
            <div className="flex items-center my-[15px]">
              <div className="flex gap-[5px] pr-[20px]">{stars}</div>
              <div className="pl-[20px] border-l-customGray1 border-l-[1px] font-normal text-[13px] text-customGray1">
                {selectedProduct.rating} stars
              </div>
            </div>
            <p className="font-normal text-[#000000] text-[13px] mb-[15px] md:w-[424px]">
              {selectedProduct.longerDescription}
            </p>
            <p className="font-normal text-customGray1 text-[14px] mb-[10px]">
              Size
            </p>
            <div className="flex gap-[10px] mb-[15px]">
              <button
                onClick={() => setSelectedSize(1)}
                className={
                  selectedSize === 1
                    ? "size-[30px] bg-customBrown rounded-[5px] font-normal text-[#FFFFFF] text-[13px]"
                    : "size-[30px] bg-[#F9F1E7] rounded-[5px] font-normal text-[#000000] text-[13px]"
                }>
                L
              </button>
              <button
                onClick={() => setSelectedSize(2)}
                className={
                  selectedSize === 2
                    ? "size-[30px] bg-customBrown rounded-[5px] font-normal text-[#FFFFFF] text-[13px]"
                    : "size-[30px] bg-[#F9F1E7] rounded-[5px] font-normal text-[#000000] text-[13px]"
                }>
                XL
              </button>
              <button
                onClick={() => setSelectedSize(3)}
                className={
                  selectedSize === 3
                    ? "size-[30px] bg-customBrown rounded-[5px] font-normal text-[#FFFFFF] text-[13px]"
                    : "size-[30px] bg-[#F9F1E7] rounded-[5px] font-normal text-[#000000] text-[13px]"
                }>
                XS
              </button>
            </div>
            <p className="font-normal text-customGray1 text-[14px] mb-[10px]">
              Color
            </p>
            <div className="flex gap-[10px] mb-[30px] items-center">
              {selectedColor === 1 ? (
                <div
                  onClick={() => setSelectedColor(1)}
                  className="cursor-pointer size-[36px] rounded-full  p-[2px] border-[1px] border-[#816DFA]">
                  <div className="bg-[#816DFA] size-[30px] rounded-full"></div>
                </div>
              ) : (
                <div
                  onClick={() => setSelectedColor(1)}
                  className="cursor-pointer bg-[#816DFA] size-[30px] rounded-full"></div>
              )}
              {selectedColor === 2 ? (
                <div
                  onClick={() => setSelectedColor(2)}
                  className="cursor-pointer size-[36px] rounded-full  p-[2px] border-[1px] border-[#000000]">
                  <div className="bg-[#000000] size-[30px] rounded-full"></div>
                </div>
              ) : (
                <div
                  onClick={() => setSelectedColor(2)}
                  className="cursor-pointer bg-[#000000] size-[30px] rounded-full"></div>
              )}
              {selectedColor === 3 ? (
                <div
                  onClick={() => setSelectedColor(3)}
                  className="cursor-pointer size-[36px] rounded-full  p-[2px] border-[1px] border-customBrown">
                  <div className="bg-customBrown size-[30px] rounded-full"></div>
                </div>
              ) : (
                <div
                  onClick={() => setSelectedColor(3)}
                  className="cursor-pointer bg-customBrown size-[30px] rounded-full"></div>
              )}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-[20px] md:gap-[10px] mb-[40px] text-[14px] md:text-[16px]">
              <input
                className="outline-none h-[64px] border-[1px] border-customGray1 rounded-[10px] text-center"
                value={count.toString()}
                onChange={(e) => {
                  setCount(Number(e.target.value));
                }}
                type="number"
              />
              <button
                onClick={() => {
                  productIndex !== undefined
                    ? setProductsToCart(
                        boughtProducts[productIndex],
                        boughtProducts[productIndex].count + count
                      )
                    : setProductsToCart(
                        selectedProduct,
                        selectedProduct.count + count
                      );
                }}
                className=" h-[64px] border-[1px] border-[#000000] rounded-[15px]">
                Add To Cart
              </button>
              <button
                onClick={() => setProductsToCompared(selectedProduct)}
                className=" h-[64px] border-[1px] border-[#000000] rounded-[15px]">
                + Compare
              </button>
            </div>
            <div className="border-t-[1px] border-t[#D9D9D9] pt-[40px] pb-[60px] text-customGray1">
              <ul className="flex flex-col gap-[10px]">
                <li>SKU : SS00{selectedProduct.id}</li>
                <li>Category : {selectedProduct.category}</li>
                <li className="flex gap-[4px]">
                  Tags :{" "}
                  {selectedProduct.tags.map((tag, index) => (
                    <React.Fragment key={index}>
                      <p>{tag}</p>
                      {index < selectedProduct.tags.length - 1 && ", "}
                    </React.Fragment>
                  ))}
                </li>
                <li className="flex gap-[10px]">
                  Share :
                  <div className="flex gap-[10px] items-center">
                    <img src={facebookImg} className="size-[20px]" alt="" />
                    <img src={linkedinImg} className="size-[20px]" alt="" />
                    <img src={twitterImg} className="size-[25px]" alt="" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default GeneralProductInfo;
