import React, { Suspense } from 'react'
import Datacard from '../Datacard'
import Loader from '@/app/components/Loader'

const DateFetchServer = async (props) => {
    const searchParam = await props.searchParams
    const userName = searchParam.name
    console.log(userName);

    return (
        <div className='grid grid-cols-2 gap-3 h-full'>
            <div className='h-full flex justify-center items-center'>
                <h2>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ipsam ducimus officia quidem! Necessitatibus dolorum, dolorem distinctio, similique tenetur optio alias repellendus enim commodi qui ex fuga aspernatur quidem dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus autem unde qui assumenda veniam velit harum perspiciatis delectus. Praesentium voluptates esse et culpa error inventore quas ad dignissimos maiores quis.
                </h2>
            </div>
            <Suspense fallback={<Loader/>}>
                <Datacard userName={userName} />
            </Suspense>
        </div>
    )
}

export default DateFetchServer