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
    <div id="features" className="container mx-auto bg-garbi-version-2-30-white py-[120px]  text-center lg:text-21xl text-[32px] text-garbi-version-2-60-black">
      <div
        className="mb-[69px] px-[16px] lg:px-0 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
        data-animate-on-scroll
      >
        <b className=" leading-[120%] inline-block mb-[24px]">
          <p className="m-0">{``}</p>
          <p className="m-0">
            Enhance Your DeFi Adventure
          </p>
          <p className="m-0">
            With Our Comprehensive Telegram Companion
          </p>
        </b>
        <div className=" text-5xl md:text-xl sm:text-xl text-apple-style-dark-4 ">
          <div className="leading-[120%] font-semibold inline-block ">
              Enjoy a seamless, feature - packed DeFi journey - all within the comfort of Telegram. Let's dive into the five core aspects that make ScroBot the ultimate destination for your DeFi endeavors. And the best part? it's free to use.
          </div>
        </div>
      </div>
      <div className="px-[16px] lg:px-0">
        <div
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4  w-full [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-bottom] opacity-[0] text-left text-xl"
          data-animate-on-scroll
        >
          <div className=" rounded-2xl bg-apple-style-white-2  py-[48px] px-[18px] overflow-hidden">
            <div className="icon w-full mb-[16px]">
              <img
                className=" w-10 h-10 overflow-hidden"
                alt=""
                src="/clock.svg"
              />
            </div>
            <div className=" leading-[120%] font-semibold inline-block mb-[16px]">
              Decentralized Exchange (Dex) Trading
            </div>
            <div className=" text-base leading-[150%] inline-block mb-[16px]">
              Streamlined and Stylish: Effortlessly navigate platforms like KyberSwap, SyncSwap..., complete with advanced features such as Limit Orders and exclusive Early Access Tokens—all within an intuitive interface.
            </div>
          </div>
          <div className=" rounded-2xl bg-apple-style-white-2 overflow-hidden py-[48px] px-[18px]">
            <div className="icon w-full mb-[16px]">
              <img
                className=" w-10 h-10 overflow-hidden"
                alt=""
                src="/sniper.svg"
              />
            </div>
            <div className=" leading-[120%] font-semibold inline-block mb-[16px]">
              Effortless Entry to DeFi Apps
            </div>
            <div className=" text-base leading-[150%] inline-block mb-[16px]">
              Your DeFi Hub: Engage with popular DeFi platforms like Aave, Comp... and Compound without the headaches. Our bot's user-friendly setup ensures that interacting with DeFi apps is a breeze for everyone.
            </div>

          </div>
          <div className=" rounded-2xl bg-apple-style-white-2 overflow-hidden py-[48px] px-[18px]">
            <div className="icon w-full mb-[16px]">
              <img
                className=" w-10 h-10 overflow-hidden"
                alt=""
                src="/transfer.svg"
              />
            </div>
            <div className=" leading-[120%] font-semibold inline-block mb-[16px]">
              AI-Enhanced Trading Assistance
            </div>
            <div className=" text-base leading-[150%] inline-block mb-[16px]">
              Smart Support at Your Service: Experience the next level with ScroBot's AI-backed features. Our bot is here to assist and optimize your trading strategies, bringing an extra layer of intelligence to your DeFi journey.
            </div>
            
          </div>
          <div className=" rounded-2xl bg-apple-style-white-2 overflow-hidden py-[48px] px-[18px]">
            <div className="icon w-full mb-[16px]">
              <img
                className=" w-10 h-10"
                alt=""
                src="/base.svg"
              />
            </div>
            <div className=" leading-[120%] font-semibold inline-block mb-[16px]">
              Revenue Sharing
            </div>
            <div className=" text-base leading-[150%] inline-block mb-[16px]">
              Earn 80% of platform fees by staking $SBOT tokens in your wallet. Weekly profit distributions reward loyal ScroBot users, promoting ongoing community involvement.
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeFiXBotFeaturesSection;
