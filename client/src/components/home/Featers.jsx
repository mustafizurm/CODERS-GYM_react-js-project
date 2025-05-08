import React from 'react'
import img1 from "../../assets/images/img1.png"
import img2 from "../../assets/images/img2.png"
import img3 from "../../assets/images/img3.png"
import img4 from "../../assets/images/img4.png"
import img5 from "../../assets/images/img5.png"
import img6 from "../../assets/images/img6.png"
import img7 from "../../assets/images/img7.png"

const Featers = () => {

    const featers = [
        {
            id: 1,
            name: 'Dumbells',
            img: img1,
            category: "Fitness"
        },
        {
            id: 2,
            name: 'Yoga Mat',
            img: img2,
            category: "Yoga"
        },
        {
            id: 3,
            name: 'Yoga Mat',
            img: img3,
            category: "Fitness"
        },
        {
            id: 4,
            name: 'Yoga Mat',
            img: img4,
            category: "Muscles"
        },
        {
            id: 5,
            name: 'Yoga Mat',
            img: img5,
            category: "Muscles"
        },
        {
            id: 6,
            name: 'Yoga Mat',
            img: img6,
            category: "Yoga"
        },
        {
            id: 7,
            name: 'Yoga Mat',
            img: img7,
            category: "Yoga"
        },
    ]

  return (
    <section className='mt-[160px] md:mt-[180px]'>
        <div className='w-[96%] sm:max-w-[620px] md:max-w-[760px] lg:max-w-[1010px] xl:max-w-[1260px] m-auto'>
            <div className='w-[100%] flex gap-6 justify-center sm:justify-start'>
                <input className='py-[3px] px-[17px] bg-amber-400 text-white cursor-pointer' type="button" value="All" />
                <input className='py-[3px] px-[17px] bg-gray-400 text-white cursor-pointer' type="button" value="Yoga" />
                <input className='py-[3px] px-[17px] bg-gray-400 text-white cursor-pointer' type="button" value="Fitness" />
                <input className='py-[3px] px-[17px] bg-gray-400 text-white cursor-pointer' type="button" value="Muscles" />
            </div>
            <div className='w-[100%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px] mt-[60px]'>
                {
                    featers.map((feater)=> {
                        return(
                            <div className='border border-gray-300 px-[14px] pt-[18px] pb-[35px]'>
                                <img src={feater.img} alt="" />
                                <h4 className='text-[22px] font-semibold py-[12px]'>{feater.name}</h4>
                                <p>{feater.category}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Featers