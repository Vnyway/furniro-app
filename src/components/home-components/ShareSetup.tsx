import React from "react";
import shareSetupImg1 from "../../images/share-setup-1.png";
import shareSetupImg2 from "../../images/share-setup-2.png";
import shareSetupImg3 from "../../images/share-setup-3.png";
import shareSetupImg4 from "../../images/share-setup-4.png";
import shareSetupImg5 from "../../images/share-setup-5.png";
import shareSetupImg6 from "../../images/share-setup-6.png";
import shareSetupImg7 from "../../images/share-setup-7.png";
import shareSetupImg8 from "../../images/share-setup-8.png";
import shareSetupImg9 from "../../images/share-setup-9.png";

const ShareSetup: React.FC = () => {
  return (
    <div className="w-full overflow-hidden mt-[60px] text-center flex flex-col items-center">
      <span className="font-poppins font-semibold text-[20px] text-[#616161]">
        Share your setup with
      </span>
      <h2 className="font-poppins font-bold text-[40px] text-products">
        #FuniroFurniture
      </h2>
      <div className="relative h-[1040px] w-[1920px]">
        <img
          src={shareSetupImg1}
          className="absolute left-0 top-[-30px] w-[100px]"
        />
        <img
          src={shareSetupImg2}
          className="absolute left-[120px] top-[18px] w-[640px] h-auto"
        />
        <img
          src={shareSetupImg3}
          className="absolute w-[360px] left-[50%] translate-x-[-50%] top-[170px]"
        />
        <img
          src={shareSetupImg4}
          className="absolute w-[390px] right-[370px] top-[79px]"
        />
        <img
          src={shareSetupImg5}
          className="absolute w-[350px] right-0 top-[-30px]"
        />
        <img
          src={shareSetupImg6}
          className="absolute w-[290px] left-0 top-[483px]"
        />
        <img
          src={shareSetupImg7}
          className="absolute w-[450px] left-[310px] top-[483px]"
        />
        <img
          src={shareSetupImg8}
          className="absolute w-[240px] right-[520px] top-[570px]"
        />
        <img
          src={shareSetupImg9}
          className="absolute w-[300px] right-[200px] top-[570px]"
        />
      </div>
    </div>
  );
};

export default ShareSetup;
