import React, { useState } from "react";

export default function UseState(props){
    const[count,setCount]=useState(0);
    const[name,setName]=useState("");

    function setname(){
        return setName(props.name);
    }

    function incrementCount(){
        return setCount(prev=>prev+1);
    }
    return(
        <div>
            <button onClick={incrementCount}>click me</button>
            <h1>{count}</h1>
            <button onClick={setname}>click me to set name</button>
            {name}
        </div>

    )
}
