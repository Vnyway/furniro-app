import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ICard, IUser } from "../../types/types";
import {
  City,
  Country,
  ICity,
  ICountry,
  IState,
  State,
} from "country-state-city";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { calculateTotalPrice } from "../../functions/calculateTotalPrice";
import InputError from "../general-components/InputError";

const CheckoutForm: React.FC = () => {
  const { customersData } = useTypedSelector((state) => state.customers);
  const { boughtProducts } = useTypedSelector((state) => state.products);
  const { setUserToCustomers, removeAllProductsFromCart } = useActions();

  let countryData: ICountry[] = Country.getAllCountries();
  const [stateData, setStateData] = useState<IState[]>();
  const [cityData, setCityData] = useState<ICity[]>();

  const [country, setCountry] = useState<ICountry>(countryData[0]);
  const [state, setState] = useState<IState>();
  const [city, setCity] = useState<ICity>();

  useEffect(() => {
    setStateData(State.getStatesOfCountry(country.isoCode) as any);
  }, [country]);

  useEffect(() => {
    setCityData(
      City.getCitiesOfState(country.isoCode, state?.isoCode as any) as any
    );
  }, [state]);

  useEffect(() => {
    stateData && setState(stateData[0]);
  }, [stateData]);

  useEffect(() => {
    cityData && setCity(cityData[0]);
  }, [cityData]);

  const form = useForm<IUser>({
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      country: "",
      state: "",
      city: "",
      phone: "",
      emailAddress: "",
      additionalInformation: "",
      directBankTransfer: true,
      products: boughtProducts,
    },
  });
  const { register, formState, handleSubmit, reset } = form;
  const { errors, isSubmitSuccessful } = formState;

  const onSubmit = (user: IUser) => {
    setUserToCustomers(user);
  };

  useEffect(() => {
    console.log(customersData);
  }, [customersData]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      removeAllProductsFromCart();
    }
  }, [isSubmitSuccessful]);

  return (
    <section className="container mx-auto font-poppins font-medium text-[14px] md:text-[16px] text-[#000000] my-[20px] md:my-[40px] px-[20px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col md:flex-row justify-center md:gap-[40px] lg:gap-[200px]">
        <div className="flex flex-col gap-[10px] mb-[30px] md:max-w-[430px] lg:max-w-[600px] md:mb-[50px]">
          <h1 className="font-semibold text-[28px] md:text-[36px]">
            Billing details
          </h1>
          <div className="flex flex-col md:flex-row md:justify-between gap-[10px] md:gap-[20px]">
            <div className="flex flex-col gap-[10px]">
              <div className="flex justify-between">
                <label htmlFor="firstName">First name</label>
                <InputError message={errors.firstName?.message} />
              </div>
              <input
                className="outline-none md:max-w-[200px] lg:max-w-[600px] h-[75px] ps-[10px] rounded-[15px] border-[#9F9F9F] border-[1px]"
                type="text"
                id="firstName"
                {...register("firstName", {
                  required: { value: true, message: "Required" },
                })}
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex justify-between">
                <label htmlFor="lastName">Last name</label>
                <InputError message={errors.lastName?.message} />
              </div>
              <input
                className="outline-none md:max-w-[200px] lg:max-w-[600px] h-[75px] ps-[10px] rounded-[15px] border-[#9F9F9F] border-[1px]"
                type="text"
                id="lastName"
                {...register("lastName", {
                  required: { value: true, message: "Required" },
                })}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex justify-between">
              <label htmlFor="companyName">Company name (Optional)</label>
              <InputError message={errors.companyName?.message} />
            </div>
            <input
              className="outline-none h-[75px] ps-[10px] rounded-[15px] border-[#9F9F9F] border-[1px]"
              type="text"
              id="companyName"
              {...register("companyName")}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex justify-between">
              <label htmlFor="country">Country</label>
              <InputError message={errors.country?.message} />
            </div>
            <select
              className="h-[75px] w-full rounded-[15px] border-[1px] border-[#9F9F9F] px-[10px]"
              id="country"
              {...register("country", {
                required: {
                  value: true,
                  message: "Required",
                },
              })}
              onChange={(e) => {
                const selectedCountryIsoCode = e.target.value;
                setCountry(
                  Country.getCountryByCode(selectedCountryIsoCode) as ICountry
                );
              }}>
              {countryData.map((element) => (
                <option key={element.isoCode} value={element.isoCode}>
                  {element.name}
                </option>
              ))}
            </select>
          </div>
          {state && (
            <div className="flex flex-col gap-[10px]">
              <div className="flex justify-between">
                <label htmlFor="state">State</label>
                <InputError message={errors.state?.message} />
              </div>

              <select
                className="h-[75px] w-full rounded-[15px] border-[1px] border-[#9F9F9F] px-[10px]"
                id="state"
                {...register("state", {
                  required: {
                    value: true,
                    message: "Required",
                  },
                })}
                onChange={(e) => {
                  const selectedStateIsoCode = e.target.value as string;
                  const selectedState =
                    State.getStateByCode(selectedStateIsoCode);
                  setState(selectedState);
                }}>
                {stateData?.map((element) => {
                  return (
                    <option id={element.isoCode} value={element.isoCode}>
                      {element.name}
                    </option>
                  );
                })}
              </select>
            </div>
          )}
          {city && (
            <div className="flex flex-col gap-[10px]">
              <div className="flex justify-between">
                <label htmlFor="city">City</label>
                <InputError message={errors.city?.message} />
              </div>

              <select
                className="h-[75px] w-full rounded-[15px] border-[1px] border-[#9F9F9F] px-[10px]"
                id="city"
                {...register("city", {
                  required: { value: true, message: "Required" },
                })}
                onChange={(e) => {
                  const selectedCityName = e.target.value;
                  const selectedCity = cityData?.find(
                    (city) => city.name === selectedCityName
                  );
                  setCity(selectedCity);
                }}>
                {stateData &&
                  cityData?.map((element) => {
                    return (
                      <option
                        className="hover:bg-customBrown"
                        value={element.name}>
                        {element.name}
                      </option>
                    );
                  })}
              </select>
            </div>
          )}
          <div className="flex flex-col gap-[10px]">
            <div className="flex justify-between">
              <label htmlFor="phone">Phone</label>
              <InputError message={errors.phone?.message} />
            </div>
            <input
              className="outline-none h-[75px] ps-[10px] rounded-[15px] border-[#9F9F9F] border-[1px]"
              type="text"
              id="phone"
              {...register("phone", {
                required: { value: true, message: "Required" },
                pattern: {
                  value: /^\+?\d{7,15}$/,
                  message: "Invalid number",
                },
              })}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex justify-between">
              <label htmlFor="emailAddress">Email address</label>
              <InputError message={errors.emailAddress?.message} />
            </div>
            <input
              className="outline-none h-[75px] ps-[10px] rounded-[15px] border-[#9F9F9F] border-[1px]"
              type="text"
              id="emailAddress"
              {...register("emailAddress", {
                required: { value: true, message: "Required" },
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email",
                },
              })}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex justify-between">
              <label htmlFor="additionalInformation">
                Additional information
              </label>
              <InputError message={errors.additionalInformation?.message} />
            </div>
            <input
              className="outline-none h-[75px] ps-[10px] rounded-[15px] border-[#9F9F9F] border-[1px]"
              type="text"
              placeholder="Additional information"
              id="additionalInformation"
              {...register("additionalInformation")}
            />
          </div>
        </div>
        <div className="flex flex-col gap-[30px] font-poppins text-[#000000] max-w-[608px]">
          <div className="flex justify-between font-medium text-[22px] md:text-[24px]">
            <h2>Product</h2>
            <h2>Subtotal</h2>
          </div>
          <div className="border-b-[1px] flex flex-col gap-[15px] border-[#D9D9D9]">
            {boughtProducts.map((element) => {
              return (
                <div className="flex justify-between">
                  <div className="flex gap-[10px] items-center">
                    <p className="text-customGray1 text-[14px] md:text-[16px]">
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
            <div className="flex justify-between items-center mb-[20px]">
              <p className="">Total</p>
              <p className="text-customBrown text-[20px] md:text-[24px] font-bold">
                {calculateTotalPrice(boughtProducts)}
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-[20px]">
              <label
                htmlFor="directBankTransfer"
                className="font-semibold text-[18px] md:text-[20px]">
                Choose your payment method
              </label>
              <InputError message={errors.directBankTransfer?.message} />
            </div>
            <div className="mb-[8px]">
              <input
                type="radio"
                className="mr-[10px]"
                {...register("directBankTransfer", {
                  required: { value: true, message: "Required" },
                })}
                id="directBankTransfer"
                value="directBankTransfer"
              />
              <label htmlFor="directBankTransfer">Direct Bank Transfer</label>
            </div>
            <div className="mb-[20px]">
              <input
                type="radio"
                className="mr-[10px]"
                {...register("directBankTransfer", {
                  required: { value: true, message: "Required" },
                })}
                id="cashOnDelivery"
                value="cashOnDelivery"
              />
              <label htmlFor="cashOnDelivery">Cash On Delivery</label>
            </div>
            <p className="text-[14px] md:text-[16px] text-[9F9F9F] font-light">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our <b>privacy policy.</b>
            </p>
          </div>
          <div className="flex justify-center">
            <button className="px-[102px] text-nowrap py-[17px] border-[1px] border-[#000000] hover:text-white hover:bg-black transition duration-300 ease-in-out rounded-[15px]">
              Place order
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CheckoutForm;
