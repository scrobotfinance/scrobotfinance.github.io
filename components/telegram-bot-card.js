import ButtonSmall from "./button-small";

const TelegramBotCard = () => {
  return (
    <div className="relative w-[1920px] h-[1080px] text-center text-13xl text-garbi-version-2-30-white font-sf-pro-display-heading-h6">
      <div className="absolute top-[0px] left-[0px] bg-garbi-version-2-60-black w-[1920px] h-[1080px] overflow-hidden">
        <img
          className="absolute top-[203px] left-[calc(50%_-_235px)] w-[470px] h-[475px] object-cover"
          alt=""
          src="/asset-12x-1@2x.png"
        />
        <div className="absolute top-[782px] left-[calc(50%_-_628px)] w-[1256px] h-[234px]">
          <div className="absolute top-[53px] left-[calc(50%_-_628px)] leading-[120%] font-semibold inline-block w-[1256px]">
            Dive into decentralized finance without the complexity. Our free
            Telegram bot handles all the technicalities for you, allowing you to
            trade swiftly and affordably with just a few taps
          </div>
          <div className="absolute top-[0px] left-[calc(50%_-_628px)] text-5xl leading-[120%] font-semibold inline-block w-[1256px]">
            The Simplest Gateway to DeFi—No Blockchain Jargon, Just Quick and
            Affordable Trading on Telegram
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
            readMoreFontFamily="'SF Pro Display'"
            readMoreColor="#f5f5f7"
          />
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-apple-style-dark-3 w-[1920px] h-[99px] overflow-hidden text-left text-base">
        <div className="absolute top-[calc(50%_-_25.5px)] left-[332.4px] w-[1255px] h-[51px]">
          <div className="absolute top-[calc(50%_-_25.5px)] left-[536px] w-[719px] flex flex-row items-center justify-start gap-[48px]">
            <div className="relative leading-[120%] font-semibold">
              Features
            </div>
            <div className="relative leading-[120%] font-semibold">
              Token Utility
            </div>
            <div className="relative leading-[120%] font-semibold">
              DefiXBot
            </div>
            <div className="relative leading-[120%] font-semibold">Airdrop</div>
            <div className="relative leading-[120%] font-semibold">
              Community
            </div>
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
              readMoreFontFamily="'SF Pro Display'"
              readMoreColor="#fff"
            />
          </div>
          <img
            className="absolute top-[9px] left-[0px] w-[261px] h-[34px]"
            alt=""
            src="/group-14073.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default TelegramBotCard;
