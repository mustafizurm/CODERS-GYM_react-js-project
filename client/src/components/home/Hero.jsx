import React from 'react'
import heroImg from "../../assets/images/dumbell-Bcy4gPfV.png"
import "../../assets/css/home.css"

const Hero = () => {
  return (
    <section className='hero_Section_left'>
      <div className='w-[96%] sm:w-[620px] md:w-[760px] lg:w-[1010px] xl:w-[1260px] m-auto grid grid-cols-1 md:grid-cols-2 items-center gap-[90px] py-[100px]'>
        <div className='hero_left'>
          <h2 className='text-6xl font-bold'>Gym Gives you the perfect <span className=''>Health</span></h2>
          <p className='py-[30px] text-gray-600 font-light'>It is a long established fact that a reader will be by readable content of a page when are the best product.</p>
          <div className='flex gap-7'>
            <button className='py-[10px] px-[17px] rounded cursor-pointer'>Order Now</button>
            <button className='py-[10px] px-[17px] rounded cursor-pointer'>Watch Now</button>
          </div>
        </div>
        <div className=''>
          <img src={heroImg} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero