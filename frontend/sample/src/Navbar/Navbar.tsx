
import {  Link, useLocation } from "react-router-dom";


import React, { InputHTMLAttributes, useState } from "react";
import { NavbarContainer, LinkWrapper, StyledLink, StyledButton, MenuButton, styles, MenuItemDiv } from './Navbar.styles';
import { navbarItems } from './NavbarItems';

const Navbar = () => {
    const { pathname } = useLocation();
    const [showMenu, setShowMenu] = useState(false);
const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
}
    return (
        <NavbarContainer>
            <h1 data-testid="appname" style={{ marginRight: "auto" }}>Shopee</h1>
            <LinkWrapper data-testid="menu">
                {navbarItems.map((item) => {
                    return (
                        <StyledLink data-testid={item.name} style={{ borderBottom: `${pathname === item.to ? "2px solid black" : "none"}` }} to={item.to}>{item.name}</StyledLink>
                    )
                })}


            </LinkWrapper>
            <StyledButton data-testid="logoutBtn" onClick={handleLogout}>Logout</StyledButton>

            {/* <StyledButton>Create Account</StyledButton> */}
            <MenuButton isActive={true}
            //  onClick={() => setShowMenu(!showMenu)}
             >&#9776;
            {/* {showMenu ? */}
                <MenuItemDiv
                //  style={styles.wrapper}
                >
                    {navbarItems.map((item) => {
                    return (
                        <StyledLink style={{ background: `${pathname === item.to ? "grey" : ""}` }} to={item.to}>{item.name}</StyledLink>
                    )
                })}
                  
                </MenuItemDiv>
                 {/* : ""} */}
                 </MenuButton>

        </NavbarContainer>
    )
}
export default Navbar;