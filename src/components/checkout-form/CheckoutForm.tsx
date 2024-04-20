import React from "react";
import { useForm } from "react-hook-form";
import { IUser } from "../../types/types";

const CheckoutForm: React.FC = () => {
  const form = useForm<IUser>({
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      countryRegion: "",
      streetAddress: "",
      townCity: "",
      province: "",
      zipCode: "",
      phone: "",
      emailAddress: "",
      additionalInformation: "",
      directBankTransfer: true,
      products: [],
    },
  });
  const { register, formState, handleSubmit } = form;
  const { errors } = formState;

  const onSubmit = (data: IUser) => {
    console.log("Form submitted", data);
  };

  return (
    <div className="container mx-auto font-poppins font-medium text-[16px] text-[#000000] mt-[40px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex justify-between gap-[70px]">
        <div>
          <h1 className="font-semibold text-[36px]">Billing details</h1>
          <div className="flex justify-between gap-[20px]">
            <div className="flex flex-col gap-[10px]">
              <div className="flex justify-between">
                <label htmlFor="firstName">First name</label>
                <p className="error">{errors.firstName?.message}</p>
              </div>
              <input
                className="outline-none h-[75px] ps-[10px] rounded-[15px] border-[#9F9F9F] border-[1px]"
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
                <p className="error">{errors.lastName?.message}</p>
              </div>
              <input
                className="outline-none h-[75px] ps-[10px] rounded-[15px] border-[#9F9F9F] border-[1px]"
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
              <p className="error">{errors.companyName?.message}</p>
            </div>
            <input
              className="outline-none h-[75px] ps-[10px] rounded-[15px] border-[#9F9F9F] border-[1px]"
              type="text"
              id="companyName"
              {...register("companyName")}
            />
          </div>
          <div>Country / Region</div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex justify-between">
              <label htmlFor="streetAddress">Street address</label>
              <p className="error">{errors.streetAddress?.message}</p>
            </div>
            <input
              className="outline-none h-[75px] ps-[10px] rounded-[15px] border-[#9F9F9F] border-[1px]"
              type="text"
              id="streetAddress"
              {...register("streetAddress", {
                required: { value: true, message: "Required" },
              })}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex justify-between">
              <label htmlFor="townCity">Town / City</label>
              <p className="error">{errors.townCity?.message}</p>
            </div>
            <input
              className="outline-none h-[75px] ps-[10px] rounded-[15px] border-[#9F9F9F] border-[1px]"
              type="text"
              id="townCity"
              {...register("townCity", {
                required: { value: true, message: "Required" },
              })}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex justify-between">
              <label htmlFor="zipCode">ZIP code</label>
              <p className="error">{errors.zipCode?.message}</p>
            </div>
            <input
              className="outline-none h-[75px] ps-[10px] rounded-[15px] border-[#9F9F9F] border-[1px]"
              type="text"
              id="zipCode"
              {...register("zipCode", {
                required: { value: true, message: "Required" },
                pattern: {
                  value: /^\[0-9]{5}$/,
                  message: "Invalid code",
                },
              })}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex justify-between">
              <label htmlFor="phone">Phone</label>
              <p className="error">{errors.phone?.message}</p>
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
              <p className="error">{errors.emailAddress?.message}</p>
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
              <p className="error">{errors.additionalInformation?.message}</p>
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
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
