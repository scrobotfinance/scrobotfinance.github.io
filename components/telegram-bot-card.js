import ButtonSmall from "./button-small";

const TelegramBotCard = () => {
  return (
    <div className="relative w-full h-auto text-center text-[28px] lg:text-13xl text-garbi-version-2-30-white">
      <div className="bg-garbi-version-2-60-black pb-[219px] w-full h-auto overflow-hidden">
        <div className="container mx-auto relative">
          <img
            className=" w-full h-auto object-cover"
            alt=""
            src="/asset-12x-1@2x.png"
          />
          <div className="text-xl px-[16px] lg:px-0 leading-[120%] mb-[24px] font-semibold inline-block ">
            Embark on your DeFi journey effortlessly—No confusing blockchain talk, just fast and budget-friendly trading on Telegram.
          </div>
          <div className="leading-[120%] px-[16px] lg:px-0 mb-[48px] font-semibold inline-block ">
            Explore decentralized finance without the complications. Our user-friendly Telegram bot takes care of all the technical details, enabling you to trade quickly and cost-effectively with just a few taps.
          </div>
          <ButtonSmall
            buttonText="Start Trading"
            buttonSmallBorderRadius="8px"
            buttonSmallBorder="unset"
            buttonSmallPosition="absolute"
            buttonSmallTop=""
            buttonSmallBottom="-51px"
            buttonSmallLeft="calc(50% - 70px)"
            buttonSmallBackgroundColor="#2997ff"
            readMoreFontSize="16px"
            readMoreLineHeight="120%"
            readMoreColor="#f5f5f7"
          />
        </div>
      </div>
     
    </div>
  );
};

export default TelegramBotCard;
