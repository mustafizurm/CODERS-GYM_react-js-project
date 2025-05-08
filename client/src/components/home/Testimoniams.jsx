import React from 'react'
import "../../assets/css/home.css"
import img1 from "../../assets/images/img1.jpg"
import img2 from "../../assets/images/img2.jpg"
import img3 from "../../assets/images/img3.jpg"

const Testimoniams = () => {

    const testimoniums = [
        {
            id: 1,
            img: img1,
            name: "Arina",
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur perspiciatis ut itaque nobis totam minus, ex ab quae',
            rating: ''
        },
        {
            id: 2,
            img: img2,
            name: "John Doe",
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur perspiciatis ut itaque nobis totam minus, ex ab quae',
            rating: ''
        },
        {
            id: 3,
            img: img3,
            name: "Steve Smith",
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur perspiciatis ut itaque nobis totam minus, ex ab quae',
            rating: ''
        }
    ]

    return (
        <section className='mt-[190px]'>
            <div className='w-[96%] sm:w-[620px] md:w-[760px] lg:w-[1010px] xl:w-[1260px] m-auto'>
                <h3 className='text-4xl heading'>What Are The Costumer <br /> Saying About Us</h3>
                <div className='w-[100%] flex overflow-hidden gap-4 mt-[40px]'>
                    {
                        testimoniums.map((testimonium) => {
                            return (
                                <div className='min-w-[100%] sm:min-w-[50%] lg:min-w-[33%] bg-red-600 testimonium_card pt-[20px] pb-[35px] px-[17px]'>
                                    <div className='flex items-center gap-4'>
                                        <img className='w-[60px] h-[60px] rounded-full' src={testimonium.img} alt="" />
                                        <div>
                                            <h4 className='font-bold text-2xl'>{testimonium.name}</h4>
                                            <p>{testimonium.name}</p>
                                        </div>
                                    </div>
                                    <p className='mt-[35px] text-gray-800 desc'>{testimonium.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Testimoniams