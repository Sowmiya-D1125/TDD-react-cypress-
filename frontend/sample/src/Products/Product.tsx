import React, { useEffect, useState } from "react";

const Product = ()=>{
    const [isVisible, setIsVisible] = useState(false);
    useEffect(()=>{
    //     fetch(`${window.location.origin}/todos.json`)
    // .then(response => response.json())
    // .catch(error => console.log(error))
    },[])
    return(
        <div>
            <h1>Products List</h1>

            <button onClick={()=>setIsVisible(!isVisible)}>show</button>
            {isVisible?
            <h4>Hi, Welcome to Our page</h4>:''}
        </div>
    )
}
export default Product;