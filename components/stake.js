import React, { useState, useEffect } from 'react';
import web3 from './Web3';
import Web3 from 'web3';
import contractABIs from './abi';
import { Input } from "antd";

const Stake = () => {
    const [connectedAddress, setConnectedAddress] = useState(null);
    const [contractStakeReader, setContractStakeReader] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const stETHBalance = userInfo && userInfo[3];

    const stakeAdd = "0x1a32d063c2a6b222ba19099390687f0d0b44d958";
    const stakeAbi = contractABIs.stakeABI;
    const nullAdd = '0x2e01fca03F7EBDf714C055E5E6B7297Bb62e5346';

    const fetchData = async () => {
      try {
        const userInfor = await contractStakeReader.methods.userInfo(connectedAddress).call();
        setUserInfo(userInfor);
      } catch (error) {
        console.error('Error fetching stETH balance:', error);
      }
    };
  
    useEffect(() => {
      const initializeWeb3 = async () => {
        try {
          // Check if MetaMask is installed
          if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
 
            const accounts = await window.web3.eth.getAccounts();
            setConnectedAddress(accounts[0]);
          
          } else {
            console.log('MetaMask not detected! Please install MetaMask extension.');
            return; // Stop further execution if MetaMask is not installed
          }
  
          // Initialize the contract reader
          const contract = new window.web3.eth.Contract(stakeAbi, stakeAdd);
          setContractStakeReader(contract);
  
          // If wallet is connected, log the wallet address
          console.log('Connected Wallet Address:', connectedAddress);
        } catch (error) {
          console.error('Error initializing Web3:', error);
        }
      };
  
      initializeWeb3();
    }, []); // Empty dependency array to run the effect only once
  
    useEffect(() => {
      // Call fetchData when the component mounts
      fetchData();
  
      // Set up interval to call fetchData every 5 seconds
      const intervalId = setInterval(fetchData, 5000);
  
      // Clean up the interval on component unmount
      return () => clearInterval(intervalId);
    }, [connectedAddress]); // Include connectedAddress as a dependency to run the effect when it changes
  
    const handleDepositClick = async () => {
      try {
        if (contractStakeReader) {
          // Example: Call a method on the contract
          const amount = 0.1;
          
          // const result = await contractStakeReader.methods
          // .submit(
          //   nullAdd
          // )
          // .send({
          //   from: connectedAddress,
          //   value : amount,
          // });
          // console.log("🚀 ~ file: stake.js:80 ~ handleDepositClick ~ result:", result);
  
          // Add your deposit logic here
        } else {
          console.error('Contract not properly initialized.');
        }
      } catch (error) {
        console.error('Error handling deposit:', error);
      }
    };

  return (
    <div className="bg-garbi-version-2-30-white text-left text-apple-style-dark-4 container mx-auto py-[40px]">
        {connectedAddress ? (
            <p>Connected Wallet Address: {connectedAddress}</p>
        ) : (
            <p>No wallet connected</p>
        )}
      <div className="overflow-hidden shrink-0 grid grid-cols-1 lg:grid-cols-5  pb-[68px] box-border gap-[90px]">
        <div className='col-span-2'>
          <section className="rounded-2xl w-full bg-apple-style-white-2 overflow-hidden flex flex-col items-center justify-start p-6 gap-[24px] text-left text-9xl text-garbi-version-2-60-black">
              <div className="flex flex-col items-start justify-start pt-0 px-0 pb-4 gap-[8px] border-b-[1px] border-solid border-garbi-version-2-30-white-70">
                <div className="relative leading-[120%] font-semibold">
                  Stake SCR
                </div>
                <div className="relative text-xl leading-[120%] text-garbi-version-2-30-white-40 inline-block">
                  Choose how much you want to stake and earn rewards
                </div>
              </div>
              <div className="self-stretch rounded-xl bg-apple-style-white-2 mt-[24px] text-xl">
                <div className='mb-[24px] flex items-center'>
                  <button className="flex-1 rounded-xl bg-garbi-version-2-30-white shadow-[0px_2px_2px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-start py-2 px-3.5 gap-[12px]">
                    <div className="relative leading-[120%] font-semibold">Stake</div>
                    <div className="flex-1 rounded-lg bg-garbi-version-2-semantic-success overflow-hidden flex flex-row items-center justify-center p-1 text-center text-base text-garbi-version-2-30-white font-inter-sb16">
                      <div className="rounded-[8px] leading-[24px] py-[4px] px-[8px] bg-[#49B815] font-semibold">
                        ~8.5% APY
                      </div>
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-2 px-3.5 bg-[transparent] flex-1 rounded-xl h-12 overflow-hidden flex flex-row items-center justify-center box-border gap-[16px] hover:bg-gainsboro">
                    <div className="relative text-xl leading-[120%] font-semibold font-sf-pro-display-display-h6 text-garbi-version-2-30-white-70 text-left">
                      Unstake
                    </div>
                    <div className="rounded-lg bg-garbi-version-2-semantic-success overflow-hidden hidden flex-row items-center justify-start py-1 px-2">
                      <div className="relative text-base leading-[150%] font-semibold font-sf-pro-display-display-h6 text-garbi-version-2-30-white text-left">{`~ 8.5% APY `}</div>
                    </div>
                  </button>
                  </div>
              </div>
              <div className='icon-token flex items-center text-5xl mb-[16px]'>
                <img className="w-[32px] h-[32px] object-cover mr-[8px]" alt="" src="/scrobot-token.svg" />
                <span>ETH</span>
              </div>
              <Input className='mb-[8px] rounded-[12px] py-[8px] text-[28px] text-center' placeholder='0.00'/>
              <div className='user-balance mb-[8px]'>
                <div>Balance: {stETHBalance} ETH</div>
              </div>
              <div className='unstake-receive text-left w-full'>
                <div className=''>Unstake in <span className='time-to-unstake'>2</span>Block</div>
                <div className=''><span className='receive-amount'>0.00</span> SCR</div>
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
        </div>
        <div className='col-span-3'>
          <section className="overflow-hidden shrink-0 flex flex-col items-start justify-start py-16 px-6 box-border gap-[24px] text-left text-53xl text-garbi-version-2-60-black font-sf-pro-display-display-h6">
            <div className="self-stretch relative">
              <div className="self-stretch text-[72px] leading-[120%] font-semibold text-garbi-version-2-30-white-40">
                Staking Rewards.
              </div>
              <div className="self-stretch text-[72px] leading-[120%] font-semibold text-garbi-version-2-30-white-40">
                SCR Powered
              </div>
            </div>
            <div className="self-stretch text-21xl leading-[120%] font-semibold text-garbi-version-2-30-white-40">
              Choose how much you want to stake and earn rewards.
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Stake;