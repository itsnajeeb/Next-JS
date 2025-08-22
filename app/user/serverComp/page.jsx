import React from 'react'

const ServerComp = async() => {
    const API = 'https://jsonplaceholder.typicode.com/posts'
    const res = await fetch(API)
    const data= await res.json();

    return (
        <div>
            <h1 className='mb-10 text-4xl font-bold  '>Server Components</h1>
            <table style={{ border: "2px solid white", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={{ border: "2px solid white", padding: "8px" }}>Id</th>
                        <th style={{ border: "2px solid white", padding: "8px" }}>Title</th>
                        <th style={{ border: "2px solid white", padding: "8px" }}>Body Data</th>
                    </tr>
                </thead>
                <tbody>
                    {data ? data.map((curElem, index) => (
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

export default ServerComp