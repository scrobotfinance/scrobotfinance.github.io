import TelegramBotCard from "../components/telegram-bot-card";
import DeFiXBotSection from "../components/de-fi-x-bot-section";
import DeFiXBotFeaturesSection from "../components/de-fi-x-bot-features-section";

const Frame = () => {
  return (
    <div className="relative bg-apple-style-white-2 w-full overflow-hidden flex flex-col items-center justify-center text-left text-base text-apple-style-dark-2 font-sf-pro-display-heading-h6">
      <TelegramBotCard />
      <DeFiXBotSection />
      <DeFiXBotFeaturesSection />
      <div className="bg-apple-style-white-2 flex flex-row items-center justify-center py-6 px-0 gap-[341px] border-t-[2px] border-solid border-garbi-version-2-30-white-85">
        <div className="flex flex-row items-start justify-start gap-[80px]">
          <a href="#" className="text-black no-underline relative leading-[120%] font-semibold">Security</a>
          <a href="#" className="text-black no-underline relative leading-[120%] font-semibold">
            Documentation
          </a>
          <a href="#" className="text-black no-underline relative leading-[120%] font-semibold">
            Contact us
          </a>
          <a href="#" className="text-black no-underline relative leading-[120%] font-semibold">Contracts</a>
          <a href="#" className="text-black no-underline relative leading-[120%] font-semibold">
            Governance
          </a>
        </div>
        <img className="relative w-48 h-8" alt="" src="/group-14072.svg" />
      </div>
    </div>
  );
};

export default Frame;
