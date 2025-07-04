import React, { useRef, useState } from "react";
import logo from "../../images/logo-site.png";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { ICard } from "../../types/types";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
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

  const searchHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
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
    <>
      <div
        className={
          !cartOpened
            ? "block absolute z-50 top-0 right-[-417px] min-[600px]:w-[417px] h-[746px] bg-white ease-in-out duration-500 border-black border-[1px] px-[30px] py-[30px]"
            : "block absolute z-50 top-0 right-0 w-full min-[600px]:w-[417px] h-[746px] bg-white ease-in-out duration-500 border-black border-[1px] px-[30px] py-[30px]"
        }>
        <div className="flex justify-between items-center pb-[30px] border-b-[1px] border-b-[#D9D9D9]">
          <h2 className="font-poppins font-semibold text-[#000000] text-[24px]">
            Shopping Cart
          </h2>
          <button onClick={cartHandler}>
            <motion.svg
              width="17"
              height="19"
              whileHover={{ scale: 1.25, fill: "#9F9F9F" }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              viewBox="0 0 17 19"
              initial={{ fill: "black" }}
              className="outline-none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.11047 9.6734C6.16563 9.6181 6.23115 9.57424 6.30328 9.5443C6.37542 9.51437 6.45275 9.49896 6.53085 9.49896C6.60894 9.49896 6.68628 9.51437 6.75841 9.5443C6.83055 9.57424 6.89607 9.6181 6.95122 9.6734L8.3121 11.0355L9.67297 9.6734C9.78446 9.56191 9.93568 9.49927 10.0933 9.49927C10.251 9.49927 10.4022 9.56191 10.5137 9.6734C10.6252 9.78489 10.6878 9.9361 10.6878 10.0938C10.6878 10.2514 10.6252 10.4027 10.5137 10.5141L9.15166 11.875L10.5137 13.2359C10.6252 13.3474 10.6878 13.4986 10.6878 13.6563C10.6878 13.8139 10.6252 13.9652 10.5137 14.0766C10.4022 14.1881 10.251 14.2508 10.0933 14.2508C9.93568 14.2508 9.78446 14.1881 9.67297 14.0766L8.3121 12.7146L6.95122 14.0766C6.83973 14.1881 6.68852 14.2508 6.53085 14.2508C6.37318 14.2508 6.22196 14.1881 6.11047 14.0766C5.99898 13.9652 5.93635 13.8139 5.93635 13.6563C5.93635 13.4986 5.99898 13.3474 6.11047 13.2359L7.47253 11.875L6.11047 10.5141C6.05518 10.459 6.01131 10.3935 5.98137 10.3213C5.95144 10.2492 5.93604 10.1719 5.93604 10.0938C5.93604 10.0157 5.95144 9.93834 5.98137 9.86621C6.01131 9.79407 6.05518 9.72855 6.11047 9.6734Z"
              />
              <path d="M8.3125 1.1875C9.09986 1.1875 9.85497 1.50028 10.4117 2.05703C10.9685 2.61378 11.2812 3.36889 11.2812 4.15625V4.75H5.34375V4.15625C5.34375 3.36889 5.65653 2.61378 6.21328 2.05703C6.77003 1.50028 7.52514 1.1875 8.3125 1.1875ZM12.4688 4.75V4.15625C12.4688 3.05394 12.0309 1.99679 11.2514 1.21734C10.472 0.437889 9.41481 0 8.3125 0C7.21019 0 6.15304 0.437889 5.37359 1.21734C4.59414 1.99679 4.15625 3.05394 4.15625 4.15625V4.75H0V16.625C0 17.2549 0.250223 17.859 0.695621 18.3044C1.14102 18.7498 1.74511 19 2.375 19H14.25C14.8799 19 15.484 18.7498 15.9294 18.3044C16.3748 17.859 16.625 17.2549 16.625 16.625V4.75H12.4688ZM1.1875 5.9375H15.4375V16.625C15.4375 16.9399 15.3124 17.242 15.0897 17.4647C14.867 17.6874 14.5649 17.8125 14.25 17.8125H2.375C2.06006 17.8125 1.75801 17.6874 1.53531 17.4647C1.31261 17.242 1.1875 16.9399 1.1875 16.625V5.9375Z" />
            </motion.svg>
          </button>
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
                  <button
                    className="w-[25px]"
                    onClick={() => {
                      setProductsToCart(product, 0);
                    }}>
                    <motion.svg
                      width="20"
                      height="20"
                      whileHover={{ scale: 1.25 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      viewBox="0 0 20 20"
                      fill="none"
                      className="cursor-pointer outline-none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10 0C4.47727 0 0 4.47727 0 10C0 15.5227 4.47727 20 10 20C15.5227 20 20 15.5227 20 10C20 4.47727 15.5227 0 10 0ZM13.37 7.91545C13.5356 7.744 13.6272 7.51436 13.6252 7.276C13.6231 7.03764 13.5275 6.80963 13.3589 6.64107C13.1904 6.47252 12.9624 6.37691 12.724 6.37484C12.4856 6.37277 12.256 6.4644 12.0845 6.63L10 8.71455L7.91545 6.63C7.83159 6.54317 7.73128 6.47392 7.62037 6.42627C7.50946 6.37863 7.39016 6.35355 7.26946 6.3525C7.14875 6.35145 7.02904 6.37445 6.91731 6.42016C6.80559 6.46587 6.70409 6.53338 6.61873 6.61873C6.53338 6.70409 6.46587 6.80559 6.42016 6.91731C6.37445 7.02904 6.35145 7.14875 6.3525 7.26946C6.35355 7.39016 6.37863 7.50946 6.42627 7.62037C6.47392 7.73128 6.54317 7.83159 6.63 7.91545L8.71455 10L6.63 12.0845C6.54317 12.1684 6.47392 12.2687 6.42627 12.3796C6.37863 12.4905 6.35355 12.6098 6.3525 12.7305C6.35145 12.8513 6.37445 12.971 6.42016 13.0827C6.46587 13.1944 6.53338 13.2959 6.61873 13.3813C6.70409 13.4666 6.80559 13.5341 6.91731 13.5798C7.02904 13.6255 7.14875 13.6486 7.26946 13.6475C7.39016 13.6465 7.50946 13.6214 7.62037 13.5737C7.73128 13.5261 7.83159 13.4568 7.91545 13.37L10 11.2855L12.0845 13.37C12.256 13.5356 12.4856 13.6272 12.724 13.6252C12.9624 13.6231 13.1904 13.5275 13.3589 13.3589C13.5275 13.1904 13.6231 12.9624 13.6252 12.724C13.6272 12.4856 13.5356 12.256 13.37 12.0845L11.2855 10L13.37 7.91545Z"
                        fill="#9F9F9F"
                      />
                    </motion.svg>
                  </button>
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
          <Link
            to="/cart"
            onClick={() => {
              window.scrollTo(0, 0);
            }}>
            <button className="w-full py-[6px] border-[1px] border-black hover:bg-black hover:text-white transition duration-300 ease-in-out rounded-[50px] font-poppins font-normal text-[12px]">
              Cart
            </button>
          </Link>
          <Link
            to="/checkout"
            onClick={() => {
              window.scrollTo(0, 0);
            }}>
            <button className="w-full py-[6px] border-[1px] border-black hover:bg-black hover:text-white transition duration-300 ease-in-out rounded-[50px] font-poppins font-normal text-[12px]">
              Checkout
            </button>
          </Link>
          <Link
            to="/comparison"
            onClick={() => {
              window.scrollTo(0, 0);
            }}>
            <button className="w-full py-[6px] border-[1px] border-black hover:bg-black hover:text-white transition duration-300 ease-in-out rounded-[50px] font-poppins font-normal text-[12px]">
              Comparison
            </button>
          </Link>
        </div>
      </div>
      <header className="container mx-auto w-full text-nowrap bg-white h-20 text-base 8xl:t4xt-lg">
        <div className="flex py-5 justify-between items-center">
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}>
            <img
              src={logo}
              alt="logo"
              className="w-[150px] hover:scale-110  transition-all ease-in-out duration-300"
            />
          </Link>
          <ul className="hidden md:flex space-x-[100px] flex-nowrap">
            <li className="font-poppins font-medium text-[16px] hover:text-customGray1 transition duration-300 ease-in-out">
              <Link
                to="/"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}>
                Home
              </Link>
            </li>
            <li className="font-poppins font-medium text-[16px] hover:text-customGray1 transition duration-300 ease-in-out">
              <Link
                to="/shop"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}>
                Shop
              </Link>
            </li>
            <li className="font-poppins font-medium text-[16px] hover:text-customGray1 transition duration-300 ease-in-out">
              <Link
                to="/contact"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}>
                Contact
              </Link>
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
                <button
                  onClick={searchHandler}
                  className="absolute top-[50%] translate-y-[-50%] right-0">
                  <motion.svg
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="outline-none"
                    transition={{ duration: 0.3 }}
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M23.5 23.5L18.2663 18.257M21.1666 11.25C21.1666 13.88 20.1219 16.4024 18.2621 18.2621C16.4024 20.1219 13.88 21.1666 11.25 21.1666C8.61992 21.1666 6.09757 20.1219 4.23784 18.2621C2.3781 16.4024 1.33331 13.88 1.33331 11.25C1.33331 8.61992 2.3781 6.09757 4.23784 4.23784C6.09757 2.3781 8.61992 1.33331 11.25 1.33331C13.88 1.33331 16.4024 2.3781 18.2621 4.23784C20.1219 6.09757 21.1666 8.61992 21.1666 11.25V11.25Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </motion.svg>
                </button>
              </form>
            </div>
            <button
              onClick={() => cartHandler()}
              className="relative size-[32px] cursor-pointer group">
              <div className="absolute top-[50%] translate-y-[-50%]">
                <motion.svg
                  width="26"
                  height="23"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="outline-none"
                  viewBox="0 0 26 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <motion.path
                    d="M24.2355 16.1926H7.95234L8.76991 14.5273L22.3543 14.5027C22.8137 14.5027 23.2074 14.1746 23.2894 13.7207L25.1707 3.19062C25.2199 2.91445 25.1461 2.63008 24.9656 2.41406C24.8764 2.30775 24.7652 2.22211 24.6396 2.16309C24.514 2.10407 24.377 2.07308 24.2383 2.07227L6.95702 2.01484L6.80937 1.32031C6.7164 0.877344 6.31718 0.554688 5.86328 0.554688H1.63867C1.38267 0.554688 1.13716 0.656381 0.956142 0.837398C0.775125 1.01841 0.673431 1.26393 0.673431 1.51992C0.673431 1.77592 0.775125 2.02143 0.956142 2.20245C1.13716 2.38346 1.38267 2.48516 1.63867 2.48516H5.08124L5.72656 5.55312L7.31523 13.2449L5.26992 16.5836C5.1637 16.727 5.09972 16.8972 5.08523 17.075C5.07073 17.2528 5.10629 17.4312 5.18788 17.5898C5.35195 17.9152 5.68281 18.1203 6.04921 18.1203H7.7664C7.40032 18.6065 7.20258 19.1988 7.20312 19.8074C7.20312 21.3551 8.46093 22.6129 10.0086 22.6129C11.5562 22.6129 12.8141 21.3551 12.8141 19.8074C12.8141 19.1977 12.6117 18.6043 12.2508 18.1203H16.6559C16.2898 18.6065 16.092 19.1988 16.0926 19.8074C16.0926 21.3551 17.3504 22.6129 18.898 22.6129C20.4457 22.6129 21.7035 21.3551 21.7035 19.8074C21.7035 19.1977 21.5012 18.6043 21.1402 18.1203H24.2383C24.7687 18.1203 25.2035 17.6883 25.2035 17.1551C25.2019 16.8994 25.0993 16.6546 24.9179 16.4743C24.7366 16.294 24.4913 16.1927 24.2355 16.1926ZM7.35898 3.91797L23.1035 3.96992L21.5613 12.6051L9.19374 12.627L7.35898 3.91797ZM10.0086 20.6715C9.53281 20.6715 9.14452 20.2832 9.14452 19.8074C9.14452 19.3316 9.53281 18.9434 10.0086 18.9434C10.4844 18.9434 10.8726 19.3316 10.8726 19.8074C10.8726 20.0366 10.7816 20.2564 10.6196 20.4184C10.4575 20.5805 10.2378 20.6715 10.0086 20.6715ZM18.898 20.6715C18.4223 20.6715 18.034 20.2832 18.034 19.8074C18.034 19.3316 18.4223 18.9434 18.898 18.9434C19.3738 18.9434 19.7621 19.3316 19.7621 19.8074C19.7621 20.0366 19.6711 20.2564 19.509 20.4184C19.347 20.5805 19.1272 20.6715 18.898 20.6715Z"
                    fill="black"
                  />
                </motion.svg>
              </div>
              {calculteTotalCount(boughtProducts) > 0 && (
                <div className="absolute right-[-5px] bottom-[-5px] size-[20px] rounded-full bg-[#FFF3E3]">
                  <p className="p-0 m-0 absolute right-[50%] translate-x-[50%] bottom-[50%] translate-y-[50%]">
                    {calculteTotalCount(boughtProducts)}
                  </p>
                </div>
              )}
            </button>
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
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}>
            <li className="border-b-2 h-[61px] pl-[10px]">
              <img src={logo} className="mt-[20px] ml-2 pb-[31px] w-[150px]" />
            </li>
          </Link>
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}>
            <li className="font-basic hover:text-customGray1 transition-all duration-300 cursor-pointer border-b-2 py-3 pr-20 pl-[20px] text-left ">
              Home
            </li>
          </Link>
          <Link
            to="/shop"
            onClick={() => {
              window.scrollTo(0, 0);
            }}>
            <li className="font-basic hover:text-customGray1 transition-all duration-300 cursor-pointer border-b-2 py-3 pr-20 pl-[20px] text-left">
              Shop
            </li>
          </Link>
          <Link
            to="/contact"
            onClick={() => {
              window.scrollTo(0, 0);
            }}>
            <li className="font-basic hover:text-customGray1 transition-all duration-300 cursor-pointer border-b-2 py-3 pr-20 pl-[20px] text-left">
              Contact
            </li>
          </Link>
        </ul>
      </header>
    </>
  );
};

export default Header;
