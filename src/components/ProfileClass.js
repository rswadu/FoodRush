import { useState } from "react";

 export const ProfileClass=(props)=>{
    const [count,setCount]=useState(0);
    // setCount(1);
     return (
            <>
            <p>THis is functional Component  </p>
            <p>name={props.name}</p>
            <p>count ={count}</p>
            <button onClick={()=>{
                setCount(1);
            }} >setCount</button>
            </>
            
        );
    };