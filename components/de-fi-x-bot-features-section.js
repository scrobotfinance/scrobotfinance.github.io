import { useEffect } from "react";

const DeFiXBotFeaturesSection = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className="bg-garbi-version-2-30-white flex flex-col items-center justify-start py-[120px] px-[332px] gap-[48px] text-center text-21xl text-garbi-version-2-60-black font-sf-pro-display-heading-h6">
      <div
        className="relative w-[1256px] h-[178px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
        data-animate-on-scroll
      >
        <b className="absolute top-[0px] left-[calc(50%_-_628px)] leading-[120%] inline-block w-[1256px]">
          <p className="m-0">{``}</p>
          <p className="m-0">
            Enhance Your DeFi Adventure with Our Comprehensive Telegram Companion
          </p>
        </b>
        <div className="absolute top-[128px] left-[calc(50%_-_628px)] w-[1256px] h-[58px] text-5xl text-apple-style-dark-4">
          <div className="absolute top-[0px] left-[calc(50%_-_628px)] leading-[120%] font-semibold inline-block w-[1256px]">
              Enjoy a seamless, feature-packed DeFi journey—all within the comfort of Telegram. Let's dive into the five core aspects that make ScroBot the ultimate destination for your DeFi endeavors. And the best part? it's free to use.
          </div>
        </div>
      </div>
      <div
        className="relative w-[1256px] h-[376px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-bottom] opacity-[0] text-left text-xl"
        data-animate-on-scroll
      >
        <div className="absolute top-[0px] left-[0px] rounded-2xl bg-apple-style-white-2 w-[296px] h-[376px] overflow-hidden">
          <img
            className="absolute top-[64px] left-[18px] w-10 h-10 overflow-hidden"
            alt=""
            src="/materialsymbolsnestclockfarsightanalogoutlinerounded.svg"
          />
          <div className="absolute top-[120px] left-[18px] leading-[120%] font-semibold inline-block w-[260px]">
            Decentralized Exchange (Dex) Trading
          </div>
          <div className="absolute top-[189px] left-[calc(50%_-_130px)] text-base leading-[150%] inline-block w-[260px]">
            Streamlined and Stylish: Effortlessly navigate platforms like KyberSwap, SyncSwap..., complete with advanced features such as Limit Orders and exclusive Early Access Tokens—all within an intuitive interface.
          </div>
          <img
            className="absolute top-[69px] left-[18px] w-10 h-10"
            alt=""
            src="/clock.svg"
          />
        </div>
        <div className="absolute top-[0px] left-[320px] bg-apple-style-white-2 w-[296px] h-[380px] overflow-hidden">
          <div className="absolute top-[125px] left-[calc(50%_-_130px)] leading-[120%] font-semibold inline-block w-[260px]">
            Effortless Entry to DeFi Apps
          </div>
          <div className="absolute top-[189px] left-[calc(50%_-_130px)] text-base leading-[150%] inline-block w-[260px]">
            Your DeFi Hub: Engage with popular DeFi platforms like Aave, Comp... and Compound without the headaches. Our bot's user-friendly setup ensures that interacting with DeFi apps is a breeze for everyone.
          </div>
          <img
            className="absolute top-[69px] left-[18px] w-10 h-10 overflow-hidden"
            alt=""
            src="/sniper.svg"
          />
        </div>
        <div className="absolute top-[0px] left-[640px] bg-apple-style-white-2 w-[296px] h-[380px] overflow-hidden">
          <div className="absolute top-[125px] left-[calc(50%_-_130px)] leading-[120%] font-semibold inline-block w-[260px]">
            AI-Enhanced Trading Assistance
          </div>
          <div className="absolute top-[189px] left-[calc(50%_-_130px)] text-base leading-[150%] inline-block w-[260px]">
            Smart Support at Your Service: Experience the next level with ScroBot's AI-backed features. Our bot is here to assist and optimize your trading strategies, bringing an extra layer of intelligence to your DeFi journey.
          </div>
          <img
            className="absolute top-[69px] left-[18px] w-10 h-10 overflow-hidden"
            alt=""
            src="/transfer.svg"
          />
        </div>
        <div className="absolute top-[0px] left-[960px] bg-apple-style-white-2 w-[296px] h-[380px] overflow-hidden">
          <div className="absolute top-[125px] left-[calc(50%_-_130px)] leading-[120%] font-semibold inline-block w-[260px]">
            Tailored for Scroll Layer 2 from the Get-Go
          </div>
          <div className="absolute top-[189px] left-[calc(50%_-_130px)] text-base leading-[150%] inline-block w-[260px]">
            Inaugural Support for Scroll: From day one, ScroBot is crafted to seamlessly integrate with Scroll Layer 2, offering users an immediate gateway into this dynamic ecosystem.
          </div>
          <img
            className="absolute top-[69px] left-[18px] w-10 h-10"
            alt=""
            src="/base.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default DeFiXBotFeaturesSection;
