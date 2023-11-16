import React from 'react';
import HologrartLogo from "../assets/images/purple-whiteLines.svg";
import Hologrart from "../assets/images/hologrartMetaverse.svg";

import { useNavigate } from 'react-router-dom';

const Navbar1 = () => {
    const navigation = useNavigate();
  return (
    <div className='navbar bg-black px-5 py-2 shadow-2xl shadow-white/10 fixed top-0 w-screen z-30'>
        <div className='container max-w-7xl mx-auto flex justify-between items-center'>
            
            <button onClick={() => navigation("/")} className='flex justify-start'>
                <div className='w-24 h-24 rounded-full bg-purple-700 blur-2xl absolute sm:-mt-12 -mt-20 z-0 -ml-7' />
                <div className='flex items-center justify-center'>
                    <img src={HologrartLogo} alt="Logo" srcset="" className='md:w-12 md:h-16 w-6 h-6 relative z-10' />
                    <img src={Hologrart} alt="logo" srcset="" className='pointer-events-none lg:w-60 md:w-52 w-24 sm:block hidden md:ml-4 ml-2' />
                </div>
            </button>
            
            <div>
                <ul className='flex justify-between lg:text-[16px] text-[12px] items-center sm:gap-5 gap-3 text-white'>
                    <li className='cursor-pointer'><a target='_blank' rel="noreferrer" href="https://collection.hologrart.com/">Genesis</a></li>
                    <li className='cursor-pointer'><button onClick={() => {
                        const y = document.getElementById("metaverse").offsetTop - 40;
                        window.scrollTo(0, y);
                    }}>Metaverse</button></li>
                    <li className='cursor-pointer'><button onClick={() => {
                        const y = document.getElementById("jnft").offsetTop - 40;
                        window.scrollTo(0, y);
                    }}>JNFT</button></li>
                    <li className='cursor-pointer'><button onClick={() => {
                        const y = document.getElementById("dna").offsetTop - 40;
                        window.scrollTo(0, y);
                    }}>Our DNA</button></li>

                    <div className='text-white flex justify-center items-center'>
                        <a href='https://metaverse.hologrart.com/' target='_blank' rel="noreferrer" className='md:block hidden rounded-2xl cursor-pointer py-3 px-5 border-4 border-purple-700 hover:bg-purple-700/40 transition-all duration-300'>Try Pre-Alfa</a>
                    </div>

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar1