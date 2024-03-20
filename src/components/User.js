
import { useState } from "react";

const User = ({name}) => {

  const [count,setCount] = useState(1);

  return ( 
    <div className="user-card">
      <h1>Count : {count}</h1>
      <h1>Name : {name}</h1>
      <h2>City : Bhopal</h2>
      <h2>Age : 22</h2>
      <button onClick={()=>{
        setCount(count+1)
      }}>Add Count</button>
    </div>
  )
}

export default User;
