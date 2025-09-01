import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='container h-screen flex justify-center items-center'>
            <div className="main   grid grid-cols-4 gap-8 ">
                <div className="bg-white w-full h-full flex  flex-col items-center p-2 justify-between rounded-xl ">
                    <div className=" w-full h-full rounded-full flex justify-center items-center">
                        <Image src='/wallpaper.jpg'
                            width={100} height={100}
                            className='rounded-full '
                            alt='Profile Photo'
                            blurDataURL='data...'
                            placeholder='blur'
                             />
                    </div>
                    <div className='flex justify-center flex-col items-center'>
                        <h2 className='text-black text-lg font-semibold'>Md Najeeb </h2>
                        <p className='text-black text-base'>Full Stack Developer </p>
                        <p className='text-black text-xs'>MERN</p>
                    </div>
                </div>

                <div className="bg-white w-48 h-48 flex  flex-col items-center p-2 justify-between rounded-xl ">
                    <div className="image bg-pink-100 w-24 h-24 rounded-full flex justify-center items-center ">
                        {/* <Image /> */}
                        <p className='text-gray-500 '>HA</p>


                    </div>
                    <div className='flex justify-center flex-col items-center'>
                        <h2 className='text-black text-lg font-semibold'>Harsh Patel</h2>
                        <p className='text-black text-base'>Content Creator</p>
                        <p className='text-black text-xs'>ReactJS, NextJs, JavaScript</p>
                    </div>
                </div>

                <div className="bg-white w-48 h-48 flex  flex-col items-center p-2 justify-between rounded-xl ">
                    <div className="image bg-blue-100 w-24 h-24 rounded-full flex justify-center items-center ">
                        {/* <Image /> */}
                        <p className='text-gray-500 '>MSA</p>

                    </div>
                    <div className='flex justify-center flex-col items-center'>
                        <h2 className='text-black text-lg font-semibold'>Md Saif Alam</h2>

                        <p className='text-black text-base'>B.Pharma </p>
                        <p className='text-black text-xs'>......</p>
                    </div>
                </div>

                <div className="bg-white w-48 h-48 flex  flex-col items-center p-2 justify-between rounded-xl ">
                    <div className="image bg-green-100 w-24 h-24 rounded-full flex justify-center items-center ">
                        {/* <Image /> */}
                        <p className='text-gray-500 '>MM</p>


                    </div>
                    <div className='flex justify-center flex-col items-center'>
                        <h2 className='text-black text-lg font-semibold'>Mohd Mojib </h2>
                        <p className='text-black text-base'>Backend Developer</p>
                        <p className='text-black text-xs'>JavaScript, Express</p>
                    </div>
                </div>

                <div className="bg-white w-48 h-48 flex  flex-col items-center p-2 justify-between rounded-xl ">
                    <div className="image bg-gray-100 w-24 h-24 rounded-full flex justify-center items-center ">
                        {/* <Image /> */}
                        <p className='text-gray-500 '>MA</p>


                    </div>
                    <div className='flex justify-center flex-col items-center'>
                        <h2 className='text-black text-lg font-semibold'>Md Amanullah </h2>
                        <p className='text-black text-base'>Frontend Designer</p>
                        <p className='text-black text-xs'>ReactJS, NextJs</p>
                    </div>
                </div>

                <div className="bg-white w-48 h-48 flex  flex-col items-center p-2 justify-between rounded-xl ">
                    <div className="image bg-blue-100 w-24 h-24 rounded-full flex justify-center items-center ">
                        {/* <Image /> */}
                        <p className='text-gray-500 '>SH</p>

                    </div>
                    <div className='flex justify-center flex-col items-center'>
                        <h2 className='text-black text-lg font-semibold'>Shadab Hussain</h2>
                        <p className='text-black text-base'>Frontend Designer</p>
                        <p className='text-black text-xs'>HTML, CSS, JS</p>
                    </div>
                </div>

                <div className="bg-white w-48 h-48 flex  flex-col items-center p-2 justify-between rounded-xl ">
                    <div className="image bg-orange-100 w-24 h-24 rounded-full flex justify-center items-center ">
                        {/* <Image /> */}

                        <p className='text-gray-500 '>ZS</p>

                    </div>
                    <div className='flex justify-center flex-col items-center'>
                        <h2 className='text-black text-lg font-semibold'>Zeehsan Saikh</h2>
                        <p className='text-black text-base'>Frontend Designer</p>
                        <p className='text-black text-xs'>ReactJS, NextJs</p>
                    </div>
                </div>

                <div className="bg-white w-48 h-48 flex  flex-col items-center p-2 justify-between rounded-xl ">
                    <div className="image bg-red-100 w-24 h-24 rounded-full flex justify-center items-center ">
                        {/* <Image /> */}
                        <p className='text-gray-500 '>TA</p>


                    </div>
                    <div className='flex justify-center flex-col items-center'>
                        <h2 className='text-black text-lg font-semibold'>Tauhid Alam</h2>
                        <p className='text-black text-base'>Cyber Security </p>
                        <p className='text-black text-xs'>ReactJS, NextJs</p>
                    </div>
                </div>




            </div>
        </div>
    )
}
export default page
