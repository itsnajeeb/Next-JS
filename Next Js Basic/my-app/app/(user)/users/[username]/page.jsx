import React from 'react'

const SingpleProfile = async(props) => {
  let user = await props.params
  
  return (
    <div>
      <h1>User Profile</h1>
      <p>Your UserName : {user.username}</p>

    </div>
  )
}

export default SingpleProfile