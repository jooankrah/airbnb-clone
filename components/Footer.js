import React from 'react'

function Footer() {
    return (
        <div className="-mx-16 w-auto bg-gray-100">
        <hr className='my-5'/>
        <div className="mx-16 lg:flex lg:justify-between lg:items-start">
            <div className="space-y-3">
                <h5 className="font-medium">About</h5>
                    <ul className="space-y-3 grid-cols-none md:space-y-0 md:grid md:grid-cols-3 md:gap-4 lg:grid-cols-none">
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
            <hr className="m-3"/>
            <div className="space-y-3">
                <h5 className="font-medium">Community</h5>
                <ul className="space-y-3 grid-cols-none md:space-y-0 md:grid md:grid-cols-3 md:gap-4 lg:grid-cols-none">
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
            <hr className="m-3 "/>
            <div className="space-y-3">
                <h5 className="font-medium">Host</h5>
                <ul className="space-y-3 grid-cols-none md:space-y-0 md:grid md:grid-cols-3 md:gap-4 lg:grid-cols-none">
                <li>Host your home</li>
                <li>Host an Online Experience</li>
                <li>Host an Experience</li>
                <li>Responsible hosting</li>
                <li>Resource Center</li>
                <li>Community Center</li>
                </ul>
            </div>
            <hr className="m-3"/>
            <div className="space-y-3 lg:mr-6">
                <h5 className="font-medium">Support</h5>
                <ul className="space-y-3 grid-cols-none md:space-y-0 md:grid md:grid-cols-3 md:gap-4 lg:grid-cols-none">
                    <li>Our COVID-19 Response</li>
                    <li>Help Center</li>
                    <li>Cancellation options</li>
                    <li>Neighborhood Support</li>
                    <li>Trust & Safety</li>
                    <li></li>
                </ul>
            </div>
        </div>
            <hr className="my-5 mx-16"/>
            <div className="mx-16 pb-5">
                copyright
            </div>
        </div>
    )
}

export default Footer
