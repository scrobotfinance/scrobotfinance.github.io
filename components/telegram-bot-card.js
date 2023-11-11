import ButtonSmall from "./button-small";

const TelegramBotCard = () => {
  return (
    <div className="relative w-[1920px] h-[1080px] text-center text-13xl text-garbi-version-2-30-white">
      <div className="absolute top-[0px] left-[0px] bg-garbi-version-2-60-black w-[1920px] h-[1080px] overflow-hidden">
        <img
          className="absolute top-[203px] left-[calc(50%_-_235px)] w-[470px] h-[475px] object-cover"
          alt=""
          src="/asset-12x-1@2x.png"
        />
        <div className="absolute top-[782px] left-[calc(50%_-_628px)] w-[1256px] h-[234px]">
          <div className="absolute top-[53px] left-[calc(50%_-_628px)] leading-[120%] font-semibold inline-block w-[1256px]">
            Explore decentralized finance without the complications. Our user-friendly Telegram bot takes care of all the technical details, enabling you to trade quickly and cost-effectively with just a few taps.
          </div>
          <div className="absolute top-[0px] left-[calc(50%_-_628px)] text-5xl leading-[120%] font-semibold inline-block w-[1256px]">
            Embark on your DeFi journey effortlessly—No confusing blockchain talk, just fast and budget-friendly trading on Telegram.
          </div>
          <ButtonSmall
            buttonText="Start Trading"
            buttonSmallBorderRadius="8px"
            buttonSmallBorder="unset"
            buttonSmallPosition="absolute"
            buttonSmallTop="183px"
            buttonSmallLeft="calc(50% - 70px)"
            buttonSmallBackgroundColor="#2997ff"
            readMoreFontSize="16px"
            readMoreLineHeight="120%"
            readMoreColor="#f5f5f7"
          />
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-apple-style-dark-3 w-[1920px] h-[99px] overflow-hidden text-left text-base">
        <div className="absolute top-[calc(50%_-_25.5px)] left-[332.4px] w-[1255px] h-[51px]">
          <div className="absolute top-[calc(50%_-_25.5px)] left-[536px] w-full flex flex-row items-center justify-start gap-[48px]">
            <a href="#" className="text-white no-underline relative leading-[120%] font-semibold">
              Features
            </a>
            <a href="#" className="text-white no-underline relative leading-[120%] font-semibold">
              Token Utility
            </a>
            <a href="#" className="text-white no-underline relative leading-[120%] font-semibold">
              DefiXBot
            </a>
            <a href="#" className="text-white no-underline relative leading-[120%] font-semibold">Airdrop</a>
            <a href="#" className="text-white no-underline relative leading-[120%] font-semibold">
              Community
            </a>
            <ButtonSmall
              buttonText="Get Started"
              buttonSmallBorderRadius="8px"
              buttonSmallBorder="unset"
              buttonSmallPosition="unset"
              buttonSmallTop="unset"
              buttonSmallLeft="unset"
              buttonSmallBackgroundColor="#2997ff"
              readMoreFontSize="16px"
              readMoreLineHeight="120%"
              readMoreColor="#fff"
            />
          </div>
          <a href="#">
            <img
              className="absolute top-[9px] left-[0px] w-[261px] h-[34px]"
              alt=""
              src="/group-14073.svg"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TelegramBotCard;
