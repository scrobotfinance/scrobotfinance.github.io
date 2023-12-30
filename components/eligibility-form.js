import { Button } from "antd";
import { useRouter } from 'next/router';


const EligibilityForm = () => {
  const router = useRouter();
  return (
    <div className="container mx-auto rounded-2xl bg-garbi-version-2-30-white gap-[64px] text-center text-21xl text-garbi-version-2-60-black border-[1px] border-solid border-apple-style-dark-4 mb-[80px]">
      <div className="py-[64px] px-[64px] flex flex-col items-center justify-start gap-[8px]">
        <div className="self-stretch relative leading-[120%] font-semibold mb-[8px]">
          ScroBot is faster and offers more opportunities
        </div>
        <div className="self-stretch relative text-9xl leading-[120%] font-semibold text-dodgerblue">
          {/* <span>Connect Wallet</span> */}
          <span className="text-garbi-version-2-30-white-40 text-[28px]">
            {" "}
            Start now with ScroBot to earn POINTS and receive Airdrops
          </span>
          
        </div>
        <Button className="bg-[#2997ff] border-0 text-white px-[20px] font-semibold text-xl h-[60px] hover:text-[#2997ff] hover:bg-white" onClick={() => router.push("/stake-page")}>
            <span className="">Join Early Access</span>
        </Button>
      </div>
      <div className="mx-[64px] relative bg-apple-style-dark-4 h-px" />
      <div className="py-[64px] px-[64px] flex flex-col items-start justify-start gap-[8px] text-left text-xl">
        <div className="self-stretch relative leading-[120%] font-semibold">
          Only 60 days left to claim...
        </div>
        <div className="self-stretch rounded-xl bg-garbi-version-2-30-white-85 overflow-hidden flex flex-col items-start justify-start">
          <div className="relative [background:linear-gradient(180deg,_#38a0ff,_#096ecc)] w-[71px] h-6 overflow-hidden shrink-0" />
        </div>
      </div>
    </div>
  );
};

export default EligibilityForm;
