import ButtonSmall from "./button-small";
import { Button } from "antd";

const Welcome = () => {
  return (
    <div className="container grid grid-cols-2 gap-[64px] mx-auto text-left text-45xl text-garbi-version-2-60-black mb-[80px]">
      <div className="flex items-center justify-start">
        <div className="">
          <b className="leading-[120%] text-[60px] mb-[24px]">
            Welcome to the future of ScroBot governance
          </b>
          <div className="text-[28px] leading-[120%] font-semibold text-garbi-version-2-30-white-40 mb-[48px]">
            Introducing ScroBot token: empowering our community to directly
            shape the ScroBot Network’s evolution. Search below to verify
            eligibility of your Ethereum wallet address
          </div>
          <div className="flex flex-row items-center justify-start gap-[64px]">
            <Button type="primary" size="large" className="p-[16px]">
              Connect to Check Eligibility
            </Button>
            <Button size="large" className="p-[16px] bg-black text-white hover:bg-transparent ">
              Search for an Address
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
