import { useEffect , useState } from "react";

const Footer = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="relative bg-garbi-version-2-30-white w-full overflow-hidden flex flex-col items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] text-left text-base text-apple-style-dark-2"
     data-animate-on-scroll
     >
      <div className="container mx-auto bg-garbi-version-2-30-white py-6 px-0 gap-[341px] border-t-[2px] border-solid border-garbi-version-2-30-white-85">
        <div className="grid grid-cols-2 px-[16px] lg:px-0 lg:gap-4">
          <div className=" lg:flex hidden flex-row items-center justify-start gap-[80px]">
            {/* <a href="#" className="text-black no-underline relative leading-[120%] font-semibold">Security</a> */}
            <a href="https://scroboteth.gitbook.io/" target="_blank" className="text-black no-underline relative leading-[120%] font-semibold">
              Documentation
            </a>
            <a href="#" className="text-black no-underline relative leading-[120%] font-semibold">
              Governance
            </a>
          </div>
          <div className="lg:hidden">
            <div className="menu-toggle lg:hidden col-span-1 flex items-center justify-start">
                <button className="bg-transparent" onClick={toggleMenu}>
                  <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>
            {/* Responsive menu */}
            <div className={`lg:hidden text-left container mx-auto ${menuOpen ? 'block' : 'hidden'}`}>
              {/* <a href="/" className="block mt-4 text-black text-base no-underline relative leading-[120%] font-semibold">
                Security
              </a> */}
              <a href="https://scroboteth.gitbook.io/" target="_blank" className="block mt-4 text-black text-base no-underline relative leading-[120%] font-semibold">
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
            <a href="https://github.com/scrobotfinance/scrobotfinance.github.io" target="_blank" className="text-black mr-[48px] no-underline">
              <img className="w-8 h-8" alt="" src="/github-icon.svg" />
            </a>
            <a href="https://twitter.com/Scrobot_eth" target="_blank" className="text-black no-underline">
              <img className="w-8 h-8" alt="" src="/twitter-icon.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
