import React from 'react';
import HologrartLogo from "../assets/images/purple-whiteLines.svg";

import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigation = useNavigate();
  return (
    <div className='px-10 pt-24 pb-6 text-white'>
      <div className='container max-w-7xl mx-auto flex justify-between'>
        
        <div className='w-full flex flex-col justify-center items-center'>
          <button onClick={() => navigation("/")}><img src={HologrartLogo} alt="Logo" className='w-32 h-32 relative z-10' /></button>

          <p className='text-center mt-5'>Hologrart Metaverse is a startup works on web3.</p>
        </div>

        <div className='w-full flex flex-col px-10'>
          <h3 className='text-3xl font-bold anton mb-10'>Our Projects</h3>
          <ul className='grid gap-6 text-2xl ml-3'>
            <li className='cursor-pointer'><button onClick={() => {
                const y = document.getElementById("metaverse").offsetTop - 40;
                window.scrollTo(0, y);
            }}>Metaverse</button></li>
            <li className='cursor-pointer'><button onClick={() => {
                const y = document.getElementById("jnft").offsetTop - 40;
                window.scrollTo(0, y);
            }}>JNFT</button></li>
            <li className='cursor-pointer'><button onClick={() => {
                const y = document.getElementById("virtualfit").offsetTop - 40;
                window.scrollTo(0, y);
            }}>Virtual Fit</button></li>
            <li className='cursor-pointer'><button onClick={() => {
                const y = document.getElementById("mobability").offsetTop - 40;
                window.scrollTo(0, y);
            }}>Mobability</button></li>
          </ul>
        </div>

        <div className='w-full flex flex-col px-10'>
          <h3 className='text-3xl font-bold anton mb-10'>FOLLOW US</h3>
          <ul className='grid gap-6 text-2xl ml-3'>
            <li className='cursor-pointer'><button>Twitter</button></li>
            <li className='cursor-pointer'><button>Linkedin</button></li>
            <li className='cursor-pointer'><button>Discord</button></li>
          </ul>
        </div>
      </div>


      <div className='container max-w-7xl mx-auto flex justify-between mt-16'>
        <p>All rights are reserved © 2023 Hologrart</p>
      </div>
    </div>
  )
}

export default Footer