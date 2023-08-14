import React, { useEffect } from 'react';
import Hero from '../components/HomeComponents/Hero';
import Metaverse from '../components/HomeComponents/Metaverse';
import Jnft from '../components/HomeComponents/Jnft';
import VirtualFit from '../components/HomeComponents/VirtualFit';
import Mobability from '../components/HomeComponents/Mobability';
import Dna from '../components/HomeComponents/Dna';

const Home = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
        <Hero />

        <div id='metaverse' className='metaverse'>
          <Metaverse />
        </div>

        <div id='jnft'>
          <Jnft />
        </div>

        <div id='virtualfit'>
          <VirtualFit />
        </div>

        <div id='mobability'>
          <Mobability />
        </div>

        <div id='dna'>
          <Dna />
        </div>
    </div>
  )
}

export default Home