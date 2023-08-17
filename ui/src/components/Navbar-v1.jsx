import React, { useState } from 'react';
import HologrartLogo from "../assets/images/purple-whiteLines.svg";

import { useNavigate, useLocation } from 'react-router-dom';

const Navbar1 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigation = useNavigate();
    const location = useLocation();
  return (
    <div className='bg-black px-5 py-2 shadow-2xl shadow-white/20 fixed top-0 w-screen z-30'>
        <div className='container max-w-7xl mx-auto flex justify-between items-center'>
            <div>
                <div className='w-24 h-24 rounded-full bg-purple-700 blur-2xl absolute -mt-12 z-0 -ml-7' />
                <button onClick={() => navigation("/")}><img src={HologrartLogo} alt="Logo" className='w-12 h-12 relative z-10' /></button>
            </div>
            <div>
                <ul className='flex justify-between items-center gap-5 text-white'>
                    <li className='cursor-pointer text-[16px]'><a target='_blank' href="https://collection.hologrart.com/">Genesis</a></li>
                    <li className='cursor-pointer text-[16px]'><button onClick={() => {
                        const y = document.getElementById("metaverse").offsetTop - 40;
                        window.scrollTo(0, y);
                    }}>Metaverse</button></li>
                    <li className='cursor-pointer text-[16px]'><button onClick={() => {
                        const y = document.getElementById("jnft").offsetTop - 40;
                        window.scrollTo(0, y);
                    }}>JNFT</button></li>
                    <li className='cursor-pointer text-[16px]'><button onClick={() => {
                        const y = document.getElementById("virtualfit").offsetTop - 40;
                        window.scrollTo(0, y);
                    }}>Virtual Fit</button></li>
                    <li className='cursor-pointer text-[16px]'><button onClick={() => {
                        const y = document.getElementById("mobability").offsetTop - 40;
                        window.scrollTo(0, y);
                    }}>Mobability</button></li>
                    <li className='cursor-pointer text-[16px]'><button onClick={() => {
                        const y = document.getElementById("dna").offsetTop - 40;
                        window.scrollTo(0, y);
                    }}>Our DNA</button></li>
                </ul>
            </div>
            <div className='text-white flex justify-center items-center'>
                <a href='https://discord.gg/eJMsGzMNXZ' target='_blank' className='cursor-pointer py-3 px-5 bg-purple-700 border-t-4 border-b-4 border-purple-700'>Join Us</a>
                <a href='https://discord.gg/eJMsGzMNXZ' target='_blank' className='cursor-pointer py-3 px-5 border-4 border-purple-700 hover:bg-purple-700/40 transition-all duration-300'>Try pre-Alfa</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar1