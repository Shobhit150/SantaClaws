import React from 'react'
const logo = 'assets/image/logo/santa__logo.png'

const hand = 'assets/image/footer/pumpkin_001.png'
import { FaTelegram } from 'react-icons/fa';
import {RiTwitterXFill } from 'react-icons/ri'
import '@/styles/footer.css'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <section className=' relative'>
        <img src={hand} alt="" className=' absolute right-[1rem] w-[12rem] z-[-1] bottom-[2rem]'/>
        <div className='font-display h-52 pl-[5%] pt-[3rem] md:pt-[4rem] pr-[5%] flex flex-row flex-wrap justify-between gap-y-[1.5rem]'>
            <div className='w-[15rem] flex flex-col gap-y-[1rem]'>
                <div className='flex flex-row justify-start items-center gap-x-[1rem] h-[3rem]'>
                    <img src={logo} alt="" className='h-[3rem]'/>
                    <div className='font-display text-[1.3rem] md:text-[1.7rem] text-hallo'>
                        Santa Claws
                    </div>
                </div>

                <div>
                    <p className='text-left mt-6 text-tiny'>
                    Jingle bells, ghostly yells, Santa's on his way...!!
                    </p>
                </div>
            </div>
            
            <div className=' flex flex-row flex-wrap justify-between h-[3rem]'>
                <div className='flex justify-center items-center hover:opacity-70 hover:-translate-y-1 transition ease-in-out'>
                <a href="https://t.me/+nL7JHR_i3Sw4NmI1" target="_blank" >
                <FaTelegram size={27}/>
                </a>
                </div>
                {/* <div className='flex justify-center items-center hover:opacity-70 hover:-translate-y-1 transition ease-in-out'>
                    <a href="x.com" target="_blank">
                   <RiTwitterXFill size={25}/>
                   </a>
                    
                
̧                </div> */}

            </div>

        </div>
        
        <div className='flex justify-center text-[0.7rem] text-light'>

        &copy; {year} SantaClaws.io All rights reserved.
        </div>
    </section>
  )
}

export default Footer