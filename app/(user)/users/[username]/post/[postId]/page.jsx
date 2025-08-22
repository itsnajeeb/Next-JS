
import React from 'react'

const singleProfilePost = async (props) => {
    let user = await props.params

    return (
        <div>
            <p>Username : {user.username}</p>
            <p>Id : {user.postId}</p>
        </div>
    )
}
export default singleProfilePost