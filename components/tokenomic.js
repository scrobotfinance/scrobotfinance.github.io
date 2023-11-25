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
      className="bg-apple-style-white-2 w-full flex flex-col items-start justify-start py-[120px] box-border [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] text-left text-5xl text-apple-style-dark-4 font-sf-pro-display-heading-h6"
      data-animate-on-scroll
    >
      <div className="relative flex items-center container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        <div
          className="[&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0]"
          data-animate-on-scroll
        >
          <b className=" text-21xl leading-[120%] inline-block text-garbi-version-2-60-black mb-[32px]">
            Tokenomic
          </b>
          <div className=" leading-[120%] font-semibold inline-block mb-[32px]">
            ScroBot, powered by $SBOT token on Ethereum blockchain, with a limited supply of 1,250,000 $SBOT

          </div>
          <div className=" leading-[120%] font-semibold inline-block mb-[32px]">
          Token holders not only engage in a Referral Program but also receive a 80% revenue share in $ETH from the TelegramBot, coupled with a 20% transaction fee discount. With features like premium access for multi-wallet usage, voting rights, and lucrative staking options, ScroBot empowers its community to actively shape the future.  
          </div>
          <div className=" leading-[120%] font-semibold inline-block w-[640px]">
            Telegram Bot flexible transaction fee 0.1 - 0.5%
          </div>
          
        </div>
        <div className="img ">
          <img
            className=" w-full h-auto object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0]"
            alt=""
            src="/group-1407-10@2x.png"
            data-animate-on-scroll
          />
        </div>
      </div>
    </div>
  );
};

export default Tokenomic;
