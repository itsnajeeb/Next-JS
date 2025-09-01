"use client"
import React, { useEffect, useState } from 'react'

const page = () => {
    const API = 'https://jsonplaceholder.typicode.com/posts'

    const [postData, setPostData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(API)
            const data = await res.json()
            //console.log(data);
            setPostData(data)
            return data
        }

        fetchData()

    }, [])
    // console.log(postData);


    return (
        <div>
            <h1>Clinet Comp</h1>

            <button
                className='bg-blue-950 text-white px-5 py-2 rounded my-5 cursor-pointer '
                onClick={() => alert("Component become client component using 'use clinet' at the top of the file")}
            >Clicke me</button>

            <table style={{ border: "2px solid white", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={{ border: "2px solid white", padding: "8px" }}>Id</th>
                        <th style={{ border: "2px solid white", padding: "8px" }}>Title</th>
                        <th style={{ border: "2px solid white", padding: "8px" }}>Body Data</th>
                    </tr>
                </thead>
                <tbody>
                    {postData ? postData.map((curElem, index) => (
                        <tr key={index}>
                            <td style={{ border: "2px solid white", padding: "8px" }}>{curElem.id}</td>
                            <td style={{ border: "2px solid white", padding: "8px" }}>{curElem.title}</td>
                            <td style={{ border: "2px solid white", padding: "8px" }}>{curElem.body}</td>
                        </tr>
                    )) : "No Data Found"}
                </tbody>
            </table>



        </div>
    )
}


export default page