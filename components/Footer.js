import React from 'react'
import { GlobeAltIcon } from '@heroicons/react/solid'


function Footer() {
    const year = new Date().getFullYear()
    return (
        <div className="-mx-16 w-auto bg-gray-100">
            <hr className='my-5' />
            <div className="mx-16 grid grid-cols-1 gap-2 lg:grid-cols-4">
                <div className="space-y-3">
                    <h5 className="font-medium">About</h5>
                    <ul className="space-y-3 font-Assistant grid-cols-none md:space-y-0 md:grid md:grid-cols-3 md:gap-4 lg:grid-cols-none">
                        <li>How Airbnb works</li>
                        <li>Newsroom</li>
                        <li>Airbnb 2021</li>
                        <li>Investors</li>
                        <li>Airbnb Plus</li>
                        <li>Airbnb Luxe</li>
                        <li>Hotel Tonight</li>
                        <li>Airbnb for Work</li>
                        <li>Made possible bt Hosts</li>
                        <li>Careers</li>
                        <li>Founders' Lettter</li>
                    </ul>
                </div>
                <hr className="m-3 lg:hidden" />
                <div className="space-y-3">
                    <h5 className="font-medium">Community</h5>
                    <ul className="font-Assistant space-y-3 grid-cols-none md:space-y-0 md:grid md:grid-cols-3 md:gap-4 lg:grid-cols-none">
                        <li>Diversity & Belonging</li>
                        <li>Against Discrimination</li>
                        <li>Accessibility</li>
                        <li>Airbnb Associates</li>
                        <li>Frontline Stays</li>
                        <li>Guest Referrals</li>
                        <li>Gift cards</li>
                        <li>Airbnb.org</li>
                    </ul>
                </div>
                <hr className="m-3 lg:hidden" />
                <div className="space-y-3">
                    <h5 className="font-medium">Host</h5>
                    <ul className="font-Assistant space-y-3 grid-cols-none md:space-y-0 md:grid md:grid-cols-3 md:gap-4 lg:grid-cols-none">
                        <li>Host your home</li>
                        <li>Host an Online Experience</li>
                        <li>Host an Experience</li>
                        <li>Responsible hosting</li>
                        <li>Resource Center</li>
                        <li>Community Center</li>
                    </ul>
                </div>
                <hr className="m-3 lg:hidden" />
                <div className="space-y-3 lg:mr-6">
                    <h5 className="font-medium">Support</h5>
                    <ul className="font-Assistant space-y-3 grid-cols-none md:space-y-0 md:grid md:grid-cols-3 md:gap-4 lg:grid-cols-none">
                        <li>Our COVID-19 Response</li>
                        <li>Help Center</li>
                        <li>Cancellation options</li>
                        <li>Neighborhood Support</li>
                        <li>Trust & Safety</li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <hr className="my-5 mx-16" />
            <div className="mx-16 pb-5 md:w-1/2 md:mx-auto lg:mx-16 lg:w-auto lg:flex lg:justify-between">
                <div className="flex space-x-2 mb-5 cursor-pointer md:justify-center lg:order-3 lg:justify-self-end">
                    <GlobeAltIcon className='h-6 text-gray-600' />
                    <p>English(US)</p>
                </div>
                <div className="md:text-center lg:order-1 mb-1 lg:mr-2">
                    <p> &copy; <span>{year}</span> Airbnb Clone by <a href="#">The Jooankrah</a></p>
                </div>
                <div className="ml-auto lg:order-2 lg:ml-[-36rem]">
                    <ul className="flex space-x-3 md:justify-center">
                        <li>Privacy</li>
                        <li>Terms</li>
                        <li>Sitemap</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Footer
