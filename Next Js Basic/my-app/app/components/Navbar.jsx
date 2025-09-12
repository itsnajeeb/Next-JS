import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex flex-row justify-between px-20 mb-20 border-b-1 py-5 '>
            <div>
                    <h1>My Logo</h1>
            </div>
            <ul className='flex flex-row space-x-10'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/service">Service</Link></li>
                <li><Link href="/ImageCard/">Card</Link></li>
                <li><Link href="/clientComp">ClientComp</Link></li>
                <li><Link href="/serverComp">ServerComp</Link></li>
            </ul>
        </div>
    )
}

export default Navbar