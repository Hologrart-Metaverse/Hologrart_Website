import React from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Hero = () => {
  return (
    <div className='hero w-full h-screen max-h-[1080px] flex flex-col justify-center items-center cursor-default'>
        <mark className='relative z-10 bg-purple-500 w-full text-center text-white text-[250px] font-extrabold abril txt'>HOLOGRART</mark>
        <a href='https://metaverse.hologrart.com/' target='_blank' rel="noreferrer" className='text-white text-2xl cursor-pointer rounded-2xl py-4 px-12 border-4 border-purple-700 bg-purple-700/40 hover:bg-white hover:border-white hover:text-black transition-all duration-300'>Try Pre-Alfa <OpenInNewIcon /></a>

    </div>
  )
}

export default Hero