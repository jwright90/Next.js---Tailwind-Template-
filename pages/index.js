import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'

export default function Home() {
 
  const [mouseEnter, setMouseEnter] = useState(false)
  const mouseEnterAnimation = () => { setMouseEnter(true) }
  const mouseLeaveAnimation = () => { setMouseEnter(false) }

  return (
    <div>
    
      <Head>
        <title>NFT Preview</title>
      </Head>

      <div className="font-outfit text-white">
        <div className="min-h-screen flex justify-center items-center">
          <div className="card h-120 w-72 bg-card-dark-blue rounded-md p-4">

            <div 
            className="relative cursor-pointer h-64 w-64"
            onMouseEnter={mouseEnterAnimation}
            onMouseLeave={mouseLeaveAnimation}
            >
              <div 
                className= {`
                ${ mouseEnter ? 'h-full bottom-0 rounded-md absolute bg-cyan bg-opacity-50 w-full z-10 transition-all duration-500' : 'h-0 bottom-0 rounded-md absolute bg-cyan bg-opacity-50 w-full z-10 transition-all duration-300' }
                `}
              >
              <div className="h-full flex justify-center items-center opacity-0 hover:opacity-100">
                <Image
                  src="/../public/svgs/icon-view.svg"
                  alt="View"
                  height={40}
                  width={40}
                />
              </div>
              </div>

              <Image 
                className="rounded-md"
                src="/../public/images/image-equilibrium.jpg"
                alt="Equilibrium"
                layout="fill"
                objectFit="cover"
              />  
            </div>
          
            <p className="text-white mt-4 hover:text-cyan cursor-pointer transition-all duration-300">Equilibrium #3429</p>
            <p className="text-soft-blue mt-2 font-light text-sm">Our Equilibrium collection promotes balance and calm.</p>

            <div className="flex my-3 pb-6 border-b-2 border-soft-blue border-opacity-25">
              <div className="flex items-center">
                <Image
                  src="/../public/svgs/icon-ethereum.svg"
                  alt="Etherium"
                  height={16}
                  width={10}
                />
                <p className="text-cyan text-xs font-bold ml-2 tracking-wider">0.041ETH</p>
              </div>
              <div className="flex items-center ml-auto">
                <Image
                  src="/../public/svgs/icon-clock.svg"
                  alt="Etherium"
                  height={16}
                  width={16}
                />
                <p className="text-soft-blue text-xs ml-2">3 days left</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="relative h-12 w-12 rounded-full border-2 border-white border-opacity-75">
                <Image
                  src="/../public/images/image-avatar.png"
                  alt="Avatar"
                  layout="fill"
                />
              </div>
              <div className="text-sm flex items-center">
                <p className="text-soft-blue ml-4">Creation of &nbsp;</p>
                <p className="text-white hover:text-cyan transition-all duration-300 cursor-pointer">Jules Wyvern</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
