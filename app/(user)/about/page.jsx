"use client"
import React, { useState } from 'react'
import style from './style.module.css'
// export const metadata = {
//     title: "About Page",
//     description: "This is Description from About page",
//     authors: [{ name: "Najeeb", name: "Kamil", name: "Zeeshan" }],
//     keywords: ["nextjs", "e-learning", "project", "paytm"]
// }
const about = () => {
    const [coun, setCount] = useState(0)
    return (
        <div>
            <h1 className={style.heading_title}>About Page !</h1>
            <p>Life is a journey filled with challenges, lessons, and opportunities for growth. Every experience, whether good or bad, shapes the person we become. Success is not just about achieving goals but also about learning from failures along the way. Patience, determination, and consistency play a crucial role in building a meaningful life. Surrounding yourself with positive people and nurturing good habits can guide you toward happiness and fulfillment. Each day is a chance to start fresh, improve yourself, and move closer to your dreams. Remember, small steps taken daily create lasting progress and a brighter future.</p>
            <br />
            <br />
            <p>Life is a journey filled with challenges, lessons, and opportunities for growth. Every experience, whether good or bad, shapes the person we become. Success is not just about achieving goals but also about learning from failures along the way. Patience, determination, and consistency play a crucial role in building a meaningful life. Surrounding yourself with positive people and nurturing good habits can guide you toward happiness and fulfillment. Each day is a chance to start fresh, improve yourself, and move closer to your dreams. Remember, small steps taken daily create lasting progress and a brighter future.</p>
            <br />
            <br />
            <p>Life is a journey filled with challenges, lessons, and opportunities for growth. Every experience, whether good or bad, shapes the person we become. Success is not just about achieving goals but also about learning from failures along the way. Patience, determination, and consistency play a crucial role in building a meaningful life. Surrounding yourself with positive people and nurturing good habits can guide you toward happiness and fulfillment. Each day is a chance to start fresh, improve yourself, and move closer to your dreams. Remember, small steps taken daily create lasting progress and a brighter future.</p>

            {/* For use-client */}
            <p className='mt-4'>Count : {coun}</p>

            <button onClick={() => setCount(coun + 1)} className='bg-blue-950 text-white px-5 py-2 cursor-pointer rounded mt-4'>Increment</button>
        </div>
    )
}
export default about
