import ButtonSmall from "./button-small";
import { Button } from "antd";
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';


const Welcome = () => {
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-[64px] mx-auto text-left text-garbi-version-2-60-black mb-[80px]">
      <div className="flex items-center justify-start px-[16px] lg:px-0">
        <div>
          <div className="leading-[120%] text-[30px] lg:text-[64px] mb-[24px] font-bold">
            Welcome to Real TeleBot, helping you earn more profits
          </div>
          <div className="text-[16px] lg:text-[28px] leading-[120%] font-semibold text-garbi-version-2-30-white-40 mb-[24px] lg:mb-[48px]">
            The new Initial Stake Offering model is the blast we all wanted. ISO creates a fair opportunity with very low risk, distributing all tokens to users through airdrops.
          </div>
          <div className="hidden lg:flex flex-row items-center justify-start gap-[64px]">
            <Button type="primary" size="large" className="!px-[40px] !h-[51px] flex items-center" onClick={() => router.push("/stake-page")} >
              Connect to earn POINTs
            </Button>
            <Button size="large" className="!px-[40px] bg-black text-white hover:bg-transparent !h-[51px] flex items-center" onClick={(openModal)}>
              Convert $POINT
            </Button>
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
        </div>
      </div>
      <div>
        <img
          className="relative w-full object-cover mix-blend-normal"
          alt=""
          src="/oigayl6cnyzks-wqyze-1@2x.png"
        />
      </div>
      
    </div>
  );
};

export default Welcome;
