import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import contractABIs from './abi';
import { Input , Button } from "antd";
import { useRouter } from 'next/router';
import Modal from 'react-modal';

const UnStake = ({ connectedAddress }) => {
  const router = useRouter();
  const userAddress = connectedAddress;
  const [userInfo, setUserInfo] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalSendIsOpen, setModalSendIsOpen] = useState(false);
  const [popupResult, setPopupResult] = useState('');
  const [inputValue, setInputValue] = useState('');
  const stETHSubmit = userInfo && (userInfo[0] - userInfo[12]);
  const stETHSubmitFormat = stETHSubmit / 10**18;
  const stETHLocked = userInfo && userInfo[12];
  const stETHLockedFormat = (stETHLocked / 10**18).toFixed(6);
  const pointBalance = userInfo && userInfo[7];
  const pointBalanceFormat = pointBalance / 10**18;
  const timeUnstake = userInfo ? Math.max(timestampToDaysFromNow(userInfo[10]) + 7, 0) : 0;
  const timeClamReward = userInfo ? Math.max(timestampToDaysFromNow(userInfo[10]) + 60, 0) : 0;

  function timestampToDaysFromNow(timestamp) {
    const milliseconds = timestamp * 1000;
    const dateObject = new Date(milliseconds);
  
    const today = new Date();
    const timeDifference = dateObject - today;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
    return daysDifference;
  }


  const stakeAdd = "0x3e787B47BFb853d47d55A7A54D2664676a58B7F7";
  const stakeAbi = contractABIs.stakeABI;

  const fetchData = async () => {
    const contractStakereader = new window.web3.eth.Contract(stakeAbi, stakeAdd);
    if (userAddress != undefined) {
      try {
        const userInfor = await contractStakereader.methods.userInfo(userAddress).call();
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
        
        if (!inputValue) {
          console.error('Please enter a valid deposit amount.');
          return;
        }
        let amount;

        if (parseFloat(inputValue) > stETHSubmitFormat) {
          amount = parseFloat(stETHSubmitFormat) * 10**18;
        } else {
          amount = parseFloat(inputValue) * 10**18;
        }

        
        if (isNaN(amount)) {
          console.error('Invalid deposit amount. Please enter a valid number.');
          return;
        }

        
        await contractStakereader.methods
          .withdraw(BigInt(amount))
          .send({
            from: userAddress,
          })
          .on('transactionHash', (hash) => {
            setModalSendIsOpen(true);
            setTimeout(() => {
              handlePopupClose();
            }, 5000);
          })
          .on('receipt', (receipt) => {   
            setPopupResult(receipt);
            setModalIsOpen(true);
            setTimeout(() => {
              handlePopupClose();
            }, 5000);
          })
          .on('error', (err, receipt) => {
              console.log(err);
          });
      } else {
        console.error('Contract not properly initialized.');
      }
    } catch (error) {
      console.error('Error handling deposit:', error);
    }
  };

  const handleHarvestClick = async () => {
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
        await contractStakereader.methods
          .harvest(userAddress)
          .send({
            from: userAddress,
            gas: 200000,
          })
          .on('transactionHash', (hash) => {
            setModalSendIsOpen(true);
            setTimeout(() => {
              handlePopupClose();
            }, 5000);
          })
          .on('receipt', (receipt) => {   
            setPopupResult(receipt);
            setModalIsOpen(true);
            setTimeout(() => {
              handlePopupClose();
            }, 5000);
          })
          .on('error', (err, receipt) => {
              console.log(err);
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

  const handlePopupClose = () => {
    setModalIsOpen(false);
    setModalSendIsOpen(false);
  };

  return (
    <div className="bg-garbi-version-2-30-white text-left text-apple-style-dark-4 container mx-auto py-[40px]">
      <div className="overflow-hidden shrink-0 grid grid-cols-1 lg:grid-cols-6  pb-[68px] box-border gap-[0px] lg:gap-[30px]">
        <div className='col-span-2 px-[16px] lg:px-0 flex'>
          <section className="rounded-2xl bg-apple-style-white-2 overflow-hidden flex flex-col items-center justify-start p-6 gap-[16px] text-left text-9xl text-garbi-version-2-60-black">
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
                  <button className="cursor-pointer flex-1 bg-transparent rounded-xl overflow-hidden flex flex-row items-center justify-between px-[14px] py-[8px] gap-[12px]" onClick={() => router.push("/stake-page")}>
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
              <div className='border-b-[1px] border-solid border-garbi-version-2-30-white-70 w-full flex flex-col items-center justify-start mt-[24px] pb-[16px]'>
                <div className='font-semibold text-[20px] mb-[8px]'>Total Point</div>
                <div className='flex items-center justify-center w-full mb-[24px]'>
                  <span className='text-black w-full text-center px-[16px] py-[8px] rounded-lg bg-[#D9D9D9]'>{pointBalanceFormat || "0"}</span>
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
              </div>
              <div className='icon-token flex items-center text-5xl mb-[16px]'>
                <img className="w-[32px] h-[32px] object-cover mr-[8px]" alt="" src="/steth-token.png" />
                <span>stETH</span>
              </div>
              <Input className='mb-[8px] rounded-[12px] py-[8px] text-[28px] text-center' value={inputValue} onChange={handleInputChange} placeholder='0.00'/>
              <div className='user-balance mb-[8px]'>
                <div>ETH Staked: {stETHSubmitFormat || '0'} stETH</div>
              </div>
              <div className='w-full text-[#666]'>
                <div className='flex items-center justify-between mb-[4px] px-[16px]'>
                  <span>Unlock in</span>
                  <span className='text-black'>{timeUnstake} days</span>
                </div>
                <div className='px-[16px] py-[8px] rounded-lg bg-[#D9D9D9]'>
                  <div className='flex items-center justify-between mb-[4px]'>
                    <span>Can claim reward in</span>
                    <span className='text-black'>{timeClamReward} days</span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span>Locked Reward</span>
                    <span className='text-black'>{stETHLockedFormat || "0"} stETH</span>
                  </div>
                </div>
              </div>
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
        <div className='col-span-4 flex items-end'>
          <section className="py-16 px-6 box-border gap-[24px] text-left text-53xl text-garbi-version-2-60-black text-center flex flex-col pb-0">
            <div className="self-stretch">
              <div className="self-stretch text-[72px] leading-[120%] font-semibold text-garbi-version-2-30-white-40">
                Initial Stake Offering
              </div>
              <div className="self-stretch text-[72px] leading-[120%] font-semibold text-garbi-version-2-30-white-40">
                Liquid Ethereum Staking
              </div>
            </div>
            <div className="self-stretch text-13xl leading-[120%] font-normal text-brown-text mb-[40px]">
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
      <Modal
        className=""
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={handlePopupClose}
        contentLabel="Example Modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            zIndex: 1000,
          },
          content: {
            top: '20px',
            right: '20px',
            left: 'auto',
            bottom: 'auto',
            width: 'auto', 
            maxWidth: '90%',
          },
        }}
      >
        <p className='m-0 text-[20px]'>Your <a href={`https://holesky.etherscan.io/tx/${popupResult.transactionHash}`} target='_blank' className='transaction-hash'>transaction</a> is confirmed.</p>
      </Modal>
      <Modal
        className=""
        ariaHideApp={false}
        isOpen={modalSendIsOpen}
        onRequestClose={handlePopupClose}
        contentLabel="Example Modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            zIndex: 999,
          },
          content: {
            top: '20px',
            right: '20px',
            left: 'auto',
            bottom: 'auto',
            width: 'auto', 
            maxWidth: '90%',
          },
        }}
      >
        <p className='m-0 text-[20px]'>Your transaction is sent to the Blockchain..</p>
      </Modal>
    </div>
  );
};

export default UnStake;