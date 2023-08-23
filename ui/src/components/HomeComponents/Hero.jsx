import React from 'react'

const Cart = ({mb, mr, title, desc, color, link}) => {
  return (
    <button onClick={() => {
      const y = document.getElementById(link).offsetTop - 40;
      window.scrollTo(0, y);
    }} className={` hover:removeCardAnim ${mr} ${mb} max-w-[400px] text-center border-2 border-white/30 text-white rounded-xl px-4 py-10 absolute transition-all duration-300 opacity-20 hover:opacity-100 ${color} hover:-translate-y-1 z-0 hover:z-10 focus:opacity-100 focus:-translate-y-1 focus:z-10`}>
        <h2 className='abril text-xl'>{title}</h2>
        <desc className=''>{desc}</desc>
    </button>
  )
}

const Hero = () => {
  return (
    <div className='w-full h-screen max-h-[1080px] flex justify-center items-center cursor-default'>
        <mark className='relative z-10 bg-purple-500 w-full text-center text-white text-[250px] font-extrabold abril txt'>HOLOGRART</mark>

        <Cart link="metaverse" title="METAVERSE" mr="mr-[780px]" mb="mb-[330px]" color="hover:bg-yellow-600/20 focus:bg-yellow-600/20" desc="The Hologrart Metaverse is a unique metaverse that brings together art, technology, entertainment and monetization opportunities. We are happy to welcome you in the magical world of the future and the past!" />
        <Cart link="jnft" title="JOINT NFT GENERATON" mr="mr-[-700px]" mb="mb-[350px]" color="hover:bg-purple-600/20 focus:bg-purple-600/20" desc="Joint NFT Generation offers an innovative and fun experience, pushing the boundaries of art and collaboration. Feel the power of collaborative projects, explore various art genres and enjoy a sustainable income. Join this exciting world and experience the collective power of art!" />
        <Cart link="virtualfit" title="VIRTUAL FIT" mr="mr-[730px]" mb="mb-[-350px]" color="hover:bg-red-600/20 focus:bg-red-600/20" desc="Virtual Fit is not just a fashion app, but a lifestyle that makes the clothing experience more interactive and enjoyable. Join this platform that brings fashion together with augmented reality, enrich your wardrobe and discover new ways to share your passion for fashion!" />
        <Cart link="mobability" title="MOBABILITY" mr="mr-[-650px]" mb="mb-[-370px]" color="hover:bg-green-600/20 focus:bg-green-600/20" desc="Mobability offers not only a driving experience in mobility, but also a lifestyle. Car owners can not only drive, but also interact, earn and experience with their vehicles. Step into the mobility world of the future and discover a whole new driving experience with Mobability!" />
    </div>
  )
}

export default Hero