import React, { useRef, useState } from "react";
import logo from "../../images/logo-site.png";
import search from "../../images/search-icon.png";
import cart from "../../images/cart-icon.png";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import closeCartImg from "../../images/close-cart-icon.png";
import deleteProductImg from "../../images/delete-product.png";
import { useActions } from "../../hooks/useActions";
import { ICard } from "../../types/types";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { calculateTotalPrice } from "../../functions/calculateTotalPrice";

const Header: React.FC = () => {
  const { boughtProducts } = useTypedSelector((state) => state.products);
  const { setSelectedProduct } = useActions();
  const [cartOpened, setCartOpened] = useState<boolean>(false);
  const [searchOpened, setSearchOpened] = useState<boolean>(false);
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  const handleClick = () => {
    setMenuOpened(!menuOpened);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const cartHandler = () => {
    setCartOpened(!cartOpened);
  };

  const searchHandler = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    setSearchOpened(!searchOpened);
    if (!searchOpened && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const { setSearchTerm, setProductsToCart } = useActions();

  const calculteTotalCount = (products: ICard[]) => {
    let totalCount = 0;
    products.forEach((product) => {
      totalCount += product.count;
    });
    return totalCount;
  };

  return (
    <header className="overflow-x-hidden container mx-auto w-full text-nowrap bg-white h-20 text-base 8xl:t4xt-lg">
      <div
        className={
          !cartOpened
            ? "block absolute z-50 top-0 right-0 min-[600px]:w-[417px] h-[746px] bg-white translate-x-[417px] ease-in-out duration-500 border-black border-[1px] px-[30px] py-[30px]"
            : "block absolute z-50 top-0 right-0 w-full min-[600px]:w-[417px] h-[746px] bg-white ease-in-out duration-500 border-black border-[1px] px-[30px] py-[30px]"
        }>
        <div className="flex justify-between items-center pb-[30px] border-b-[1px] border-b-[#D9D9D9]">
          <h2 className="font-poppins font-semibold text-[#000000] text-[24px]">
            Shopping Cart
          </h2>
          <img
            src={closeCartImg}
            alt="close-cart"
            className="w-[17px] hover:scale-125 transition-all ease-in-out duration-300 cursor-pointer"
            onClick={cartHandler}
          />
        </div>
        <div className="my-[20px] h-[500px] overflow-x-visible overflow-y-auto">
          {boughtProducts.map((product) => {
            if (product.count > 0) {
              return (
                <div
                  key={product.id}
                  className="flex justify-between items-center my-[20px]">
                  <Link
                    to={`/product/${product.id}`}
                    onClick={() => {
                      setSelectedProduct(product.id);
                      window.scrollTo(0, 0);
                    }}
                    className="pl-[5px]">
                    <img
                      src={product.image}
                      alt="product-img"
                      className="size-[105px] hover:scale-110 transition-all ease-in-out duration-300 rounded-[10px]"
                    />
                  </Link>
                  <div className="flex flex-col w-[130px]">
                    <p className="font-poppins font-normal text-[16px] text-[#000000] mb-[10px]">
                      {product.name}
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="font-poppins font-light text-[16px] text-[#000000]">
                        {product.count}
                      </p>
                      <p className="font-poppins font-light text-[16px] text-[#000000]">
                        X
                      </p>
                      <p className="font-poppins font-medium text-[12px] text-customBrown">
                        Rp {product.currentPrice.toLocaleString("id-ID")}
                      </p>
                    </div>
                  </div>
                  <div className="size-[25px]">
                    <img
                      onClick={() => {
                        setProductsToCart(product, 0);
                      }}
                      src={deleteProductImg}
                      alt="delete-product"
                      className="size-[20px] hover:scale-125 cursor-pointer ease-in-out transition-all duration-300"
                    />
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="flex justify-between">
          <p className="font-poppins font-normal text-[16px] text-[#000000]">
            Subtotal
          </p>
          <p className="font-poppins font-semibold text-customBrown text-[16px]">
            {calculateTotalPrice(boughtProducts)}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[10px] px-[5px] mt-[20px] pt-[15px] border-t-[1px] border-t-[#D9D9D9] text-black">
          <Link to="/cart">
            <button className="w-full py-[6px] border-[1px] border-black hover:bg-black hover:text-white transition duration-300 ease-in-out rounded-[50px] font-poppins font-normal text-[12px]">
              Cart
            </button>
          </Link>
          <Link to="/checkout">
            <button className="w-full py-[6px] border-[1px] border-black hover:bg-black hover:text-white transition duration-300 ease-in-out rounded-[50px] font-poppins font-normal text-[12px]">
              Checkout
            </button>
          </Link>
          <Link to="/comparison">
            <button className="w-full py-[6px] border-[1px] border-black hover:bg-black hover:text-white transition duration-300 ease-in-out rounded-[50px] font-poppins font-normal text-[12px]">
              Comparison
            </button>
          </Link>
        </div>
      </div>
      <div className="flex py-5 justify-between items-center">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-[150px] hover:scale-110  transition-all ease-in-out duration-300"
          />
        </Link>
        <ul className="hidden md:flex space-x-[100px] flex-nowrap">
          <li className="font-poppins font-medium text-[16px] hover:text-customGray1 transition duration-300 ease-in-out">
            <Link to="/">Home</Link>
          </li>
          <li className="font-poppins font-medium text-[16px] hover:text-customGray1 transition duration-300 ease-in-out">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="font-poppins font-medium text-[16px] hover:text-customGray1 transition duration-300 ease-in-out">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="flex space-x-[30px] items-center">
          <div className="w-[100px] min-[500px]:w-[150px] relative">
            <form className="flex">
              <input
                ref={inputRef}
                onChange={setSearchTerm}
                type="text"
                placeholder="Type..."
                className={`absolute right-[30px] top-[50%] translate-y-[-50%] outline-none transition-all duration-300 border-b-[1px] border-b-black mr-[10px] ${
                  searchOpened ? "w-[48px] min-[500px]:w-[110px]" : "w-0"
                }`}
              />
              <button>
                <img
                  onClick={searchHandler}
                  className="w-[28px] hover:scale-110 absolute top-[50%] translate-y-[-50%] right-0 transition-all ease-in-out duration-300 cursor-pointer"
                  src={search}
                  alt="search-icon"
                />
              </button>
            </form>
          </div>
          <div
            onClick={() => cartHandler()}
            className="relative size-[32px] cursor-pointer">
            <img
              className="absolute top-[50%] translate-y-[-50%] w-[28px] hover:scale-110 transition-all ease-in-out duration-300"
              src={cart}
              alt="cart-icon"
            />
            {calculteTotalCount(boughtProducts) > 0 && (
              <div className="absolute right-[-5px] bottom-[-5px] size-[20px] rounded-full bg-[#FFF3E3]">
                <p className="p-0 m-0 absolute right-[50%] translate-x-[50%] bottom-[50%] translate-y-[50%]">
                  {calculteTotalCount(boughtProducts)}
                </p>
              </div>
            )}
          </div>
          {!menuOpened ? (
            <AiOutlineMenu
              className="block md:hidden size-[20px] hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
              onClick={handleClick}
            />
          ) : (
            <AiOutlineClose
              className="block md:hidden size-[20px] hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
              onClick={handleClick}
            />
          )}
        </div>
      </div>
      <ul
        className={
          !menuOpened
            ? "block md:hidden absolute z-40 top-0 left-0 w-[100px] bg-white translate-x-[-200px] ease-in-out duration-300 border-black border-[1px]"
            : "block md:hidden absolute z-40 top-0 left-0 w-[200px] bg-white ease-in-out duration-300 border-black border-[1px]"
        }>
        <Link to="/">
          <li className="border-b-2 h-[61px] pl-[10px]">
            <img src={logo} className="mt-[20px] ml-2 pb-[31px] w-[150px]" />
          </li>
        </Link>
        <Link to="/">
          <li className="font-basic hover:text-customGray1 transition-all duration-300 cursor-pointer border-b-2 py-3 pr-20 pl-[20px] text-left ">
            Home
          </li>
        </Link>
        <Link to="/shop">
          <li className="font-basic hover:text-customGray1 transition-all duration-300 cursor-pointer border-b-2 py-3 pr-20 pl-[20px] text-left">
            Shop
          </li>
        </Link>
        <Link to="/contact">
          <li className="font-basic hover:text-customGray1 transition-all duration-300 cursor-pointer border-b-2 py-3 pr-20 pl-[20px] text-left">
            Contact
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
