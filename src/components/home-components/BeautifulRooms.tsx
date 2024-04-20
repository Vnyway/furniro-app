import React, { FC, useState } from "react";
import innerPlaceImg from "../../images/slider-inner-place.png";
import livingRoomImg from "../../images/slider-living-room.png";
import nextImg from "../../images/next-line.png";
import buttonNextImg from "../../images/button-next-img.png";

const BeautifulRooms: FC = () => {
  const [room, setRoom] = useState<number>(1);
  const handleClick = () => {
    if (room !== 4) {
      setRoom(room + 1);
    } else {
      setRoom(1);
    }
  };
  return (
    <div className="flex items-center overflow-x-hidden mt-[50px] py-[30px] pl-[300px] bg-[#FCF8F3]">
      <div className="w-[600px]">
        <h2 className="font-poppins font-bold text-products text-[40px] leading-[120%] mb-[15px]">
          50+ Beautiful rooms <br /> inspiration
        </h2>
        <p className="font-poppins font-medium text-[#616161] text-[16px] mb-[20px]">
          Our designer already made a lot of beautiful <br /> prototipe of rooms
          that inspire you
        </p>
        <button className="px-[36px] py-[12px] bg-customBrown text-white font-poppins font-semibold text-[16px]">
          Explore More
        </button>
      </div>
      <div className="relative flex">
        <div
          onClick={handleClick}
          className="absolute z-10 shadow-md cursor-pointer size-[48px] bg-white rounded-full right-[30px] top-[50%] translate-y-[-50%]">
          <img
            src={nextImg}
            alt="next"
            className="absolute top-[16px] left-[21px]"
          />
        </div>
        <div className="absolute z-10 w-[217px] h-[130px] bg-white opacity-[72%] left-[30px] bottom-[30px]"></div>
        <div className="absolute z-10 bottom-[85px] left-[25px] flex items-center my-[20px] ml-[30px]">
          <p className="text-[#616161] text-[16px] font-poppins font-medium">
            0{room}
          </p>
          <div className="w-[27px] h-0 border-b-[1px] border-b-[#616161] mx-[5px]" />
          <p className="text-[#616161] text-[16px] font-poppins font-medium">
            {room === 1 || room === 3 ? "Bed Room" : "Living Room"}
          </p>
        </div>
        <h2 className="absolute z-10 bottom-[55px] left-[57px] font-poppins font-semibold text-products text-[28px]">
          Inner Peace
        </h2>
        <button
          onClick={handleClick}
          className="absolute z-10 size-[48px] bg-customBrown left-[247px] bottom-[30px]">
          <img
            src={buttonNextImg}
            alt="buttonNextImg"
            className="absolute left-[14px] bottom-[17px]"
          />
        </button>
        <img
          src={room === 1 || room === 3 ? innerPlaceImg : livingRoomImg}
          alt="innerPlaceImg"
          className="w-[404px] h-[582px]"
        />
        <div className="flex flex-col">
          <div className="flex">
            <img
              src={room === 1 || room === 3 ? livingRoomImg : innerPlaceImg}
              alt="livingRoomImg"
              className="w-[372px] h-[486px] ml-[20px]"
            />
            <img
              src={room === 1 || room === 3 ? innerPlaceImg : livingRoomImg}
              alt="innerPlaceImg"
              className="w-[372px] h-[486px] ml-[20px]"
            />
            <img
              src={room === 1 || room === 3 ? livingRoomImg : innerPlaceImg}
              alt="livingRoomImg"
              className="w-[372px] h-[486px] ml-[20px]"
            />
          </div>
          <div className="flex mb-0 ml-[30px] mt-[45px] items-center">
            <div
              className={
                room === 1
                  ? "size-[27px] rounded-full border-[1px] border-customBrown"
                  : ""
              }>
              <div
                className={
                  room === 1
                    ? "size-[11px] mt-[7px] ml-[7px] rounded-full bg-customBrown mx-[10px]"
                    : "size-[11px] rounded-full bg-[#D8D8D8] mx-[10px]"
                }></div>
            </div>
            <div
              className={
                room === 2
                  ? "size-[27px] rounded-full border-[1px] border-customBrown"
                  : ""
              }>
              <div
                className={
                  room === 2
                    ? "size-[11px] mt-[7px] ml-[7px] rounded-full bg-customBrown mx-[10px]"
                    : "size-[11px] rounded-full bg-[#D8D8D8] mx-[10px]"
                }></div>
            </div>
            <div
              className={
                room === 3
                  ? "size-[27px] rounded-full border-[1px] border-customBrown"
                  : ""
              }>
              <div
                className={
                  room === 3
                    ? "size-[11px] mt-[7px] ml-[7px] rounded-full bg-customBrown mx-[10px]"
                    : "size-[11px] rounded-full bg-[#D8D8D8] mx-[10px]"
                }></div>
            </div>
            <div
              className={
                room === 4
                  ? "size-[27px] rounded-full border-[1px] border-customBrown"
                  : ""
              }>
              <div
                className={
                  room === 4
                    ? "size-[11px] mt-[7px] ml-[7px] rounded-full bg-customBrown mx-[10px]"
                    : "size-[11px] rounded-full bg-[#D8D8D8] mx-[10px]"
                }></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautifulRooms;
