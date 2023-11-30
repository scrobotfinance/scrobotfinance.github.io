import ButtonSmall from "./button-small";
import { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Modal from 'react-modal';
import Head from 'next/head';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };


  return (
    <div className="relative w-full h-auto text-center text-13xl text-garbi-version-2-30-white">
      <Head>
        <meta property="og:title" content="ScroBot: Elevate Your Crypto Trading with AI-Powered Precision on Telegram!" />
        <meta property="og:description" content="ScroBot is the ultimate Telegram based platform. Empower your journey with advanced AI tools, intelligent trading features, and a revolutionary tokenomics system. Join us where innovation meets accessibility, shaping a new era in crypto trading!" />
        <meta property="og:image" content="/scrobot-for-social.png" />
      </Head>
      <div className="bg-garbi-version-2-60-black w-full h-auto overflow-hidden">
        <div className="container mx-auto py-[24px] overflow-hidden text-left text-base">
          <div className="grid grid-cols-2 px-[16px] lg:px-0 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="logo flex items-center">
              <a href="/">
                <img
                  className=""
                  alt=""
                  src="/group-14073.svg"
                />
              </a>
            </div>
            <div className={`lg:col-span-3 col-span-1 flex flex-row items-center justify-end gap-[48px] lg:flex hidden`}>
              <ScrollLink
                to="features"
                spy={true}
                smooth={true}
                offset={-70} 
                duration={500}
                className="text-white no-underline relative leading-[120%] font-semibold"
              >
                Features
              </ScrollLink>
              <ScrollLink
                to="tokenomic"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-white no-underline relative leading-[120%] font-semibold"
              >
                Token Utility
              </ScrollLink>
              <a href="https://t.me/Scrobot_Official" target="_blank" className="text-white no-underline relative leading-[120%] font-semibold">
                Community
              </a>
              <ButtonSmall 
                openModal={openModal}
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

        {/* Modal */}
        <Modal
          className=""
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1000,
            },
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              width: '400px',
            },
          }}
        >
          <h2>🚀 Coming Soon! 🚀</h2>
          <p>
          Get ready for the SBOT token project launch! We're thrilled to announce that the SBOT token will soon be introduced. Curious to know more? Stay tuned for further details about the upcoming ScroBot project. (https://twitter.com/Scrobot_eth)
          </p>
          <h2>🌟 Anticipate the Excitement</h2>
          <ul>
              <li>
                  Intelligent Trading Tools
              </li>
              <li>
                  Gas Fee Savings
              </li>
              <li>
                  Anti-MEV and Anti-Rug Measures
              </li>
              <li>
                  Wallet Monitoring with Analytics
              </li>
              <li>
                  Comprehensive DEX Integration
              </li>
              <li>
                  Dynamic 80% Revenue Sharing
              </li>
          </ul>
            <p>Stay tuned for the big reveal!</p>
        </Modal>

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
            <ButtonSmall onClick={openModal}
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
