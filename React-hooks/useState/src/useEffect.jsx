import React, { useState } from "react";
import { useEffect } from "react";

export default function UseEffect(){
    const[count,setCount]=useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCount(prev=>prev + 1);
        },1000)
    },[count])
    return(
        <div>
            <h1>{count}</h1>
        </div>
    )
}