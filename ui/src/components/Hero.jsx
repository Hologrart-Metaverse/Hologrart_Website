import React from 'react'

const Cart = ({mb, mr, title, desc, color}) => {
  return (
    <div className={` hover:removeCardAnim ${mr} ${mb} max-w-[400px] text-center border-2 border-white/30 text-white rounded-xl px-4 py-10 absolute transition-all duration-300 opacity-20 hover:opacity-100 ${color} hover:-translate-y-1 z-0 hover:z-10`}>
        <h2 className='abril text-xl'>{title}</h2>
        <desc className=''>{desc}</desc>
    </div>
  )
}

const Hero = () => {
  return (
    <div className='w-full h-screen max-h-[1080px] flex justify-center items-center cursor-default'>
        <mark className='relative z-10 bg-purple-500 w-full text-center text-white text-[250px] font-extrabold abril txt'>HOLOGRART</mark>

        <Cart title="METAVERSE" mr="mr-[780px]" mb="mb-[330px]" color="hover:bg-yellow-600/20" desc="Reprehenderit in adipisicing dolore veniam voluptate. Laborum esse non consequat anim cupidatat duis. Mollit pariatur mollit excepteur nostrud labore elit Lorem adipisicing aliquip. Pariatur reprehenderit tempor cillum elit cillum qui commodo officia fugiat. Veniam aliqua adipisicing laborum labore Lorem magna dolore." />
        <Cart title="JOINT NFT GENERATON" mr="mr-[-700px]" mb="mb-[350px]" color="hover:bg-purple-600/20" desc="Sint dolore tempor mollit veniam consectetur ea do qui eu et cupidatat. Fugiat irure incididunt duis nulla consequat. Elit fugiat consequat culpa magna quis id ipsum ea. Cupidatat irure commodo non do. Eiusmod cupidatat dolore deserunt sint ex eu. Elit fugiat nisi excepteur Lorem dolore dolor." />
        <Cart title="VIRTUAL FIT" mr="mr-[730px]" mb="mb-[-350px]" color="hover:bg-red-600/20" desc="Exercitation minim laborum consequat laborum dolore reprehenderit exercitation. Ad occaecat dolor quis aute commodo laboris reprehenderit velit commodo irure. Excepteur excepteur laboris reprehenderit mollit qui excepteur et id. Ut enim esse laboris anim sint labore qui sint incididunt ad ipsum irure esse. Nisi amet ut nisi aliquip aute. Laborum enim ea velit consequat eiusmod." />
        <Cart title="MOBABILITY" mr="mr-[-650px]" mb="mb-[-370px]" color="hover:bg-green-600/20" desc="Enim ut consequat velit dolore. Velit enim ullamco quis consectetur et eu aliquip eu nostrud nulla non aliqua. Elit pariatur qui enim irure mollit proident commodo adipisicing ad deserunt aute cupidatat sint. Eu in in quis consectetur in eiusmod consectetur. Commodo deserunt dolor nulla pariatur officia nostrud sunt mollit commodo nostrud. Non adipisicing est culpa non. Ullamco aliqua eiusmod est enim laborum ex eiusmod reprehenderit ex adipisicing occaecat qui elit reprehenderit." />
    </div>
  )
}

export default Hero