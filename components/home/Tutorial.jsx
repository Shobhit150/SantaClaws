import Image from 'next/image';
import React from 'react'
const tutorial = '/assets/image/About/hand.png';
const Tutorial = () => {
    return (
        <section id="How-To-Buy?" className="flex flex-col py-24 gap-8">
            <h1 className="flex justify-center text-6xl text-hallo font-display">
                How to Buy?
            </h1>
            <div className="flex flex-col md:flex-row justify-between px-4 py-10 items-center gap-8 md:gap-0">
                <div className="flex flex-1 justify-center items-center">
                    <Image src={tutorial} alt="Tutorial" width={500} height={500} className=" rounded-lg" />
                </div>
                <ul className="px-8 md:pr-20 leading-6 md:flex-1 text-left list-disc md:text-xl md:leading-7 flex flex-col gap-3">
                    <li>Set Up MetaMask or Trust Wallet: Download and install MetaMask from your browser's extension store or mobile app store.</li>
                    <li>Our Dapp will ask you to switch network if you are not on BNB Chain.</li>
                    <li>Buy BUSD and USDT on Binance (ensure BEP-20 version).
                Send them to your MetaMask's BSC address.</li>


            <li>Make sure you have sufficient BNB in your wallet to pay gas fees.</li>

            <li>Approve the Transaction and Buy <span className='text-orange-300 font-bold'>$CLAWS !!! </span></li>
            
        </ul>
            </div >
        </section >
    )
}

export default Tutorial;
