import Image from 'next/image'
import React from 'react'

function LargeCard() {
    return (
        <div className="m-1 max-w-max cursor-pointer  hover:scale-105 transition transform duration-300 ease-out" >
            <div className="relative h-64 w-64 lg:h-72 lg:w-72 2xl:h-96 2xl:w-96">
                <Image className="rounded-lg" src="/images/large-image.jpeg" layout="fill" />
            </div>
            
            <h3 className="font-semibold">Outdoor getaways</h3>
        </div>
    )
}

export default LargeCard
