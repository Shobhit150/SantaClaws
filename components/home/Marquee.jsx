'use client'
import '@/styles/Marquee.css'
import React, { useEffect, useRef } from 'react';
import  { initializeScroller } from '../../public/assets/js/Marquee.js'


const crypto1 = '/assets/image/Marquee/crypto/ambcrypto_new.webp';
const crypto2 = '/assets/image/Marquee/crypto/beincrypto_new.webp';
const crypto3 = '/assets/image/Marquee/crypto/bitcoin_new.webp';
const crypto4 = '/assets/image/Marquee/crypto/blockMedia_new.webp';
const crypto5 = '/assets/image/Marquee/crypto/coingape_new.webp';
const crypto6 = '/assets/image/Marquee/crypto/cointelegraph_new.webp';
const crypto7 = '/assets/image/Marquee/crypto/newsbit_new.svg';
const crypto8 = '/assets/image/Marquee/crypto/yahoo_new.webp';


const Marquee = () => {
    useEffect(() => {
        // Initialize the scroller logic after component is mounted
        initializeScroller();
    }, []);

    return (
        <div>
            <section className="scroll overflow-hidden">
                <div className="marq__text p-10 text-[2.5rem] font-display md:text-[4.5rem] bt-[2rem]">
                    AS SEEN ON
                </div>

                <div className="scrip w-full ">
                    <div className="scroller" data-speed="slow">
                        <ul className="tag-list scroller__inner">
                            <img src={crypto1} alt="" className="crypto1" />
                            <img src={crypto2} alt="" className="crypto2" />
                            <img src={crypto3} alt="" className="crypto3" />
                            <img src={crypto4} alt="" className="crypto4" />
                            <img src={crypto5} alt="" className="crypto5" />
                            <img src={crypto6} alt="" className="crypto6" />
                            <img src={crypto7} alt="" className="crypto7" />
                            <img src={crypto8} alt="" className="crypto8" />
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Marquee;
