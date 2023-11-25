import ButtonSmall from "./button-small";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <div className="relative w-full h-auto text-center text-13xl text-garbi-version-2-30-white">
      <div className="bg-garbi-version-2-60-black w-full h-auto overflow-hidden">
        <div className="container mx-auto py-[24px] overflow-hidden text-left text-base">
          <div className="grid grid-cols-2 px-[16px] lg:px-0 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="logo flex items-center">
              <a href="#">
                <img
                  className=""
                  alt=""
                  src="/group-14073.svg"
                />
              </a>
            </div>
            <div className={`lg:col-span-3 col-span-1 flex flex-row items-center justify-end gap-[48px] lg:flex hidden`}>
              <a href="#features" className="text-white no-underline relative leading-[120%] font-semibold">
                Features
              </a>
              <a href="#tokenomic" className="text-white no-underline relative leading-[120%] font-semibold">
                Token Utility
              </a>
              <a href="#" className="text-white no-underline relative leading-[120%] font-semibold">
                Community
              </a>
              <ButtonSmall
                buttonText="Get Started"
                buttonSmallBorderRadius="8px"
                buttonSmallBorder="unset"
                buttonSmallPosition="unset"
                buttonSmallTop="unset"
                buttonSmallBottom="unset"
                buttonSmallLeft="unset"
                buttonSmallBackgroundColor="#2997ff"
                readMoreFontSize="16px"
                readMoreLineHeight="120%"
                readMoreColor="#fff"
              />
            </div>
            <div className="menu-toggle lg:hidden col-span-1 flex items-center justify-end">
              <button className="bg-transparent" onClick={toggleMenu}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Responsive menu */}
        <div className={`lg:hidden text-left container mx-auto ${menuOpen ? 'block' : 'hidden'}`}>
          <div className=" px-[16px] lg:px-0">
            <a href="#features" className="block mt-4 text-white text-base no-underline relative leading-[120%] font-semibold">
              Features
            </a>
            <a href="#tokenomic" className="block mt-4 text-white text-base no-underline relative leading-[120%] font-semibold">
              Token Utility
            </a>
            <a href="#" className="block mt-4 mb-4 text-white text-base no-underline relative leading-[120%] font-semibold">
              Community
            </a>
            <ButtonSmall
              buttonText="Get Started"
              buttonSmallBorderRadius="8px"
              buttonSmallBorder="unset"
              buttonSmallPosition="unset"
              buttonSmallTop="unset"
              buttonSmallBottom="unset"
              buttonSmallLeft="unset"
              buttonSmallBackgroundColor="#2997ff"
              readMoreFontSize="16px"
              readMoreLineHeight="120%"
              readMoreColor="#fff"
            />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Header;