import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className=''>
      <div className='w-[96%] sm:max-w-[620px] md:max-w-[760px] lg:max-w-[1010px] xl:max-w-[1260px] m-auto py-[70px] text-white'>
        <div className='w-[100%] md:flex gap-[120px]'>
          <div className='w-[100%] md:w-[30%]'>
            <h3 className='text-2xl font-semibold mb-[15px]'>CODERS <span>GYM</span></h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab placeat quaerat doloribus odit perferendis autem blanditiis, nihil pariatur iusto accusamus.</p>
          </div>
          <div className='w-[100%] md:w-[70%] grid grid-cols-2 md:grid-cols-3 gap-[60px] mt-[50px] md:mt-[0px]'>
            <div>
              <h3 className='text-2xl mb-[15px]'>Important Links</h3>
              <div className='flex flex-col gap-3'>
                <p>Home</p>
                <p>About</p>
                <p>Services</p>
                <p>Login</p>
              </div>
            </div>
            <div>
              <h3 className='text-2xl mb-[15px]'>Company Links</h3>
              <div className='flex flex-col gap-3'>
              <p>Our Services</p>
              <p>Contact</p>
              <p>Privacy Policy</p>
              </div>
            </div>
            <div>
              <h3 className='text-2xl mb-[15px]'>Resources</h3>
              <div className='flex flex-col gap-3'>
                <p>Home</p>
                <p>About</p>
                <p>Services</p>
                <p>Login</p>
              </div>
            </div>
          </div>
        </div>
        <hr className='mt-[60px] text-gray-300' />
      </div>
    </footer>
  )
}

export default Footer