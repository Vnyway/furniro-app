import React, { useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ICard } from "../../types/types";
import Input from "./Input";
import { useForm, FormProvider } from "react-hook-form";

const GeneralCheckout: React.FC = () => {
  const { boughtProducts } = useTypedSelector((state) => state.products);
  const calculateTotalPrice = (products: ICard[]) => {
    let totalPrice = 0;
    products.forEach((product) => {
      totalPrice += product.count * product.currentPrice;
    });
    return totalPrice.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };

  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    methods.reset();
  });
  return (
    <div className="container mx-auto font-poppins font-medium text-[16px] text-[#000000] mt-[40px]">
      <FormProvider {...methods}>
        <form onSubmit={onSubmit} className="flex justify-between gap-[70px]">
          <div className="flex flex-col w-[608px] px-[77px]">
            <h1 className="font-semibold text-[36px]">Billing details</h1>
            <div className="flex justify-between gap-[10px]">
              <Input
                type="text"
                id="firstName"
                label="First name"
                name="firstName"
                placeholder=""
                validation={{
                  required: {
                    value: true,
                    message: "required",
                  },
                }}
              />
              <Input
                type="text"
                id="lastName"
                label="Last name"
                name="lastName"
                placeholder=""
                validation={{
                  required: {
                    value: true,
                    message: "required",
                  },
                }}
              />
            </div>
            <Input
              type="text"
              id="companyName"
              label="Company name (Optional)"
              name="companyName"
              placeholder=""
            />
            <Input
              type="text"
              id="countryRegion"
              label="Country / Region"
              name="countryRegion"
              placeholder=""
              validation={{
                required: {
                  value: true,
                  message: "required",
                },
              }}
            />
            <Input
              type="text"
              id="street"
              label="Street address"
              name="street"
              placeholder=""
              validation={{
                required: {
                  value: true,
                  message: "required",
                },
              }}
            />
            <Input
              type="text"
              id="townCity"
              label="Town / City"
              name="townCity"
              placeholder=""
              validation={{
                required: {
                  value: true,
                  message: "required",
                },
              }}
            />
            <Input
              type="text"
              id="province"
              label="Province"
              name="province"
              placeholder=""
              validation={{
                required: {
                  value: true,
                  message: "required",
                },
              }}
            />
            <Input
              type="text"
              id="zip"
              label="Zip code"
              name="zip"
              placeholder=""
              validation={{
                required: {
                  value: true,
                  message: "required",
                },
              }}
            />
            <Input
              type="text"
              id="phone"
              label="Phone"
              name="phone"
              placeholder=""
              validation={{
                required: {
                  value: true,
                  message: "required",
                },
              }}
            />
            <Input
              type="text"
              id="email"
              label="Email address"
              name="email"
              placeholder=""
              validation={{
                required: {
                  value: true,
                  message: "required",
                },
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email",
                },
              }}
            />
            <Input
              type="text"
              id="additionalInformation"
              label=""
              name="additionalInformation"
              placeholder="Additional informtion"
            />
          </div>
          <div className="flex flex-col font-poppins text-[#000000]">
            <div className="flex justify-between font-medium text-[24px]">
              <h2>Product</h2>
              <h2>Subtotal</h2>
            </div>
            <div>
              {boughtProducts.map((element) => {
                return (
                  <div className="flex justify-between">
                    <div className="flex gap-[10px] items-center">
                      <p className="text-customGray1 text-[16px]">
                        {element.name}
                      </p>
                      <p className="text-[12px]">x</p>
                      <p className="text-[12px]">{element.count}</p>
                    </div>
                    <p className="text-[16px]">
                      Rp{" "}
                      {(element.currentPrice * element.count).toLocaleString(
                        "id-ID"
                      )}
                    </p>
                  </div>
                );
              })}
              <div className="flex justify-between items-center">
                <p className="">Total</p>
                <p className="text-customBrown text-[24px] font-bold">
                  {calculateTotalPrice(boughtProducts)}
                </p>
              </div>
            </div>
            <div>
              <div>
                <input
                  type="radio"
                  {...methods.register("payment", { required: true })}
                  id="directBankTransfer"
                  value="directBankTransfer"
                />
                <label htmlFor="directBankTransfer">Direct Bank Transfer</label>
              </div>
              <div>
                <input
                  type="radio"
                  {...methods.register("payment", { required: true })}
                  id="cashOnDelivery"
                  value="cashOnDelivery"
                />
                <label htmlFor="cashOnDelivery">Cash On Delivery</label>
              </div>
              <p>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our <b>privacy policy.</b>
              </p>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-[102px] py-[17px] border-[1px] border-[#000000] rounded-[15px]">
                Place order
              </button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default GeneralCheckout;
