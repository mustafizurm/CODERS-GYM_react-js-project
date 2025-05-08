import React from 'react'
import img from "../../assets/images/3-Dy86xsud.png"

const Importence = () => {
    return (
        <section className='mt-[120px] md:mt-[180px]'>
            <div className='w-[96%] sm:max-w-[620px] md:max-w-[760px] lg:max-w-[1010px] xl:max-w-[1260px] m-auto'>
                <div className='w-[100%] grid grid-cols-1 md:grid-cols-2 gap-[50px] items-center'>
                    <div className=''>
                        <img src={img} alt="" />
                    </div>
                    <div className=''>
                        <h4 className='font-semibold text-4xl'>The Importants To Take Care Of Yourself</h4>
                        <p className='py-[16px]'>The Importants To Take Care Of Yourself Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam obcaecati sequi odio dolore officia magni reiciendis, architecto, eos, aut asperiores reprehenderit quas rerum omnis facilis quam eius doloribus maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae vero inventore assumenda ducimus alias doloribus.</p>
                        <button className='py-[10px] px-[27px] rounded cursor-pointer exploreMe_BTN mt-[20px]'>Explore Me</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Importence