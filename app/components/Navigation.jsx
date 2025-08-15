import Link from 'next/link'
import React from 'react'

const Navigation = () => {
    return (
        <header className='grid grid-cols-2'>
            <div>Your Logo</div>
            <nav className=' flex'>
                <ul className=' flex gap-5'>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/service">Service</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation