
import '@/styles/global.css'
import '@/styles/home.css'
import '@/styles/pumpkin.css'
import { useWalletAddress } from '@/components/store/useWalletAddress'
import { useContractWrite, useContract } from "@thirdweb-dev/react";
import Presale from './Presale'

import AudioButton from './Music';


import React, { useEffect, useState } from 'react'; import Typed from "typed.js";
import { Button } from '@nextui-org/react';

const Home = () => {
    useEffect(() => {
        // Initialize Typed.js when the component mounts
        const typed = new Typed('.multiple-text', {
            strings: ['Claus? NO...', '$CLAWS'],
            typeSpeed: 80,
            backSpeed: 80,
            loop: true
        });

        // Cleanup function: Destroy the Typed instance when the component unmounts
        return () => {
            typed.destroy();
        };
    }, []);

    return (

            <section className="home md:p-20">
                <div className='w-full gap-4 md:gap-36 sm:gap-0 flex flex-col md:flex-row  text-white justify-around items-center '>
                    <div className="text-center flex flex-col justify-center mt-40 md:mt-0">
                        <h1 className='font-display text-hallo text-[3rem] md:text-[4.5rem]'>
                            First Horror
                        </h1>

                        <div className="font-body mb-[1rem] font-bold leading-9 text-[2rem] md:text-[3.2rem]">
                            Meme Coin

                        </div>
                        <div className='text-[2rem]'>
                            Santa <span className="multiple-text text-hallo"></span>

                        </div>
                        <div className='flex justify-center items-center gap-4'>
                            <a href="/DarkPaperClaws.pdf">
                                <button className='py-2 px-4 mt-4 bg-hallo text-white
                                    rounded-md hover:bg-opacity-70 active:scale-90 transition ease-in-out
                                    shadow-md'>
                                    Darkpaper
                                </button>
                            </a>
                            <AudioButton />
                        </div>
                            

                    </div>

                    <div className='flex w-[95%] sm:w-[26rem] items-center mt-40 md:mt-0'>
                        <Presale />
                    </div>

                </div>

            </section >


    )
}

export default Home;
