import React from 'react'
import { Rubik } from 'next/font/google'
import { Work_Sans } from 'next/font/google'
const rubik = Rubik({
    subsets: ["latin"]
})
const workSans = Work_Sans({
    subsets: ['latin']
})
const page = () => {
    return (
        <div>
            <h1 className={workSans.className}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam modi veritatis tempora, possimus quidem vero quos, amet distinctio autem neque rerum! Architecto consequatur sint placeat neque labore sunt impedit soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, quas necessitatibus commodi officia esse voluptas aliquam, odit corrupti odio amet quisquam totam veritatis quis eius beatae illum quaerat? Sint, in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic tenetur iste sint, magni exercitationem nam a mollitia corrupti vitae eum repudiandae unde quas dolor provident, molestiae aliquam eos eius!</h1>
            <br />
            <br />
            <p className='font-rubik'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam modi veritatis tempora, possimus quidem vero quos, amet distinctio autem neque rerum! Architecto consequatur sint placeat neque labore sunt impedit soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, quas necessitatibus commodi officia esse voluptas aliquam, odit corrupti odio amet quisquam totam veritatis quis eius beatae illum quaerat? Sint, in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic tenetur iste sint, magni exercitationem nam a mollitia corrupti vitae eum repudiandae unde quas dolor provident, molestiae aliquam eos eius!
            </p>

            <br />
            <br />
            <br />
            <p className='font-work-sans'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam modi veritatis tempora, possimus quidem vero quos, amet distinctio autem neque rerum! Architecto consequatur sint placeat neque labore sunt impedit soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, quas necessitatibus commodi officia esse voluptas aliquam, odit corrupti odio amet quisquam totam veritatis quis eius beatae illum quaerat? Sint, in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic tenetur iste sint, magni exercitationem nam a mollitia corrupti vitae eum repudiandae unde quas dolor provident, molestiae aliquam eos eius!
            </p>

        </div>
    )
}
export default page
