import React from 'react'

const Discount = () => {
    return (
        <section className='mt-[120px] md:mt-[180px]'>
            <div className='flex flex-col justify-center text-center'>
                <h1 className='text-[34px] sm:text-[44px] lg:text-[60px] font-semibold'>Get 20% Discount On Your First <br /> Order, Are You Ready To Buy</h1>
                <p className='py-[30px]'>We will make sure you get the right and the best quality products for your workout</p>
                <div className='flex gap-7 m-auto'>
                    <button className='py-[10px] px-[27px] rounded cursor-pointer exploreMe_BTN mt-[20px]'>Learn More</button>
                    <button className='py-[10px] px-[27px] rounded cursor-pointer mt-[20px] text-white'>Stay In Touch</button>
                </div>
            </div>
        </section>
    )
}

export default Discount