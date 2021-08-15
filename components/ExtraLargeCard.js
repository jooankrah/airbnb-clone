import Image from 'next/image'
import React from 'react'

function ExtraLargeCard() {
    return (
        <div className="mt-10">
            <div className="relative h-[300px] lg:h-[400px] xl:h-[450px]">
                <Image className="rounded-lg" src="/images/xl-image.jpg" layout="fill" objectFit="cover" objectPosition="50% 50%"/>
                <div className="absolute top-16 left-11 md:top-12 md:left-14 right-0">
                    <h2 className="font-bold text-4xl md:text-3xl text-white">Try hosting</h2>
                    <p className="mt-5 text-white text-base md:text-lg max-w-xs">Earn extra income and unlock new opportunies by sharing your space</p>
                    <button className="my-5 py-3 px-8 bg-white rounded-lg font-semibold">Learn more</button>
                </div>
            </div>
        </div>
    )
}

export default ExtraLargeCard
