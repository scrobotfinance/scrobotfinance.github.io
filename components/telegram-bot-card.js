import ButtonSmall from "./button-small";
import Modal from 'react-modal';
import { useState } from "react";

const TelegramBotCard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="relative w-full h-auto text-center text-[28px] lg:text-13xl text-garbi-version-2-30-white">
      <div className="bg-garbi-version-2-60-black pb-[219px] w-full h-auto overflow-hidden">
        <div className="container mx-auto relative">
          <div className="text-4xl px-[16px] lg:px-0 leading-[120%] mb-[24px] font-semibold inline-block ">
            Built on Ethereum
          </div>
          <img
            className=" w-full h-auto object-cover"
            alt=""
            src="/asset-12x-1@2x.png"
          />
          <div className="text-21xl px-[16px] lg:px-0 leading-[120%] mb-[24px] font-semibold">
            DEFI TELEGRAM BOT
          </div>
          <div className="text-4xl px-[16px] lg:px-0 leading-[120%] mb-[24px] font-semibold inline-block ">
            Staking Rewards - Earn rewards through Lido Ethereum Staking and DeFi Pool
          </div>
          <div className="text-5xl leading-[120%] px-[16px] lg:px-0 mb-[48px] font-semibold inline-block ">
            Embark on your DeFi journey effortlessly—No confusing blockchain talk, just fast and budget-friendly trading on Telegram.
          </div>
          <ButtonSmall
            openModal={openModal}
            buttonText="Start Trading"
            buttonSmallBorderRadius="8px"
            buttonSmallBorder="unset"
            buttonSmallPosition="absolute"
            buttonSmallTop=""
            buttonSmallBottom="-51px"
            buttonSmallLeft="calc(50% - 70px)"
            buttonSmallBackgroundColor="#2997ff"
            readMoreFontSize="16px"
            readMoreLineHeight="120%"
            readMoreColor="#f5f5f7"
          />
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
              background : 'rgba(128, 128, 128, 1)',
              color: "#fff",
              border: "rgba(128, 128, 128, 1)",
            },
          }}
        >
          <img
            className=""
            alt=""
            src="/group-14073.svg"
          />
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
    </div>
  );
};

export default TelegramBotCard;
