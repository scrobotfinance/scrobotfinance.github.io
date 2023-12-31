import ButtonSmall from "./button-small";
import { Button } from "antd";
import { useRouter } from 'next/router';

const ScroBotTokenContainer = () => {
  const router = useRouter();
  return (
    <div className="container mx-auto grid gird-cols-1 lg:grid-cols-2 bg-apple-style-white-2 flex flex-row items-center justify-start gap-[64px] text-left text-[20px] lg:text-21xl text-garbi-version-2-60-black">
      <div className="p-[0px] lg:p-[64px] !pr-0">
        <img
          className="relative w-full object-cover mix-blend-multiply"
          alt=""
          src="/oig-1-1@2x.png"
        />  
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[20px] lg:gap-[40px] pr-16px lg:pr-[64px] p-[16px] lg:p-0">
        <div className=" flex flex-col items-start justify-start gap-[16px]">
          <div className=" relative leading-[120%] font-semibold">
            What is ScroBot token?
          </div>
          <div className=" relative text-[16px] lg:text-[28px] leading-[120%] font-semibold text-garbi-version-2-30-white-40">
            $SBOT token is the governance token for ScroBot, designed to decentralize decision-making within the ecosystem. It enables community members to participate in governance, share profits from the ecosystem, and reduce transaction fees. Additionally, SBOT is used for payments Premium features, enhancing the overall professional experience.
          </div>
        </div>
        <Button size="large" className="px-[40px] bg-black text-white hover:bg-transparent !h-[51px] flex items-center" onClick={() => router.push("https://scroboteth.gitbook.io/scrobot/road-map/phase-1-iso-initial-stake-offering")} >
            Read More
        </Button>
      </div>
    </div>
  );
};

export default ScroBotTokenContainer;
