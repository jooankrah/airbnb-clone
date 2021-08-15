import Image from 'next/image'
import React from 'react'

function HomeHero() {
    return (
        <div className="relative h-[400px] sm:h-[500px] lg:h-[500px] xl:h-[500px] 2xl:h-[750px]">
            <Image src="/images/bannerImage.jpeg" layout="fill" objectFit="cover" objectPosition="center bottom"/>
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-lg sm:text-lg font-semibold">Not sure where to go? Perfect</p>
                <button className="bg-white mt-4 py-5 px-14 rounded-full outline-none text-lg text-pink-500 font-bold shadow-md hover:shadow-lg active:scale-90 transition duration-150">
                    I'm flexible
                </button>
            </div>
        </div>
    )
}

export default HomeHero
