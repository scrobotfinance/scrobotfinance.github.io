import ButtonSmall from "./button-small";

const TelegramBotCard = () => {
  return (
    <div className="relative w-full h-auto text-center text-13xl text-garbi-version-2-30-white">
      <div className="bg-garbi-version-2-60-black pb-[219px] w-full h-auto overflow-hidden">
        
        <div className="container mx-auto py-[24px] bg-apple-style-dark-3  overflow-hidden text-left text-base">
          <div className="grid grid-cols-4 gap-4">
            <div className="logo flex items-center">
              <a href="#">
                <img
                  className=""
                  alt=""
                  src="/group-14073.svg"
                />
              </a>
            </div>
            <div className="menu-header col-span-3 flex flex-row items-center justify-end gap-[48px]">
              <a href="#features" className="text-white no-underline relative leading-[120%] font-semibold">
                Features
              </a>
              <a href="#tokenomic" className="text-white no-underline relative leading-[120%] font-semibold">
                Token Utility
              </a>
              <a href="#" className="text-white no-underline relative leading-[120%] font-semibold">
                Community
              </a>
              <ButtonSmall
                buttonText="Get Started"
                buttonSmallBorderRadius="8px"
                buttonSmallBorder="unset"
                buttonSmallPosition="unset"
                buttonSmallTop="unset"
                buttonSmallBottom="unset"
                buttonSmallLeft="unset"
                buttonSmallBackgroundColor="#2997ff"
                readMoreFontSize="16px"
                readMoreLineHeight="120%"
                readMoreColor="#fff"
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto relative">
          <img
            className=" w-[470px] h-[475px] py-[104px] object-cover"
            alt=""
            src="/asset-12x-1@2x.png"
          />
          <div className="text-5xl leading-[120%] font-semibold inline-block ">
            Embark on your DeFi journey effortlessly—No confusing blockchain talk, just fast and budget-friendly trading on Telegram.
          </div>
          <div className="leading-[120%] mb-[48px] font-semibold inline-block ">
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
