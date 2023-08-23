import React from 'react';

import Berkay from "../../assets/images/berkay.jpg"
import Doguk from "../../assets/images/doguk.jpg";
import Menice from "../../assets/images/menice.jpg";
import Didem from "../../assets/images/didem.jpeg";
import Emre from "../../assets/images/emre.jpg";

import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Dna = () => {
  return (
    <div className='container max-w-7xl mx-auto text-white py-16'>
        <h1 className='anton text-6xl'>OUR DNA:</h1>
        <h1 className='anton text-6xl text-blue-600/40'>BRAIN TEAM</h1>
        
        <div className='grid gap-10 grid-cols-2 mt-20'>
          <div className='grid gap-10 grid-cols-5'>
              <img className='col-span-2 w-full rounded-full' src={Berkay} alt="berkay gülbeyaz" srcset="" />
              <div className='col-span-3'>
                <h3 className='text-3xl anton'>BERKAY GÜLBEYAZ</h3>
                <h3 className='text-3xl text-red-600/40 anton'>CHIEF EXECUTIVE OFFICER</h3>

                <ul className='text-sm mt-3'>
                  <li>Hello world</li>
                  <li>Hello world</li>
                  <li>Bachelor Student at İzmir Bakırçay University</li>
                  <li>Management and Technology Systems</li>
                  <li>Entrepreneur at BTM, İzmir Teknopark, Yıldız Teknopark</li>
                </ul>

                <div className='mt-2 flex'>
                  <TwitterIcon className='cursor-pointer mr-1' />
                  <LinkedInIcon className='cursor-pointer' />
                </div>
              </div>
          </div>

          <div className='grid gap-10 grid-cols-5'>
              <img className='col-span-2 w-full rounded-full' src={Doguk} alt="doğukan topçu" srcset="" />
              <div className='col-span-3'>
                <h3 className='text-3xl anton'>DOĞUKAN TOPÇU</h3>
                <h3 className='text-3xl text-blue-600/40 anton'>CHIEF TECHNOLOGY OFFICER</h3>
æ
                <ul className='text-sm mt-3'>
                  <li>Web Developer</li>
                  <li>Game Developer</li>
                  <li>Undergraduate Student at İzmir Institute of Technology</li>
                  <li>Computer Engineering department</li>
                  <li>Entrepreneur at BTM, İzmir Teknopark, Yıldız Teknopark</li>
                </ul>

                <div className='mt-2 flex'>
                  <TwitterIcon className='cursor-pointer mr-1' />
                  <LinkedInIcon className='cursor-pointer mr-1' />
                  <GitHubIcon className='cursor-pointer' />
                </div>
              </div>
          </div>

          <div className='grid gap-10 grid-cols-5'>
              <img className='col-span-2 w-full rounded-full' src={Menice} alt="menice sude görbaş" srcset="" />
              <div className='col-span-3'>
                <h3 className='text-3xl anton'>MENİCE SUDE GÖRBAŞ</h3>
                <h3 className='text-3xl text-yellow-600/40 anton'>DESIGNER</h3>

                <ul className='text-sm mt-3'>
                  <li>Hello world</li>
                  <li>Hello world</li>
                  <li>Hello world</li>
                  <li>Hello world</li>
                  <li>Hello world</li>
                </ul>

                <div className='mt-2 flex'>
                  <TwitterIcon className='cursor-pointer mr-1' />
                  <LinkedInIcon className='cursor-pointer' />
                </div>
              </div>
          </div>

          <div className='grid gap-10 grid-cols-5'>
              <img className='col-span-2 w-full rounded-full' src={Didem} alt="didem öksel" srcset="" />
              <div className='col-span-3'>
                <h3 className='text-3xl anton'>DİDEM ÖKSEL</h3>
                <h3 className='text-3xl text-green-600/40 anton'>FASHION DESIGNER</h3>

                <ul className='text-sm mt-3'>
                  <li>Hello world</li>
                  <li>Hello world</li>
                  <li>Hello world</li>
                  <li>Hello world</li>
                  <li>Hello world</li>
                </ul>

                <div className='mt-2 flex'>
                  <TwitterIcon className='cursor-pointer mr-1' />
                  <LinkedInIcon className='cursor-pointer' />
                </div>
              </div>
          </div>

          <div className='grid gap-10 grid-cols-5'>
              <img className='col-span-2 w-full rounded-full' src={Emre} alt="emre yıldız" srcset="" />
              <div className='col-span-3'>
                <h3 className='text-3xl anton'>EMRE YILDIZ</h3>
                <h3 className='text-3xl text-purple-600/40 anton'>BLOCKCHAIN ADVISER</h3>

                <ul className='text-sm mt-3'>
                  <li>Hello world</li>
                  <li>Hello world</li>
                  <li>Bachelor Student at İzmir Institute of Technology</li>
                  <li>Computer Engineering department</li>
                  <li>Hello world</li>
                </ul>

                <div className='mt-2 flex'>
                  <TwitterIcon className='cursor-pointer mr-1' />
                  <LinkedInIcon className='cursor-pointer' />
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Dna