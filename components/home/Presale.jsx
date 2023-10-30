
"use client"
import '@/styles/global.css'
import '@/styles/home.css'
import '@/styles/pumpkin.css'
import { useAddress } from '@thirdweb-dev/react';
import React from 'react'
import { useState, useEffect } from 'react';
import { useWalletAddress } from '../store/useWalletAddress'
import { useContractWrite, useContract } from "@thirdweb-dev/react";
import { FaCopy } from 'react-icons/fa';
import AddToken from './AddToken';

const Presale = () => {

    const [selectedButton, setSelectedButton] = useState('tether');
    const [santaClaw, setSantaClaw] = useState('0.0000015$')
    const [progressWidth, setProgressWidth] = useState('0%');
    const [testLoading, setTestLoading] = useState(true)
    //add token
    const [purchased, setPurchased] = useState(false)

    const walletAddress = useWalletAddress(state => state.walletAddress)

    const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS    //Contract
    const contractAddress2 = '0x55d398326f99059fF775485246999027B3197955' //USDT
    const contractAddress3 = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56' //BUSD

    const { contract } = useContract(contractAddress)   //Contract
    const { contract: contract2 } = useContract(contractAddress2) //USDT
    const { contract: contract3 } = useContract(contractAddress3) //BUSD

    const { mutateAsync, isLoading, error } = useContractWrite(
        contract,
        selectedButton === 'eth' ? "buyWithBUSD" : "buyWithUSDT",
    )
    const { mutateAsync: mutateAsync2, isLoading: isLoading2, error: error2 } = useContractWrite(
        contract2,
        'approve',
    )
    const { mutateAsync: mutateAsync3, isLoading: isLoading3, error: error3 } = useContractWrite(
        contract3,
        'approve',
    )
    const [currentStage, setCurrentStage] = useState(1)


    const [payValue, setPayValue] = useState('');
    const [receiveValue, setReceiveValue] = useState(0);

    const handleInputChange = (e) => {
        let currentVal = e.target.value;

        if (currentVal === "") {
            setPayValue("");
            setReceiveValue(0);
        } else {
            const currentVal1 = parseFloat(currentVal)
            setPayValue(currentVal1);
            setReceiveValue(currentVal1 * 666666);
        }
    };


    const handleClick = async () => {
        const inputValue = payValue
        if (!walletAddress) {
            alert('Connect a Wallet First')
            return
        }
        if (inputValue < 50) {
            alert('Amount cant be below 50$')
            return
        }

        /* transaction */

        try {
            // Execute the transaction with the amount as an argument
            if (selectedButton === 'eth') {
                await mutateAsync3({
                    args: [`${contractAddress}`, `${BigInt(inputValue) * BigInt(10 ** 18)}`],
                })
                await mutateAsync({
                    args: [`${inputValue}`],
                })
            } else {
                await mutateAsync2({
                    args: [`${contractAddress}`, `${BigInt(inputValue) * BigInt(10 ** 18)}`],
                })
                await mutateAsync({
                    args: [`${inputValue}`],
                })
            }
            alert(`Successfully Purchased ${inputValue * 666666} tokens!`)
            setPurchased(true)
            setPayValue("");
            setReceiveValue(0); // Clear the input field
        } catch (error) {
            console.error('Error purchasing tokens:', error);
            alert('An error occurred while purchasing tokens.');
        }
    }

    useEffect(() => {
        updateWidth('10%'); // Example usage
    }, []);
    const updateWidth = (width) => {
        if (parseFloat(width) > 98.5) {
            setProgressWidth('98.5%');
        } else {
            setProgressWidth(width);
        }
    };


    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const countDownDate = new Date("Nov 31, 2023 12:00:00").getTime();

        const countdownfunction = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTime({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(countdownfunction);
    }, []);

    function copyTextToClipboard() {
        const copyText = document.getElementById("copyText");
        copyText.select();
        document.execCommand("copy");
    }
    return (
        <form action="" className='presale_form mt-20 sm:mt-0 w-full'>
            <div className='flex flex-col'>
                <div className='mb-[0.7rem]'>

                    <h1 className='text-[1.75rem] text-hallo font-bold pt-[0rem] text-center'>
                        STAGE 1 ENDING IN
                    </h1>
                    <div className="font-bold text-[1.75rem] text-center">
                        {time.days}d {time.hours}h {time.minutes}m {time.seconds}s
                    </div>

                </div>
                <div>
                    <p className='text-center mb-[0.4rem] font-bold'>
                        Stage {currentStage}
                    </p>
                    <div className="progress-bar">

                        <div className="progress-fill" style={{ width: progressWidth }}>
                            {[...Array(12)].map((_, idx) => (
                                <div key={idx} className="content_progressSection___TWLW"></div>
                            ))}

                        </div>
                    </div>

                    <div className='w-[100%] mb-[0.5rem] mt-[1rem] leading-[30px] z-50'>
                        <p className='flex-shrink-0 text-center font-bold'>
                            Next stage price: 0.0000030$
                        </p>
                    </div>
                    <div class='w-full flex justify-between items-center font-extrabold'>
                        <div class='flex-grow border-t border-white'></div>
                        <p class='text-sm px-4'>1 $CLAWS = {santaClaw}</p>
                        <div class='flex-grow border-t border-white'></div>
                    </div>
                    <p className='mt-2 mb-2 text-[1.2rem] text-center'>
                        Select Your payment Method
                    </p>
                    <div className='w-full mt-1rem flex flex-row flex-wrap justify-around items-center h-[50px]'>
                        <button
                            type="button"
                            className='w-[47%] coin_button h-full cursor-pointer shadow-lg flex flex-row justify-between items-center z-10 gap-4'
                            onClick={() => setSelectedButton('tether')}
                            style={selectedButton === 'tether'
                                ? { border: '2px solid hsla(244, 50%, 92%, 0.85)', backgroundColor: 'hsla(244, 16%, 92%, 0.65)', color: 'black' }
                                : {}}>
                            <div className='text-[1.2rem] font-bold'>
                                USDT
                            </div>
                            <img alt="Tether Icon" className='w-8' src="/assets/image/crypto/tether.svg" />
                        </button>
                        <button type="button" className='w-[47%] z-50
                                                                    coin_button h-full cursor-pointer shadow-lg flex flex-row justify-between items-center gap-4'
                            onClick={() => setSelectedButton('eth')}
                            style={selectedButton === 'eth' ? { border: '2px solid hsla(244, 50%, 92%, 0.85)', backgroundColor: 'hsla(244, 16%, 92%, 0.65)', color: 'black' } : {}}>

                            <div className='text-[1.2rem] font-bold' >
                                BUSD
                            </div>
                            <img src="/assets/image/crypto/busd.svg" alt="" className=' w-8' />
                        </button>

                    </div>
                    <div className='w-full flex flex-row justify-between mt-[1.4rem] h-[5rem]'>
                        <div className='w-[48%] p-2 rounded-[1rem] border border-white flex flex-col justify-around' style={{ backgroundColor: 'hsla(244, 16%, 92%, 0.45)' }}> {/* added rounded-md here for the div border */}
                            <label htmlFor="input1" className=" text-black mb-1 ml-[0.5rem]">You Pay</label>
                            <div className='w-full flex flex-row'>

                                <input
                                    placeholder='0'
                                    id="pay_input"
                                    name="number1"
                                    value={payValue}
                                    onChange={handleInputChange}
                                    className=' text-tiny w-full ml-[0.5rem] placeholder:text-gray-800
                                                                text-black bg-white bg-opacity-0 
                                                                focus:outline-none focus:border-transparent'
                                /* added bg-opacity-50 and rounded-md for transparency and rounded corners respectively */
                                />
                                <img
                                    src={selectedButton === 'eth' ? "/assets/image/crypto/busd.svg" : "/assets/image/crypto/tether.svg"}
                                    alt={selectedButton === 'eth' ? "USDC Icon" : "Tether Icon"}
                                    className='h-[2rem] mr-[.5rem]'
                                />


                            </div>




                        </div>
                        <div className='w-[48%] p-2 rounded-[1rem] border border-white flex flex-col justify-around' style={{ backgroundColor: 'hsla(244, 16%, 92%, 0.45)' }}> {/* added rounded-md here for the div border */}
                            <label htmlFor="input2" className="text-black mb-1 ml-[.5rem]">You get</label>
                            <div className=' w-full flex flex-row'>

                                <input

                                    id="receive_input"
                                    name="number2"
                                    value={receiveValue} readOnly
                                    className=' text-tiny ml-[0.5rem]
                                                                    w-full text-gray-800  bg-white bg-opacity-0 
                                                                    focus:outline-none focus:border-transparent'
                                /* added bg-opacity-50 and rounded-md for transparency and rounded corners respectively */
                                />
                                <img src="/assets/image/logo/santa__logo.png" alt="Tether Icon" className='h-[2rem] mr-[.5rem]' />
                            </div>
                        </div>
                    </div>

                    {/* buying fucntionality */}
                    <div className="flex flex-col items-center justify-center">
                        <button disabled={isLoading || isLoading2 || isLoading3} type='button' onClick={handleClick} className={`${isLoading || isLoading2 || isLoading3 ? 'bg-gray-600' : 'bg-hallo hover:opacity-70'} connect_button w-[80%] mt-[1.5rem] h-[3rem] active:scale-90 transition ease-in-out`}
                        >
                            {isLoading || isLoading2 || isLoading3 ?
                                <div className='flex flex-row justify-center items-center gap-4'>
                                    <div class="loader"></div>
                                    <p>Processing...</p>
                                </div>
                                : 'Buy Now'}
                        </button>

                        {purchased && <AddToken />}
                        {/* buying fucntionality */}
                    </div>

                    {walletAddress &&
                        <div className=" pt-4 w-full flex justify-between items-center flex-col gap-2">
                            <hr className='mt-[1.5rem] border-t border-white w-full' />
                            <p className='text-xs'>Your referral link</p>
                            <div className='flex gap-2 justify-center items-center'>
                                <input title='Copy' className="
                                                text-xs
                                                shadow-lg
                                                rounded-md
                                                bg-[rgba(219,246,255,0.10)]
                                                px-4
                                                py2
                                                h-10
                                                text-center
                                                w-full
                                                text-gray-300
                                                hover:opacity-70
                                                focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-none
                                                " type="text" id="copyText" value={`https://www.santaclaws.in/?ref=s${walletAddress}`} readOnly></input>
                                <FaCopy
                                    onClick={copyTextToClipboard}
                                    size={32}
                                    className="cursor-pointer hover:bg-gray-500 p-1 rounded"
                                />
                            </div>

                        </div>}


                </div>

            </div>
            <div className="pumpkin">
                <div className="front"></div>
                <div className="middle"></div>
                <div className="back"></div>
                <div className="stalk"></div>
                <div className="eyes"></div>
                <div className="smile">
                    <div className="smile-middle"></div>
                    <div className="smile-end"></div>
                </div>
            </div>
            <div className="vine_parent ">
                <img src="/assets/image/home/vines.png" alt="" className="vine " />
            </div>
            <div className="vine_parent2 ">
                <img src="/assets/image/home/vines.png" alt="" className="vine2" />
            </div>


        </form>
    )
}

export default Presale