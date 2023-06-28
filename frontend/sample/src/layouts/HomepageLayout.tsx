import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
function Homepagelayout(){
    return(
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    )
}
export default Homepagelayout;