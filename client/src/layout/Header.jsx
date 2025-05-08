import React from 'react'
import Menu from './Menu'
import "./header.css"

const Header = () => {
  return (
    <header className='bg-rgb(255, 255, 255)'>
      <nav className='w-[96%] sm:w-[620px] md:w-[760px] lg:w-[1010px] xl:w-[1260px] m-auto flex justify-between py-[25px] items-center'>

        <h3 className='text-3xl font-bold'>CODERS <span className=''>GYM</span></h3>

        <Menu />

        <div className='flex gap-7 items-center'>
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-cart-shopping" />
          <button className='hidden sm:block border py-[5px] px-[18px] rounded cursor-pointer'>Login</button>
        </div>

        <div className='block sm:hidden'>
          <i className="fa-solid fa-bars text-[26px] cursor-pointer"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header