import React from 'react'

const page = async (props) => {
    const { slug } = await props.params
    // console.log(slug);

    // console.log(Array(index));


    return (
        <div>
            <h1>Welcome to our Blog</h1>
            <ul>{slug.map((val, index) => <li key={index}>{index} : {val}</li>)
            }</ul>
        </div>
    )
}

export default page 