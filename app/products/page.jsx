import React from 'react'

const Product = async ({ searchParams }) => {
    let searchValue = await searchParams;
    console.log("Server > ",searchValue);
    
    console.log(Object.entries(searchValue));
    

    return (
        <div>
            <h1 className='mb-4 text-xl'> Product Details :</h1>

            <ul>
                {Object.entries(searchValue).map(([key, value]) => (
                    <li key={key}>
                        {key}: { value}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Product