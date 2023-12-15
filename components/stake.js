import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import MetaMaskConnect from './connect-wallet';

const Stake = () => {
    const [connectedAddress, setConnectedAddress] = useState(null);

    const initWeb3 = async () => {
        try {
            if (typeof window !== 'undefined' && window.ethereum) {
                window.web3 = new Web3(window.ethereum);
                await window.ethereum.enable();
                // Get the connected address
                const accounts = await window.web3.eth.getAccounts();
                setConnectedAddress(accounts[0]);
            } else if (typeof window !== 'undefined' && window.web3) {
                window.web3 = new Web3(window.web3.currentProvider);
                // Get the connected address
                const accounts = await window.web3.eth.getAccounts();
                setConnectedAddress(accounts[0]);
            } else {
                console.log('MetaMask not detected! Please install MetaMask extension.');
            }
        } catch (error) {
            console.error('Error initializing Web3:', error);
        }
    };

    const handleDepositClick = async () => {
        if (!connectedAddress) {
            // If wallet is not connected, initiate the connection
            await initWeb3();
        } else {
            // If wallet is connected, log the wallet address
            console.log('Connected Wallet Address:', connectedAddress);
            // Add your deposit logic here
        }
    };

  return (
    <div className="bg-garbi-version-2-30-white w-[1920px] h-[1080px] overflow-hidden flex flex-col items-start justify-start">
        {connectedAddress ? (
            <p>Connected Wallet Address: {connectedAddress}</p>
        ) : (
            <p>No wallet connected</p>
        )}
      <div className="h-[917px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-16 px-[332px] pb-[68px] box-border gap-[90px]">
        <section className="rounded-2xl bg-apple-style-white-2 overflow-hidden flex flex-col items-center justify-start p-6 gap-[24px] text-left text-9xl text-garbi-version-2-60-black font-sf-pro-display-display-h6">
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-4 gap-[8px] border-b-[1px] border-solid border-garbi-version-2-30-white-70">
              <div className="relative leading-[120%] font-semibold">
                Stake SCR
              </div>
              <div className="relative text-xl leading-[120%] text-garbi-version-2-30-white-40 inline-block w-[408px]">
                Choose how much you want to stake and earn rewards
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-apple-style-white-2 flex flex-row items-start justify-start gap-[16px] text-xl">
              <div className="flex-1 rounded-xl bg-garbi-version-2-30-white shadow-[0px_2px_2px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-start py-2 px-3.5 gap-[12px]">
                <div className="relative leading-[120%] font-semibold">Stake</div>
                <div className="flex-1 rounded-lg bg-garbi-version-2-semantic-success overflow-hidden flex flex-row items-center justify-center p-1 text-center text-base text-garbi-version-2-30-white font-inter-sb16">
                  <div className="relative leading-[24px] font-semibold">
                    ~8.5% APY
                  </div>
                </div>
              </div>
              <button className="cursor-pointer [border:none] py-2 px-3.5 bg-[transparent] flex-1 rounded-xl h-12 overflow-hidden flex flex-row items-center justify-center box-border gap-[16px] hover:bg-gainsboro">
                <div className="relative text-xl leading-[120%] font-semibold font-sf-pro-display-display-h6 text-garbi-version-2-30-white-70 text-left">
                  Unstake
                </div>
                <div className="rounded-lg bg-garbi-version-2-semantic-success overflow-hidden hidden flex-row items-center justify-start py-1 px-2">
                  <div className="relative text-base leading-[150%] font-semibold font-sf-pro-display-display-h6 text-garbi-version-2-30-white text-left">{`~ 8.5% APY `}</div>
                </div>
              </button>
            </div>
            <div className="flex flex-col items-start justify-start gap-[24px] text-sm text-garbi-version-2-30-white-40">
              <div className="flex flex-col items-center justify-start gap-[7px]">
                <div className="rounded-xl bg-garbi-version-2-30-white overflow-hidden flex flex-col items-start justify-start p-3.5 gap-[4px] border-[1px] border-solid border-garbi-version-2-30-white-50">
                  <div className="relative w-[380px] h-[21px] overflow-hidden shrink-0">
                    <div className="absolute top-[0px] left-[0px] leading-[150%] font-medium">
                      You Pay: $0.00000
                    </div>
                    <div className="absolute top-[0px] left-[270px] leading-[150%] font-medium text-right">
                      Balance: 0.00000
                    </div>
                  </div>
                  <div className="relative w-[380px] h-7 text-xl text-garbi-version-2-30-white-70">
                    <div className="absolute top-[2px] left-[0px] leading-[120%] font-semibold">
                      0.00000
                    </div>
                    <div className="absolute top-[0px] left-[301px] rounded overflow-hidden flex flex-row items-center justify-start py-1 px-3.5 gap-[8px] text-xs text-garbi-version-2-60-black">
                      <img
                        className="relative rounded-3xs w-5 h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/scrobot-token.svg"
                      />
                      <div className="relative leading-[150%]">SRC</div>
                    </div>
                  </div>
                </div>
                <img
                  className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/frame-14141.svg"
                />
                <div className="rounded-xl bg-garbi-version-2-30-white overflow-hidden flex flex-col items-end justify-center p-3.5 gap-[4px] border-[1px] border-solid border-garbi-version-2-30-white-50">
                  <div className="w-[380px] overflow-hidden flex flex-row items-end justify-between">
                    <div className="relative leading-[150%] font-medium">
                      You Receive: $0.00000
                    </div>
                    <div className="relative leading-[150%] font-medium text-right">
                      0% Slippage
                    </div>
                  </div>
                  <div className="w-[380px] flex flex-row items-center justify-between text-xl text-garbi-version-2-30-white-70">
                    <div className="relative leading-[120%] font-semibold">
                      0.00000
                    </div>
                    <div className="rounded overflow-hidden flex flex-row items-center justify-end py-1 px-3.5 gap-[8px] text-xs text-garbi-version-2-60-black">
                      <img
                        className="relative rounded-3xs w-5 h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/scrobot-token.svg"
                      />
                      <div className="relative leading-[150%]">JSRC</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="w-[408px] flex flex-row items-start justify-between">
                  <div className="relative leading-[150%] font-medium">
                    1 JSCR
                  </div>
                  <div className="relative leading-[150%] font-medium text-garbi-version-2-60-black">
                    ≈1.0755876916238039 SCR
                  </div>
                </div>
                <div className="w-[408px] flex flex-row items-start justify-between">
                  <div className="relative leading-[150%] font-medium">
                    Network fee
                  </div>
                  <div className="relative leading-[150%] font-medium text-garbi-version-2-60-black">
                    0.000015 SCR
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden flex-col items-start justify-start gap-[8px] text-5xl">
              <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
                <div className="relative w-[86px] h-8">
                  <img
                    className="absolute top-[calc(50%_-_16px)] left-[0px] rounded-[20px] w-8 h-8 overflow-hidden"
                    alt=""
                    src="/frame-141401.svg"
                  />
                  <div className="absolute top-[calc(50%_-_15px)] left-[40px] leading-[120%]">
                    SRC
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start gap-[8px] text-center text-9xl text-garbi-version-2-30-white-70">
                  <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-center py-2 px-[170px] border-[1px] border-solid border-garbi-version-2-30-white-70">
                    <div className="relative leading-[120%] font-semibold">
                      0.00
                    </div>
                  </div>
                  <div className="relative text-base leading-[150%] text-garbi-version-2-30-white-10 text-left">
                    Balance: 0.00 JSRC
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px] text-sm">
                <div className="relative rounded-xl bg-antdesign-neutral-white-black-4 w-[408px] h-[60px] overflow-hidden shrink-0">
                  <div className="absolute top-[calc(50%_-_21px)] left-[calc(50%_-_196px)] leading-[150%] font-medium">
                    Unstake in 2 Days
                  </div>
                  <div className="absolute top-[calc(50%_-_0px)] left-[calc(50%_-_196px)] leading-[150%]">
                    1.074512104 SRC
                  </div>
                </div>
                <div className="relative rounded-xl w-[408px] h-[60px] overflow-hidden shrink-0">
                  <div className="absolute top-[calc(50%_-_21px)] left-[calc(50%_-_196px)] leading-[150%] font-medium">
                    Unstake in 2 Days
                  </div>
                  <div className="absolute top-[calc(50%_-_0px)] left-[calc(50%_-_196px)] leading-[150%]">
                    1.074512104 SRC
                  </div>
                </div>
              </div>
            </div>
            <button
                className="cursor-pointer [border:none] p-4 bg-apple-style-blue-1 self-stretch rounded-lg flex flex-row items-center justify-center hover:bg-lightskyblue-100 active:bg-cornflowerblue"
                autoFocus={true}
                onClick={handleDepositClick}
            >
                <div className="relative text-base leading-[120%] font-semibold font-sf-pro-display-display-h6 text-garbi-version-2-30-white text-left">
                    Deposit
                </div>
            </button>
        </section>
        <section className="w-[708px] h-[585px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-16 px-6 box-border gap-[24px] text-left text-53xl text-garbi-version-2-60-black font-sf-pro-display-display-h6">
          <div className="self-stretch relative h-[172px]">
            <b className="absolute top-[86px] left-[0px] leading-[120%] inline-block w-[518.2px]">
              SCR Powered
            </b>
            <b className="absolute top-[0px] left-[0px] leading-[120%] inline-block w-[660px]">
              Staking Rewards.
            </b>
          </div>
          <div className="self-stretch relative text-21xl leading-[120%] font-semibold text-garbi-version-2-30-white-40">
            Choose how much you want to stake and earn rewards.
          </div>
        </section>
      </div>
    </div>
  );
};

export default Stake;