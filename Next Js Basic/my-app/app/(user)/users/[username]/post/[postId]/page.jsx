
"use client"
import React, { use } from 'react'

const singleProfilePost =  (props) => {
    let user =  use(props.params);
    // console.log(user);
    

    return (
        <div>
            <p>Username : {user.username}</p>
            <p>Id : {user.postId}</p>
        </div>
    )
}
export default singleProfilePost