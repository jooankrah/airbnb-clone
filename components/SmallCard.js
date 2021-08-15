import Image from 'next/image'
import React from 'react'

function SmallCard() {
    return (
        <div className="flex flex-row mt-4 rounded-lg max-w-max cursor-pointer  hover:bg-gray-50 hover:scale-105 transition transform duration-200 ease-out">
            <div className="rounded-full">
                <Image className="rounded-lg" src="/images/small-image.jpg" height="65" width="65" objectFit="contain"/>
            </div>
            <div className="mx-4 my-1">
                <p className="font-semibold">Accra</p>
                <p className="tracking-tight whitespace-nowrap !overflow-ellipsis">15 minute drive</p>
            </div>
        </div>
    )
}

export default SmallCard
