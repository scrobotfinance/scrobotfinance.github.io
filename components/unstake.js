import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import contractABIs from './abi';
import { Input } from "antd";

const UnStake = ({ connectedAddress }) => {
  const userAddress = connectedAddress;
  console.log("🚀 ~ file: unstake.js:8 ~ UnStake ~ userAddress:", userAddress)
  const [userInfo, setUserInfo] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const stETHSubmit = userInfo && userInfo[0];
  const stETHSubmitFormat = stETHSubmit / 10**18;
  const pointBalance = userInfo && userInfo[7];
  const pointBalanceFormat = pointBalance / 10**18;
  const timeUnstake = userInfo ? 
  (userInfo[10] - userInfo[11] <= 0 ? 0 : timestampToDaysFromNow(userInfo[10])) 
  : '';

  function timestampToDaysFromNow(timestamp) {
    const milliseconds = timestamp * 1000;
    const dateObject = new Date(milliseconds);
  
    const today = new Date();
    const timeDifference = dateObject - today;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
    return daysDifference;
  }


  const stakeAdd = "0x0173507101D7BA2c7DD677a1f1050433375ffD61";
  const stakeAbi = contractABIs.stakeABI;
  const nullAdd = '0x2e01fca03F7EBDf714C055E5E6B7297Bb62e5346';

  const fetchData = async () => {
    const contractStakereader = new window.web3.eth.Contract(stakeAbi, stakeAdd);
    if (userAddress != undefined) {
      try {
        const userInfor = await contractStakereader.methods.userInfo(userAddress).call();
        console.log("🚀 ~ file: unstake.js:22 ~ fetchData ~ userInfor:", userInfor)
        setUserInfo(userInfor);
        // Rest of the code...
      } catch (error) {
        console.error('Error fetching stETH balance:', error);
      }
    }
  };

  useEffect(() => {
    // Call fetchData when the component mounts
    fetchData();

    // Set up interval to call fetchData every 5 seconds
    const intervalId = setInterval(fetchData, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [userAddress]); // Include connectedAddress as a dependency to run the effect when it changes

  const handleWithdrawClick = async () => {
    try {
      const contractStakereader = new window.web3.eth.Contract(stakeAbi, stakeAdd);
      if (contractStakereader) {
        
        if (!inputValue) {
          console.error('Please enter a valid deposit amount.');
          return;
        }

        
        const amount = parseFloat(inputValue) * 10**18;
        console.log("🚀 ~ file: unstake.js:72 ~ handleWithdrawClick ~ amount:", amount)

        
        if (isNaN(amount)) {
          console.error('Invalid deposit amount. Please enter a valid number.');
          return;
        }

        
        const result = await contractStakereader.methods
          .withdraw(BigInt(amount))
          .send({
            from: userAddress,
          });
      } else {
        console.error('Contract not properly initialized.');
      }
    } catch (error) {
      console.error('Error handling deposit:', error);
    }
  };

  const handleHarvestClick = async () => {
    try {
      const contractStakereader = new window.web3.eth.Contract(stakeAbi, stakeAdd);
      if (contractStakereader) {     
        const result = await contractStakereader.methods
          .harvest(userAddress)
          .send({
            from: userAddress,
          });
      } else {
        console.error('Contract not properly initialized.');
      }
    } catch (error) {
      console.error('Error handling deposit:', error);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  return (
    <div className="bg-garbi-version-2-30-white text-left text-apple-style-dark-4 container mx-auto py-[40px]">
      <div className="overflow-hidden shrink-0 grid grid-cols-1 lg:grid-cols-5  pb-[68px] box-border gap-[0px] lg:gap-[90px]">
        <div className='col-span-2 px-[16px] lg:px-0'>
          <section className="rounded-2xl bg-apple-style-white-2 overflow-hidden flex flex-col items-center justify-start p-6 gap-[24px] text-left text-9xl text-garbi-version-2-60-black">
              <div className="flex flex-col w-full items-start justify-start pt-0 px-0 pb-4 gap-[8px] border-b-[1px] border-solid border-garbi-version-2-30-white-70">
                <div className="relative leading-[120%] font-semibold">
                  Stake Ethereum
                </div>
                <div className="relative text-xl leading-[120%] text-garbi-version-2-30-white-40 inline-block">
                  Choose how much you want to stake and earn rewards
                </div>
              </div>
              <div className="self-stretch rounded-xl bg-apple-style-white-2 text-xl">
                <div className='flex items-center'>
                  <button className="flex-1 bg-transparent rounded-xl overflow-hidden flex flex-row items-center justify-between px-[14px] py-[8px] gap-[12px]">
                    <div className="text-[#B2B2B2] relative leading-[120%] text-xl font-semibold">Stake</div>
                    <div className="rounded-lg bg-garbi-version-2-semantic-success overflow-hidden text-center text-base text-garbi-version-2-30-white font-inter-sb16">
                      <div className="rounded-[8px] leading-[24px] py-[4px] px-[8px] bg-[#49B815] font-semibold">
                        ~4% APY
                      </div>
                    </div>
                  </button>
                  <button className="bg-garbi-version-2-30-white shadow-[0px_2px_2px_rgba(0,_0,_0,_0.25)] cursor-pointer [border:none] py-2 px-3.5 bg-[transparent] flex-1 rounded-xl h-12 overflow-hidden flex flex-row items-center justify-center box-border gap-[16px] hover:bg-gainsboro">
                    <div className="relative text-xl leading-[120%] font-semibold text-left">
                      Unstake
                    </div>
                    <div className="rounded-lg bg-garbi-version-2-semantic-success overflow-hidden hidden flex-row items-center justify-start py-1 px-2">
                      <div className="relative text-base leading-[150%] font-semibold font-sf-pro-display-display-h6 text-garbi-version-2-30-white text-left">{`~ 8.5% APY `}</div>
                    </div>
                  </button>
                  </div>
              </div>
              {/* <div className='self-stretch text-center'>
                <div className='bg-garbi-version-2-30-white p-[14px] gap-[4px] border-[1px] border-solid border-garbi-version-2-30-white-50 rounded-xl mb-[7px]'>
                  <div className='flex items-center justify-between mb-[6px] text-[#666]'>
                    <div className='text-left'>
                      You're staking: $0.00000
                    </div>
                    <div className='text-right'>
                      Balance: 0.00000
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <Input 
                      className='w-[50%] border-0 text-[28px] p-0'
                      placeholder='0.00000'
                      value={inputValue}
                      onChange={handleInputChange}
                    />
                    <div className='flex items-center'>
                      <img
                          className="relative rounded-3xs w-5 h-5 overflow-hidden shrink-0 mr-[8px]"
                          alt=""
                          src="/scrobot-token.svg"
                        />
                        <div className="relative leading-[150%]">ETH</div>
                    </div>
                  </div>
                </div>
                <img
                    className="relative rounded w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/frame-14141.svg"
                  />
                <div className='bg-garbi-version-2-30-white p-[14px] gap-[4px] border-[1px] border-solid border-garbi-version-2-30-white-50 rounded-xl mt-[7px]'>
                  <div className='flex items-center justify-between mb-[6px] text-[#666]'>
                    <div className=''>
                      To receive: $0.00000
                    </div>
                    <div>
                      0% Slippage
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <Input 
                      className='w-[50%] border-0 text-[28px] p-0 !bg-[#fff] !text-[#000]'
                      placeholder='0.00000'
                      value={inputValue}
                      disabled
                    />
                    <div className='flex items-center'>
                      <img
                          className="relative rounded-3xs w-5 h-5 overflow-hidden shrink-0 mr-[8px]"
                          alt=""
                          src="/scrobot-token.svg"
                        />
                        <div className="relative leading-[150%]">stETH</div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className='icon-token flex items-center text-5xl mb-[16px]'>
                <img className="w-[32px] h-[32px] object-cover mr-[8px]" alt="" src="/steth-token.png" />
                <span>stETH</span>
              </div>
              <Input className='mb-[8px] rounded-[12px] py-[8px] text-[28px] text-center' value={inputValue} onChange={handleInputChange} placeholder='0.00'/>
              <div className='user-balance mb-[8px]'>
                <div>Balance: {stETHSubmitFormat || '0'} stETH</div>
              </div>
              <div className='w-full text-[#666]'>
                <div className='flex items-center justify-between mb-[4px]'>
                  <span>Unlock in</span>
                  <span className='text-black'>{timeUnstake} days</span>
                </div>
                <div className='flex items-center justify-between'>
                  <span>Claimable</span>
                  <span className='text-black'>{pointBalanceFormat || "0"} Point</span>
                </div>
              </div>
              <button
                  className="cursor-pointer border-[1px] border-solid border-apple-style-blue-1 p-4 text-white bg-apple-style-blue-1 self-stretch rounded-lg flex flex-row items-center justify-center hover:bg-transparent hover:text-apple-style-blue-1 active:bg-cornflowerblue"
                  autoFocus={true}
                  onClick={handleHarvestClick}
              >
                  <div className="relative text-base leading-[120%] font-semibold text-left">
                      Harvest
                  </div>
              </button>
              <button
                  className={`cursor-pointer p-4 bg-transparent border-[1px] border-solid border-[#B2B2B2] text-[#B2B2B2] self-stretch rounded-lg flex flex-row items-center justify-center ${
                    timeUnstake > 0 ? 'disabled' : 'hover:bg-apple-style-blue-1 hover:text-white active:bg-apple-style-blue-1'
                  }`}
                  autoFocus={true}
                  onClick={handleWithdrawClick}
                  disabled={timeUnstake > 0}
              >
                  <div className="relative text-base leading-[120%] font-semibold text-left">
                      Unstake
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

export default UnStake;