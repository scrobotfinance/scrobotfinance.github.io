import ButtonSmall from "./button-small";
import { Button } from "antd";

const Welcome = () => {
  return (
    <div className="container grid grid-cols-2 gap-[64px] mx-auto text-left text-45xl text-garbi-version-2-60-black mb-[80px]">
      <div className="flex items-center justify-start">
        <div className="">
          <b className="leading-[120%] text-[60px] mb-[24px]">
            Welcome to Real TeleBot, helping you earn more profits
          </b>
          <div className="text-[28px] leading-[120%] font-semibold text-garbi-version-2-30-white-40 mb-[48px]">
            The new Initial Stake Offering model is the blast we all wanted. ISO creates a fair opportunity with very low risk, distributing all tokens to users through airdrops.
          </div>
          <div className="flex flex-row items-center justify-start gap-[64px]">
            <Button type="primary" size="large" className="p-[16px]">
              Connect to earn POINTs
            </Button>
            <Button size="large" className="p-[16px] bg-black text-white hover:bg-transparent ">
              Convert $POINT
            </Button>
          </div>
        </div>
      </div>
      <div>
        <img
          className="relative w-full object-cover mix-blend-normal"
          alt=""
          src="/oigayl6cnyzks-wqyze-1@2x.png"
        />
      </div>
      
    </div>
  );
};

export default Welcome;
