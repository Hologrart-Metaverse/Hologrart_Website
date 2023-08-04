import React, { useState } from 'react';
import HologrartLogo from "../assets/images/purple-whiteLines.svg";

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Navbar1 = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='bg-black px-5 py-2 shadow-2xl shadow-white/20 fixed top-0 w-screen z-30'>
        <div className='container max-w-7xl mx-auto flex justify-between items-center'>
            <div>
                <div className='w-24 h-24 rounded-full bg-purple-700 blur-2xl absolute -mt-12 z-0 -ml-7' />
                <img src={HologrartLogo} alt="Logo" className='w-12 h-12 relative z-10' />
            </div>
            <div>
                <ul className='flex justify-between items-center gap-5 text-white'>
                    <li className='cursor-pointer text-[16px]'>Genesis</li>
                    <li className='cursor-pointer text-[16px]'>Metaverse</li>
                    <li className='cursor-pointer text-[16px]'>JNFT</li>
                    <li className='cursor-pointer text-[16px]'>Mobability</li>
                    <li className='cursor-pointer text-[16px]'>Virtual Fit</li>
                    <li className='cursor-pointer text-[16px]'>Our DNA</li>
                </ul>
            </div>
            <div className='text-white flex justify-center items-center'>
                <button className='cursor-pointer rounded-md py-3 px-5 bg-purple-700'>Join Us</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar1