import ButtonSmall from "./button-small";
import { Button } from "antd";

const ScroBotTokenContainer = () => {
  return (
    <div className="container mx-auto bg-apple-style-white-2 flex flex-row items-center justify-start gap-[64px] text-left text-21xl text-garbi-version-2-60-black">
      <img
        className="relative w-[604px] h-[604px] object-cover mix-blend-multiply"
        alt=""
        src="/oig-1-1@2x.png"
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[40px]">
        <div className=" flex flex-col items-start justify-start gap-[16px]">
          <div className=" relative leading-[120%] font-semibold">
            What is ScroBot token?
          </div>
          <div className=" relative text-[28px] leading-[120%] font-semibold text-garbi-version-2-30-white-40">
            ScroBot token is the governance token for the Jito Network, designed
            to decentralize decision-making within the ecosystem. It allows
            community members to participate in shaping the network's future by
            voting on key operational and strategic decisions.
          </div>
        </div>
        <Button size="large" className="p-[16px] bg-black text-white hover:bg-transparent ">
            Read More
        </Button>
      </div>
    </div>
  );
};

export default ScroBotTokenContainer;
