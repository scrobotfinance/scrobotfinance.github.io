import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import contractABIs from './abi';
import { Input , Button } from "antd";
import { useRouter } from "next/router";

const Stake = ({ connectedAddress }) => {
    const router = useRouter();
    const userAddress = connectedAddress;
    const [userInfo, setUserInfo] = useState(null);
    console.log("🚀 ~ file: stake.js:11 ~ Stake ~ userInfo:", userInfo)
    const [inputValue, setInputValue] = useState('');
    const [depositAmount, setDepositAmount] = useState('');
    const stETHBalance = userInfo && userInfo[3];
    const [ethBalance, setEthBalance] = useState(0);

    const stakeAdd = "0xb2f027259C09219a0075B2601Ef32a5411e568f4";
    const stakeAbi = contractABIs.stakeABI;
    const nullAdd = '0x2e01fca03F7EBDf714C055E5E6B7297Bb62e5346';

    const fetchData = async () => {
      const contractStakereader = new window.web3.eth.Contract(stakeAbi, stakeAdd);
      if (userAddress != undefined) {
        try {
          const userInfor = await contractStakereader.methods.userInfo(userAddress).call();
          setUserInfo(userInfor);
          const balance = await window.web3.eth.getBalance(userAddress);
          const ethBalance = (window.web3.utils.fromWei(balance, 'ether'));
          const formattedEthBalance = parseFloat(ethBalance).toFixed(5);
          setEthBalance(formattedEthBalance);
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

    const handleInputChange = (e) => {
      const value = e.target.value;
      setInputValue(value);
      setDepositAmount(value);
    };
  
    const handleDepositClick = async () => {
      const chainId = await window.web3.eth.getChainId();
  
      if (chainId !== 17000) {
        console.log('Switching to network with chainID 17000...');

        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: `0x${parseInt(17000, 10).toString(16)}`,
            chainName: 'Holesky Tetnetwork',
            nativeCurrency: {
              name: 'ETH',
              symbol: 'ETH',
              decimals: 18,
            },
            rpcUrls: ['https://ethereum-holesky.publicnode.com/'],
            blockExplorerUrls: ['https://holesky.etherscan.io/'],
          }],
        });

        // Chuyển đổi network
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: `0x${parseInt(17000, 10).toString(16)}` }],
        });

        // Kiểm tra lại sau khi chuyển đổi
        const updatedChainId = await window.web3.eth.getChainId();

        if (updatedChainId === 17000) {
          console.log('Successfully switched to network with chainID 17000.');
        } else {
          console.log('Failed to switch network.');
        }
      }
      try {
        const contractStakereader = new window.web3.eth.Contract(stakeAbi, stakeAdd);
        if (contractStakereader) {
          
          if (!depositAmount) {
            console.error('Please enter a valid deposit amount.');
            return;
          }
  
          
          const amount = parseFloat(depositAmount);
  
          
          if (isNaN(amount)) {
            console.error('Invalid deposit amount. Please enter a valid number.');
            return;
          }
  
          
          const result = await contractStakereader.methods
            .submit(nullAdd)
            .send({
              from: userAddress,
              value: window.web3.utils.toWei(amount.toString(), 'ether'),
            });
  
          console.log("🚀 ~ file: stake.js:80 ~ handleDepositClick ~ result:", result);
  
        } else {
          console.error('Contract not properly initialized.');
        }
      } catch (error) {
        console.error('Error handling deposit:', error);
      }
    };

  return (
    <div className="bg-garbi-version-2-30-white text-left text-apple-style-dark-4 container mx-auto py-[40px]">
        
      <div className="grid grid-cols-1 lg:grid-cols-6  pb-[68px] box-border gap-[0px] lg:gap-[30px]">
        <div className='col-span-2 px-[16px] lg:px-0 flex'>
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
                  <button className="flex-1 rounded-xl bg-garbi-version-2-30-white shadow-[0px_2px_2px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-between px-[14px] py-[8px] gap-[12px]">
                    <div className="relative leading-[120%] text-xl font-semibold">Stake</div>
                    <div className="rounded-lg bg-garbi-version-2-semantic-success overflow-hidden text-center text-base text-garbi-version-2-30-white font-inter-sb16">
                      <div className="rounded-[8px] leading-[24px] py-[4px] px-[8px] bg-[#49B815] font-semibold">
                        ~4% APR
                      </div>
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-2 px-3.5 bg-[transparent] flex-1 rounded-xl h-12 overflow-hidden flex flex-row items-center justify-center box-border gap-[16px] hover:bg-gainsboro" onClick={() => router.push("/unstake-page")}>
                    <div className="relative text-xl leading-[120%] font-semibold text-[#B2B2B2] text-left">
                      Unstake
                    </div>
                    <div className="rounded-lg bg-garbi-version-2-semantic-success overflow-hidden hidden flex-row items-center justify-start py-1 px-2">
                      <div className="relative text-base leading-[150%] font-semibold font-sf-pro-display-display-h6 text-garbi-version-2-30-white text-left">{`~ 8.5% APY `}</div>
                    </div>
                  </button>
                  </div>
              </div>
              <div className='self-stretch text-center'>
                <div className='bg-garbi-version-2-30-white p-[14px] gap-[4px] border-[1px] border-solid border-garbi-version-2-30-white-50 rounded-xl mb-[7px]'>
                  <div className='flex items-center justify-between mb-[6px] text-[#666]'>
                    <div className='text-left'>
                      You're staking: $0.00000
                    </div>
                    <div className='text-right'>
                      Balance: {ethBalance || "0.00"}
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
                          src="/eth-token.svg"
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
                          src="/steth-token.svg"
                        />
                        <div className="relative leading-[150%]">stETH</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full text-[#666]'>
                <div className='flex items-center justify-between mb-[4px]'>
                  <span>1 stETH</span>
                  <span className='text-black'>= 1 ETH</span>
                </div>
                <div className='flex items-center justify-between'>
                  <span>Network fee</span>
                  <span className='text-black'>0.0025 ETH</span>
                </div>
              </div>
              <button
                  className="cursor-pointer border-[1px] border-solid border-apple-style-blue-1 p-4 text-white bg-apple-style-blue-1 self-stretch rounded-lg flex flex-row items-center justify-center hover:bg-transparent hover:text-apple-style-blue-1 active:bg-cornflowerblue"
                  autoFocus={true}
                  onClick={handleDepositClick}
              >
                  <div className="relative text-base leading-[120%] font-semibold text-left">
                      Deposit
                  </div>
              </button>
          </section>
        </div>
        <div className='col-span-4 flex items-center'>
          <section className="py-16 px-6 box-border gap-[24px] text-left text-53xl text-garbi-version-2-60-black text-center flex flex-col pb-0">
            <div className="self-stretch">
              <div className="self-stretch text-[72px] leading-[120%] font-semibold text-garbi-version-2-30-white-40">
                Initial Stake Offering
              </div>
              <div className="self-stretch text-[72px] leading-[120%] font-semibold text-garbi-version-2-30-white-40">
                Liquid Ethereum Staking
              </div>
            </div>
            <div className="self-stretch text-21xl leading-[120%] font-normal text-garbi-version-2-30-white-40 mb-[40px]">
              Revenue share, Earn points, Receive airdrops through our unique fundraising method - Initial Stake Offering (ISO).
            </div>
            <div className="grid grid-cols-6 px-[32px] py-[32px] flex items-center bg-gradient-to-r to-apple-style-white-2/[.6] from-apple-style-blue-1/[.6] gap-x-[10px] gap-y-[20px] rounded-[16px]">
                <div className="col-span-3 text-left">
                  <div className="self-stretch text-21xl leading-[120%] font-semibold text-garbi-version-2-30-white-40 mb-[10px]">
                      Conversion Rate
                  </div>
                  <div className="self-stretch text-base leading-[120%] font-normal text-garbi-version-2-30-white-40">
                      Accumulate as much $POINT to redeem $SBOT
                  </div>
                  <div className="self-stretch text-base leading-[120%] font-normal text-garbi-version-2-30-white-40 mb-[20px]">
                      upon ScroBot TGE
                  </div>
                  <Button href="https://scroboteth.gitbook.io/" target="_blank" className="no-underline text-apple-style-blue-1">Rules {">"}</Button>
                </div>
                <div></div>
                <div className="col-span-2">
                    <div className="flex items-center justify-between mb-[4px]">
                        <div className="self-stretch text-21xl leading-[120%] font-normal text-garbi-version-2-30-white-40">
                          1 <span className="text-base font-bold">POINT</span>
                        </div>
                        <img
                          className="relative rounded-3xs w-5 h-5 overflow-hidden shrink-0 mr-[8px]"
                          alt=""
                          src="/transfer-icon.svg"
                        />
                        <div className="self-stretch text-21xl leading-[120%] font-normal text-garbi-version-2-30-white-40">
                          ? <span className="text-base">SBOT</span>
                        </div>
                    </div>
                    <div className="text-base">
                      Coming soon !
                    </div>
                </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Stake;