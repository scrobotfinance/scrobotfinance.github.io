import { useEffect } from "react";
import Tokenomic from "../components/tokenomic";
import TelegramBotCard from "../components/telegram-bot-card"
import DeFiXBotFeaturesSection from "../components/de-fi-x-bot-features-section";
import DeFiXBotSection from "../components/de-fi-x-bot-section";

const Frame = () => {
useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio >= 1.0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 1.0,
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
    <div className="relative bg-garbi-version-2-30-white w-full overflow-hidden flex flex-col items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] text-left text-base text-apple-style-dark-2"
     data-animate-on-scroll
     >
      <TelegramBotCard />
      <DeFiXBotSection />
      <Tokenomic />
      <DeFiXBotFeaturesSection />
      <div className="bg-garbi-version-2-30-white flex flex-row items-center justify-center py-6 px-0 gap-[341px] border-t-[2px] border-solid border-garbi-version-2-30-white-85">
        <div className="flex flex-row items-start justify-start gap-[80px]">
          <a href="#" className="text-black no-underline relative leading-[120%] font-semibold">Security</a>
          <a href="#" className="text-black no-underline relative leading-[120%] font-semibold">
            Documentation
          </a>
          <a href="#" className="text-black no-underline relative leading-[120%] font-semibold">
            Governance
          </a>
        </div>
        <div className="flex flex-row items-center gap-4">
          <a href="#" className="text-black mr-[48px] no-underline">
            <img className="w-8 h-8" alt="" src="/telegram-icon.svg" />
          </a>
          <a href="#" className="text-black mr-[48px] no-underline">
            <img className="w-8 h-8" alt="" src="/github-icon.svg" />
          </a>
          <a href="#" className="text-black no-underline">
            <img className="w-8 h-8" alt="" src="/twitter-icon.svg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Frame;
