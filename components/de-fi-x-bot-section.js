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
      className="bg-garbi-version-2-30-white container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 sm:gap-2 overflow-hidden flex flex-row items-center justify-center py-[120px] box-border gap-[160px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_fade-in] opacity-[0] text-left lg:text-21xl text-[32px] text-garbi-version-2-60-black font-sf-pro-display-heading-h6"
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
        <div className=" mb-[74px] px-[16px] lg:px-0">
          <b className=" leading-[120%] mb-[24px] inline-block ">
          ScroBot: Transforming DeFi into an Easy and Inclusive Experience - All from the Comfort of Telegram.
          </b>
          <div className=" text-5xl md:text-xl sm:text-xl leading-[120%] font-semibold text-apple-style-dark-4 inline-block ">
          Step confidently into the realm of decentralized finance without the hassle. ScroBot introduces a streamlined interface catering to all your DeFi necessities, spanning from trading to governance, conveniently accessible through Telegram.
          </div>
        </div>
        <div className=" mb-[74px] px-[16px] lg:px-0">
          <b className=" leading-[120%] mb-[24px] inline-block ">
            Initial Stake Offering (ISO) is a unique approach to fundraising
          </b>
          <div className=" text-5xl md:text-xl sm:text-xl leading-[120%] font-semibold text-apple-style-dark-4 inline-block ">
            Instead of buying tokens at fixed prices, participants stake their funds in a project's pool. The pooled funds are then used for DeFi activities, generating profits. These profits are shared, with 50% going to users and 50% used to provide liquidity for the project's token. Participants also receive airdropped project tokens based on their stake, promoting community engagement. With minimal risk, users can withdraw their funds after 7days.
          </div>
        </div>
        <div className="  mb-[74px] px-[16px] lg:px-0">
          <b className="leading-[120%] mb-[24px] inline-block">
            Staking Rewards - Earn POINTs - Receive Airdrop
          </b>
          <div className=" text-5xl md:text-xl sm:text-xl leading-[120%] font-semibold text-apple-style-dark-4 inline-block ">
            Earn bonus points by "JOIN EARLY ACCESS", completing daily and weekly tasks, and receiving additional spins based on the deposited amount. Increase the lucky spin percentage through team activity for a chance to get a "Super Spin" with 10x rewards.
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeFiXBotSection;
