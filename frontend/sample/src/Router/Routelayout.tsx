import React from "react";
import { Route, Routes, Link, useLocation, Navigate } from "react-router-dom"
import Homepagelayout from "../layouts/HomepageLayout";
import Login from "../Login/Login";
import Products from "../pages/Products/Products";
import User from "../pages/User/User";
import SampleComponents from "../SampleTestCases/SampletestcaseComponents";
import Feedback from "../pages/Feedbacks/Feedback";
import ObjectSearch from "../SampleTestCases/ObjectSearch";
import Receipe from "../pages/Receipes/Receipe";
 const RouteLayout = () => {
    return (
        <Routes>
            <Route  path="/" element={<Login />} />
            <Route  path="/sample" element={<SampleComponents />} />
            <Route element={
                <Authentication redirectTo="/">
                    <Homepagelayout />
                </Authentication>}
            >
                <Route path="/user" element={<User />} />
                <Route path="/product" element={<Products/>}/>
                <Route path="/receipe" element={<Receipe/>}/>

                {/* <Route path="/feedback" element={<Feedback/>}/> */}
                <Route path ="/object" element={ <ObjectSearch/> }/>
            </Route>
        </Routes>
    )
}

function Authentication({ children, redirectTo }:any) {
    const prevRoute = useLocation();

    var userDetails = localStorage.getItem('token') !== null ? localStorage.getItem('token') : null;
    var isAuthenticated = userDetails !== null && JSON.parse(userDetails).accessKey !== null ? true : false;
   
    return isAuthenticated ? children : <Navigate to={redirectTo} state={{ from: prevRoute }} />;
}
export default RouteLayout;