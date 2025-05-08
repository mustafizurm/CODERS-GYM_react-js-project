import React from 'react'
import "../../assets/css/home.css"

const Offer = () => {

    const offers = [
        {
            id: 1,
            title: 'What we offer for you',
            description: "It is a long established fact that a reader readable",
            icon: ''
        },
        {
            id: 2,
            title: 'Yoga Equipments',
            description: "It is a long established fact that a reader readable",
            icon:"fa-solid fa-person py-[13px] px-[10px] text-[35px]"
        },
        {
            id: 3,
            title: 'Muscles Equipments',
            description: "It is a long established fact that a reader readable",
            icon: "fa-solid fa-music py-[13px] px-[10px] text-[35px]"
        },
        {
            id: 4,
            title: 'Fitness Equipments',
            description: "It is a long established fact that a reader readable",
            icon: "fa-solid fa-table-tennis-paddle-ball py-[13px] px-[10px] text-[35px]"
        },
    ]

    return (
        <section className='mt-[120px] md:mt-[180px]'>
            <div className='w-[96%] sm:max-w-[620px] md:max-w-[760px] lg:max-w-[1010px] xl:max-w-[1260px] m-auto'>
                <div className='w-[100%] grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
                    {
                        offers.map((offer) => {
                            return (
                                <div className={`${offer.id === 1? `text-[31px] font-semibold`: `text-[25px] offer_card`}`}>
                                    <i className={offer.icon}></i>
                                    <h3 className={`${offer.id === 1? `text-[31px] font-bold`: `text-[25px]`}`}>{offer.title}</h3>
                                    <p className={`${offer.id === 1? `text-[14px]`: `text-[14px]`} py-[10px] text-gray-700`}>{offer.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Offer