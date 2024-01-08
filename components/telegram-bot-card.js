"use client";
import ButtonSmall from "./button-small";
import { Button } from "antd";
import Modal from 'react-modal';
import { useState } from "react";
import { useRouter } from "next/router";

const TelegramBotCard = () => {
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="relative w-full h-auto text-center text-[28px] lg:text-13xl text-garbi-version-2-30-white">
      <div className="bg-garbi-version-2-60-black pb-[50px] lg:pb-[219px] w-full h-auto overflow-hidden">
        <div className="container mx-auto relative pt-[50px] lg:pt-0">
          <div className="text-[20px] md:text-5xl px-[16px] py-[4px] lg:py-[8px] leading-[120%] mb-[24px] font-semibold inline-block border-[1px] border-solid border-garbi-version-2-30-white-50 rounded-[32px]">
            Built on  
            <img
                className="relative rounded-3xs w-5 h-5 overflow-hidden shrink-0 mx-[8px]"
                alt=""
                src="/eth-token.svg"
            /> 
            Ethereum
          </div>
          <img
            className=" w-full h-auto object-cover"
            alt=""
            src="/asset-12x-1@2x.png"
          />
          <div className="text-[30px] lg:text-21xl px-[16px] lg:px-0 leading-[120%] mb-[24px] font-semibold flex justify-center">
            <div className="w-fit px-[16px] py-[4px] lg:py-[8px] border-[1px] border-solid border-garbi-version-2-30-white-50 rounded-[32px]">
              ISO TELEGRAM BOT
            </div>
          </div>
          <div className="text-[20px] lg:text-5xl px-[16px] lg:px-0 leading-[120%] mb-[24px] font-semibold inline-block ">
            Staking Rewards - Earn POINTs, Receive Airdrop
          </div>
          <div className="text-[20px] lg:text-5xl leading-[120%] px-[16px] lg:px-0 mb-[24px] font-semibold inline-block ">
            Unique Initial Stake Offering (ISO) model seamlessly integrated with TelegramBot, easy and fast trading experience.
          </div>
          <div className="text-[20px] lg:text-5xl leading-[120%] px-[16px] lg:px-0 mb-[48px] font-semibold block ">
            Start Now to claim your airdrop.
          </div>
          <div>
            <Button className="bg-[#2997ff] border-0 text-white px-[20px] font-semibold text-xl h-[60px] hover:text-[#2997ff] hover:bg-white" onClick={() => router.push("/stake-page")}>
                <span className="">Earn Points</span>
            </Button>
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
