import React from 'react'
import Image from 'next/image'
import { SearchIcon,GlobeAltIcon, MenuIcon, UserCircleIcon } from '@heroicons/react/solid'


function Header() {
    return (
        <header className="sticky top-0 bg-white z-50 py-3 px-5 shadow-md">
            <div className="max-w-[1760px] mx-auto px-8 sm:px-8 md:px-16 lg:px-16 xl:px-16 2xl:px-16 grid grid-cols-2 lg:grid-cols-3"> 
                {/** left div */}
                <div className="relative flex items-center h-8 cursor-pointer my-auto">
                    <Image src="/images/Airbnb_Logo.svg"
                    width={102} 
                    height={32}
                    // layout={'fill'} 
                    objectFit='contain' 
                    objectPosition='left'
                    />
                </div>

                {/**middle div */}
                <div className=' hidden lg:flex justify-between items-center lg:border-2 rounded-full py-2 px-2'>
                    <input className='hidden md:inline bg-transparent outline-none flex-grow text-gray-600' type='text' placeholder='Start your search here'/>
                   <SearchIcon className='h-8 bg-red-400 rounded-full p-2 
                   text-white cursor-pointer hidden md:inline' 
                   />
                </div>

                {/** right item */}
                <div className='flex justify-end items-center space-x-4 text-gray-500 cursor-pointer'>
                    <p className='hidden lg:inline'>Become a host</p>
                    <GlobeAltIcon className='hidden lg:inline h-6'/>
                    <div className='flex items-center space-x-2 border-2 p-1 rounded-full'>
                    <MenuIcon className='h-6'/>
                    <UserCircleIcon className='h-6'/>
                    </div>
                </div>
            </div>     
        </header>
    )
}

export default Header
