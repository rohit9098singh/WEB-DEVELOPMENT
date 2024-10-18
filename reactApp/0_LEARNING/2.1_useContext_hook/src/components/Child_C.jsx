import React,{useContext} from 'react'
import {userContext} from "../App"

function Child_C() {
    const user=useContext(userContext);
  return (
    <div>
        {user.name}
    </div>
  )
}

export default Child_C