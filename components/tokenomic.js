import { useEffect } from "react";

const Tokenomic = () => {
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
    <div id="tokenomic"
      className="bg-apple-style-white-2 h-[1003px] flex flex-col items-start justify-start py-[120px] px-[172px] box-border [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] text-left text-5xl text-apple-style-dark-4 font-sf-pro-display-heading-h6"
      data-animate-on-scroll
    >
      <div className="relative w-[1576px] h-[763px]">
        <img
          className="absolute top-[calc(50%_-_381.5px)] left-[800px] w-[776px] h-[763px] object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0]"
          alt=""
          src="/group-1407-10@2x.png"
          data-animate-on-scroll
        />
        <div
          className="absolute top-[165px] left-[0px] w-[640px] h-[434px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="absolute top-[80px] left-[0px] leading-[120%] font-semibold inline-block w-[640px]">
            ScroBot, powered by $SBOT token on Scroll blockchain, with a limited
            supply of 1,250,000 $SBOT
          </div>
          <div className="absolute top-[170px] left-[0px] leading-[120%] font-semibold inline-block w-[640px]">{`Token holders not only engage in a Referral Program but also receive a 50% revenue share in $ETH from the TelegramBot, coupled with a 20% transaction fee discount. With features like premium access for multi-wallet usage, voting rights, and lucrative staking options, ScroBot empowers its community to actively shape the future. `}</div>
          <div className="absolute top-[405px] left-[0px] leading-[120%] font-semibold inline-block w-[640px]">
            Telegram Bot flexible transaction fee 0.1 - 0.5%
          </div>
          <b className="absolute top-[0px] left-[0px] text-21xl leading-[120%] inline-block text-garbi-version-2-60-black w-[640px]">
            Tokenomic
          </b>
        </div>
      </div>
    </div>
  );
};

export default Tokenomic;
