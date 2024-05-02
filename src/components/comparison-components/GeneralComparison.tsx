import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ICard } from "../../types/types";
import { Link } from "react-router-dom";
import starImg from "../../images/star-img.png";
import halfStarImg from "../../images/half-star-img.png";
import { useActions } from "../../hooks/useActions";

const GeneralComparison: React.FC = () => {
  const { comparedProducts, boughtProducts } = useTypedSelector(
    (state) => state.products
  );
  const { setProductsToCart } = useActions();
  const renderStars = (card: ICard) => {
    const fullStars = Math.floor(card.rating);
    const hasHalfStar = card.rating % 1 !== 0;

    const starElements = [];

    for (let i = 0; i < fullStars; i++) {
      starElements.push(<img key={i} src={starImg} alt="star" />);
    }

    if (hasHalfStar) {
      starElements.push(<img key="half" src={halfStarImg} alt="half-star" />);
    }

    return starElements;
  };

  const findInBought = (card: ICard) => {
    for (let i = 0; i < boughtProducts.length; i++) {
      if (boughtProducts[i].id === card.id) {
        return i;
      }
      return undefined;
    }
  };

  return (
    <div className="overflow-x-auto mb-[60px]">
      <table className="border-collapse whitespace-nowrap container mx-auto font-poppins text-[#000000]">
        <thead>
          <tr className="h-[250px]">
            <td className="w-[250px] pl-[40px] text-start">
              <h1 className="text-[#000000] text-[22px] md:text-[28px] mt-[40px]">
                Go to Product
                <br />
                page for more
                <br />
                Products
              </h1>
              <Link to="/shop">
                <button className="text-[#727272] text-[16px] md:text-[20px] border-b-[2px] border-b-[#727272] mt-[15px]">
                  View More
                </button>
              </Link>
            </td>
            {comparedProducts.map((card) => {
              const stars = renderStars(card);
              return (
                <td className="pl-[40px] py-[40px]">
                  <div className="md:mt-[40px] w-[300px]">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="rounded-[10px] w-[200px]"
                    />
                    <h2 className="font-medium text-[20px] md:text-[24px] mt-[10px]">
                      {card.name}
                    </h2>
                    <h3 className="font-medium text-[16px] md:text-[18px]">
                      Rp {card.currentPrice.toLocaleString("id-ID")}
                    </h3>
                    <div className="flex items-center gap-[10px]">
                      <div className="flex">{stars}</div>
                      <p className="pl-[10px] border-l-[1px] border-l-[#9F9F9F]">
                        {card.rating} stars
                      </p>
                    </div>
                  </div>
                </td>
              );
            })}
            <td></td>
          </tr>
        </thead>
        <tbody className="border-t-[1px] border-b-[1px] font-normal text-[16px] md:text-[20px]">
          <tr>
            <td className="font-medium text-[22px] md:text-[28px] w-[300px] pl-[40px] py-[30px] border-r-[1px]">
              Properties
            </td>
            {comparedProducts.map((element) => (
              <td className="border-l-[1px]"></td>
            ))}
          </tr>
          <tr>
            <td className="py-[5px] pl-[40px] w-[300px] border-r-[1px]">SKU</td>
            {comparedProducts.map((element) => (
              <td className="border-l-[1px] pl-[40px]">SS00{element.id}</td>
            ))}
          </tr>
          <tr>
            <td className="py-[5px] pl-[40px] w-[300px] border-r-[1px]">
              Label
            </td>
            {comparedProducts.map((element) => {
              if (element.label.trim() === "") {
                return <td className="border-l-[1px] pl-[40px]">None</td>;
              }
              return (
                <td className="border-l-[1px] pl-[40px]">{element.label}</td>
              );
            })}
          </tr>
          <tr>
            <td className="py-[5px] w-[300px] pl-[40px] border-r-[1px]">
              Category
            </td>
            {comparedProducts.map((element) => (
              <td className="border-l-[1px] pl-[40px]">{element.category}</td>
            ))}
          </tr>
          <tr>
            <td className="py-[5px] w-[300px] pl-[40px] border-r-[1px]">
              Tags
            </td>
            {comparedProducts.map((element) => (
              <td className="border-l-[1px] pl-[40px]">
                {element.tags.join(", ")}
              </td>
            ))}
          </tr>
          <tr>
            <td className="py-[80px] border-r-[1px]"></td>
            {comparedProducts.map((element) => {
              const productIndex = findInBought(element);
              return (
                <td className="border-l-[1px] pl-[40px]">
                  <button
                    onClick={() => {
                      productIndex !== undefined
                        ? setProductsToCart(
                            boughtProducts[productIndex],
                            boughtProducts[productIndex].count + 1
                          )
                        : setProductsToCart(element, element.count + 1);
                    }}
                    className="px-[48px] py-[17px] text-white bg-customBrown">
                    Add To Cart
                  </button>
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GeneralComparison;
