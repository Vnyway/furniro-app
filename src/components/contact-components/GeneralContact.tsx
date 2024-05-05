import React, { useEffect } from "react";
import locationImg from "../../images/location-img.png";
import phoneImg from "../../images/phone-img.png";
import clockImg from "../../images/clock-img.png";
import { IComment } from "../../types/types";
import { useForm } from "react-hook-form";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const GeneralContact: React.FC = () => {
  const { commentatorsData } = useTypedSelector((state) => state.commentators);
  const { setCommentToCommentatorsData } = useActions();
  const form = useForm<IComment>();
  const { register, formState, handleSubmit, reset } = form;
  const { errors, isSubmitSuccessful } = formState;

  const onSubmit = (data: IComment) => {
    setCommentToCommentatorsData(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  useEffect(() => {
    console.log(commentatorsData);
  }, [commentatorsData]);

  return (
    <section className="font-poppins overflow-x-hidden text-[#000000] my-[30px] md:my-[50px] container mx-auto">
      <div className="flex flex-col text-center">
        <h1 className="font-semibold text-[24px] md:text-[36px]">
          Get In Touch With Us
        </h1>
        <p className="text-customGray1 font-normal text-[12px] md:text-[16px] px-[20px]">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us
          <br className="hidden md:block" />
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center  min-[620px]:items-start md:justify-center gap-[20%] mt-[50px]">
        <div className="flex flex-col min-[620px]:flex-row lg:flex-col gap-[30px] max-w-[393px] px-[20px]">
          <div className="flex min-[620px]:flex-col md:flex-row gap-[20px]">
            <img
              className="w-[22px] h-[27.6px] mt-[5px]"
              src={locationImg}
              alt="locationImg"
            />
            <div>
              <h3 className="font-medium text-[20px] md:text-[24px]">
                Address
              </h3>
              <p className="w-[180px] md:w-[200px] lg:w-[212px] font-normal text-[14px] md:text-[15px] lg:text-[16px]">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>
          <div className="flex min-[620px]:flex-col md:flex-row gap-[20px]">
            <img
              className="size-[22px] mt-[6px]"
              src={phoneImg}
              alt="phoneImg"
            />
            <div>
              <h3 className="font-medium text-[20px] md:text-[24px]">Phone</h3>
              <p className="w-[180px] md:w-[200px] lg:w-[212px] font-normal text-[14px] md:text-[15px] lg:text-[16px]">
                Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
              </p>
            </div>
          </div>
          <div className="flex min-[620px]:flex-col md:flex-row gap-[20px]">
            <img
              className="size-[23px] mt-[6px]"
              src={clockImg}
              alt="clockImg"
            />
            <div>
              <h3 className="font-medium text-[20px] md:text-[24px]">
                Working Time
              </h3>
              <p className="w-[180px] md:w-[200px] lg:w-[212px] font-normal text-[14px] md:text-[15px] lg:text-[16px]">
                Monday-Friday: 9:00 - 22:00
                <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>
        <form
          className="flex flex-col md:flex-row md:justify-between lg:flex-col lg:justify-start gap-[15px] md:gap-[30px] lg:mt-0 container px-[20px] my-[30px]"
          onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-[15px] md:gap-[30px] min-w-[300px] min-[450px]:min-w-[350px] md:min-w-0">
            <div className="flex flex-col gap-[10px] md:gap-[15px] w-full  ">
              <div className="flex justify-between">
                <label className="font-medium text-[16px]" htmlFor="name">
                  Your name
                </label>
                <p className="error">{errors.name?.message}</p>
              </div>
              <input
                className="h-[60px] md:h-[75px] outline-none border-[1px] border-customGray1 rounded-[10px] px-[14px] md:px-[20px] text-[14px] md:text-[16px]"
                type="text"
                id="name"
                placeholder="Abc"
                {...register("name", {
                  required: { value: true, message: "Required" },
                })}
              />
            </div>
            <div className="flex flex-col gap-[10px] md:gap-[15px]">
              <div className="flex justify-between">
                <label className="font-medium text-[16px]" htmlFor="email">
                  Email address
                </label>
                <p className="error">{errors.email?.message}</p>
              </div>
              <input
                className="h-[60px] md:h-[75px] outline-none border-[1px] border-customGray1 rounded-[10px] px-[14px] md:px-[20px] text-[14px] md:text-[16px]"
                type="text"
                id="email"
                placeholder="Abc@def.com"
                {...register("email", {
                  required: { value: true, message: "Required" },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid email",
                  },
                })}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[15px] md:gap-[30px]">
            <div className="flex flex-col gap-[10px] md:gap-[15px]">
              <div className="flex justify-between">
                <label className="font-medium text-[16px]" htmlFor="subject">
                  Subject
                </label>
              </div>
              <input
                className="h-[60px] md:h-[75px] outline-none border-[1px] border-customGray1 rounded-[10px] px-[14px] md:px-[20px] text-[14px] md:text-[16px]"
                type="text"
                id="subject"
                placeholder="This is an optional"
                {...register("subject")}
              />
            </div>
            <div className="flex flex-col gap-[10px] md:gap-[15px]">
              <div className="flex justify-between">
                <label className="font-medium text-[16px]" htmlFor="message">
                  Message
                </label>
                <p className="error">{errors.message?.message}</p>
              </div>
              <input
                type="text"
                placeholder="Hi, I'd like to ask about..."
                className="h-[60px] md:h-[75px] outline-none border-[1px] border-customGray1 rounded-[10px] px-[14px] md:px-[20px] text-[14px] md:text-[16px]"
                {...register("message", {
                  required: { value: true, message: "Required" },
                  minLength: { value: 9, message: "Too short message" },
                })}
              />
            </div>
          </div>
          <div className="w-full md:w-auto md:mt-[40px] lg:mt-0">
            <button className="px-[89px] py-[14px] bg-customBrown border-customBrown border-[1px] hover:bg-white hover:text-customBrown transition duration-500 ease-in-out text-[#FFFFFF] rounded-[5px] text-[16px] w-full md:w-auto">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default GeneralContact;
