import { useEffect } from "react";

const DeFiXBotSection = () => {
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
    <div
      className="bg-garbi-version-2-30-white container mx-auto grid grid-cols-2 gap-4 overflow-hidden flex flex-row items-center justify-center py-[120px] box-border gap-[160px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_fade-in] opacity-[0] text-left text-21xl text-garbi-version-2-60-black font-sf-pro-display-heading-h6"
      data-animate-on-scroll
    >
      <div className="img" >
        <img
          className="relative w-full h-auto object-cover mix-blend-darken [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0]"
          alt=""
          src="/5701572-1@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div
        className="relative [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0]"
        data-animate-on-scroll
      >
        <div className=" mb-[74px]">
          <b className=" leading-[120%] mb-[24px] inline-block ">
          ScroBot: Transforming DeFi into an Easy and Inclusive Experience—All from the Comfort of Telegram.
          </b>
          <div className=" text-5xl leading-[120%] font-semibold text-apple-style-dark-4 inline-block ">
          Step confidently into the realm of decentralized finance without the hassle. ScroBot introduces a streamlined interface catering to all your DeFi necessities, spanning from trading to governance, conveniently accessible through Telegram.
          </div>
        </div>
        <div className=" mb-[74px]">
          <b className=" leading-[120%] mb-[24px] inline-block ">
            Seamless DeFi for Everyone.
          </b>
          <div className=" text-5xl leading-[120%] font-semibold text-apple-style-dark-4 inline-block ">
           ScroBot strives to simplify the DeFi landscape, making it accessible to a broad audience. No need for intricate blockchain knowledge—our bot takes care of the intricacies, ensuring a hassle-free DeFi experience for you.
          </div>
        </div>
        <div className="  mb-[74px]">
          <b className="leading-[120%] mb-[24px] inline-block">
            Collective Governance and Profit Distribution
          </b>
          <div className=" text-5xl leading-[120%] font-semibold text-apple-style-dark-4 inline-block ">
            Hold $SBOT tokens to become a vital part of our ecosystem. Beyond proposing and voting on platform enhancements, you also share in the bot's profits, creating a sense of community ownership and participation.
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeFiXBotSection;
