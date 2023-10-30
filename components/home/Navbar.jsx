"use strict";
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
const logo = '/assets/image/logo/santa__logo.png';

import '@/styles/Navbar.css';
import { motion } from 'framer-motion';
import Wallet from './Wallet';
import { useAddress } from '@thirdweb-dev/react';
import React, { useState, useEffect } from 'react';
import {Butcherman} from "next/font/google"

const navLinks = [
    { title: "Roadmap", url: "#Roadmap" },
    { title: "Tokenomics", url: "#Tokenomics" },
    { title: "How-To-Buy?", url: "#How-To-Buy?" },
    { title: "Refer-Earn", url: "#Refer-Earn" },
];
const butcher = Butcherman({
    weight:"400",
    subsets: ["latin"]
});

const NavbarItems = ({ title, classProps, href, activeSection }) => {
    const sanitizeSelector = (selector) => {
        return selector.replace('?', '\\?');
      }
      
    const isActive = title === activeSection;
  
    const handleAnchorClick = (e, target) => {
      e.preventDefault();
      const sanitizedTarget = sanitizeSelector(target);
      const targetElement = document.querySelector(sanitizedTarget);
      if (targetElement) {
        targetElement.scrollIntoView({
behavior: 'smooth',
          block: 'start'
        });
      }
    };
  
    return (
      <li className={`${butcher.className} mx-4 cursor-pointer ${classProps} text-[1rem] ${isActive ? 'active-item' : ''}`}>
        <a 
          href={href} 
          className={`text-inherit no-underline hover:underline ${isActive ? 'active-item' : ''}`}
          onClick={e => handleAnchorClick(e, href)}
        >
{title}
        </a>
      </li>
    );
  };



const Navbar = () => {
    const [activeSection, setActiveSection] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    const [destop, setDestop] = useState(true)
    const address = useAddress();
    const slideInVariants = {
        hidden: { y: '-100%' },
        visible: { y: '0' }
    };

    const checkScroll = () => {
        const sections = ["Refer-Earn", "Tokenomics", "Roadmap", "How-To-Buy?"];
        const offset = -400; // this value can be adjusted as per your requirement
    
        for (let section of sections) {
            const element = document.getElementById(section);
            if (element && window.scrollY + window.innerHeight >= element.offsetTop - offset && window.scrollY < element.offsetTop - offset) {
                setActiveSection(section);
                break;
            }
        }
    
        if (window.scrollY > 20 * 16) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }
    


    useEffect(() => {
        window.addEventListener('scroll', checkScroll);
        return () => {
            window.removeEventListener('scroll', checkScroll);
        }
    }, []);


    return (

            <nav className={`w-full flex md:justify-around justify-between items-center p-4 ${isScrolled ? 'nav-fixed' : ''}`}>
                <div className=' md:flex-[0.4] flex-initial justify-center items-center'>
                    <div className='flex flex-row items-center'>
                        <img src={logo} alt="" className='w-12 cursor-pointer' />
                        <div className='text-[20px] font-display pl-5 text-hallo'>
                            Santa Claws
                        </div>
                    </div>
                </div>
                <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
                    {navLinks.map((link, index) => (
                        <NavbarItems key={link.title + index} title={link.title} href={link.url} activeSection={activeSection}/>
                    ))}
                    <div className='ml-2 z-10'>  </div>
                </ul>
                <div className='flex relative'>
                    {toggleMenu
                        ? <AiOutlineClose fontSize={28} className="text-white hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
                        : <HiMenuAlt4 fontSize={28} className="text-white z-50 md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />}
                    {toggleMenu && (
                        <motion.ul
                        initial="hidden"
                        animate={toggleMenu ? "visible" : "hidden"}
                        variants={slideInVariants}
                        className={`z-10 fixed top-0 right-0 pr-3 pl-3 pt-10 w-screen h-72 shadow-2xl md:hidden list-none
                        flex flex-col gap-y-5 items-center rounded-md blue-glassmorphism text-white`}
                        >


                            <li className='text-3xl my-2 fixed right-4 top-4 cursor-pointer'>
                                <AiOutlineClose onClick={() => setToggleMenu(false)} />
                            </li>

                            <Wallet />
                            {navLinks.map((link, index) => (
                                <NavbarItems
                                    key={link.title + index}
                                    title={link.title}
                                    href={link.url}
                                    activeSection={activeSection}
                                />
                            ))}
                            
                        </motion.ul>
                    )}

                </div>
                <div className='md:flex hidden'>
                <Wallet />

                </div>
                
            </nav>
    );
}

export default Navbar;
