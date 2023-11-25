import { useEffect , useState } from "react";
import Tokenomic from "../components/tokenomic";
import TelegramBotCard from "../components/telegram-bot-card"
import DeFiXBotFeaturesSection from "../components/de-fi-x-bot-features-section";
import DeFiXBotSection from "../components/de-fi-x-bot-section";

const Frame = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
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
      <div className="container mx-auto bg-garbi-version-2-30-white flex flex-row items-center justify-between py-6 px-0 gap-[341px] border-t-[2px] border-solid border-garbi-version-2-30-white-85">
        <div className="grid grid-cols-2 px-[16px] lg:px-0 lg:gap-4 sm:gap-2 w-full sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-3 lg:flex hidden flex-row items-start justify-start gap-[80px]">
            <a href="#" className="text-black no-underline relative leading-[120%] font-semibold">Security</a>
            <a href="#" className="text-black no-underline relative leading-[120%] font-semibold">
              Documentation
            </a>
            <a href="#" className="text-black no-underline relative leading-[120%] font-semibold">
              Governance
            </a>
          </div>
          <div>
            <div className="menu-toggle lg:hidden col-span-1 flex items-center justify-start">
                <button className="bg-transparent" onClick={toggleMenu}>
                  <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>
            {/* Responsive menu */}
            <div className={`lg:hidden text-left container mx-auto ${menuOpen ? 'block' : 'hidden'}`}>
              <a href="#" className="block mt-4 text-black text-base no-underline relative leading-[120%] font-semibold">
                Security
              </a>
              <a href="#" className="block mt-4 text-black text-base no-underline relative leading-[120%] font-semibold">
                Documentation
              </a>
              <a href="#" className="block mt-4 text-black mb-4 text-base no-underline relative leading-[120%] font-semibold">
                Governance
              </a>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end gap-4">
            <a href="https://t.me/Scrobot_Announcements" target="_blank" className="text-black mr-[48px] no-underline">
              <img className="w-8 h-8" alt="" src="/telegram-icon.svg" />
            </a>
            <a href="#" className="text-black mr-[48px] no-underline">
              <img className="w-8 h-8" alt="" src="/github-icon.svg" />
            </a>
            <a href="#https://twitter.com/Scrobot_eth" target="_blank" className="text-black no-underline">
              <img className="w-8 h-8" alt="" src="/twitter-icon.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
