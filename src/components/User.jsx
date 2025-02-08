import React from "react";
import { useState } from "react";


const User = (props) =>{
    const[count,setCount]=useState(0);
    const{name,location,age}=props?.userinfo;
    return(
        <div>
            <div className="user-cards">
                <h1>Count : {count}</h1>
                <button onClick={()=>{
                    setCount(count+1)
                }}>Click me</button>
                <h3>Name:{name}</h3>
                <h3>Location:{location}</h3>
                <h3>Age:{age}</h3>
            </div>
        </div>
    )
}

export default User;
