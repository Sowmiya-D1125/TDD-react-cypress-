// div.navbar{
//     color:red;
// height:"70px";
// background-color:blue;
// top:"0";
// position:"sticky";
// display:"flex";
// justify-items:"center";
// align-items:"center"
// }
import {  Link } from "react-router-dom";
import { CSSProperties } from 'react';
import styled from 'styled-components';

interface menuProps {
  readonly isActive: boolean;
}

export const MenuItemDiv = styled.div`
    display: none;
    z-index: 999;
    height: auto;
    width: auto;
    top: 60;
    background: white;
    padding: 5;
    border: 1px solid grey;
    border-radius: 5px;
    box-shadow: 0px 1px 4px grey;
    
`
export const NavbarContainer = styled.div`
height:70px;
background:#e6e6e6;
top:0;
position:sticky;
display:flex;
    justify-content: flex-end;
    align-items: center;
    box-shadow: 0 1px 8px #ddd;
    padding:4px;
    z-index:3;
`;

export const LinkWrapper = styled.div`
align-items:center;
justify-content:center;
justify-items:center;
left:0;

@media (max-width: 600px) {
  display:none;
}

`
export const StyledLink = styled(Link)`
padding:6px;
text-decoration: none;

&:hover{
    color:#000066;
    transform: scale(1.2);
    background:#e6e6e6;

}
`
export interface StylesDictionary{
  [Key: string]: CSSProperties;
}

export const styles:StylesDictionary = {
  wrapper: {
    display: "none",
    flexDirection: "column",
    position: "absolute",
    zIndex: 999,
    height: "auto",
    width: "auto",
    top: 60,
    background: "grey",
    justifyItems: "center",
    alignItems: "center",
    padding: 5,
    border: "1px solid grey",
    borderRadius: "5px",
    boxShadow: "0px 1px 3px grey",
    
  }
};

export const StyledButton = styled.button`
position:relative;
padding:10px;
color:grey;
box-shadow: 0px 1px 3px grey;
border:none;
cursor:pointer;

@media (max-width: 600px) {
  display:none;
}
`

export const MenuButton = styled.button<menuProps>`
position:relative;
padding:10px;
display:none;
color:${(props) => (props.isActive?"red":"green")}
box-shadow: 0px 1px 3px grey;



@media (max-width: 600px) {
  display:block;
color:${(props) => (props.isActive?"red":"green")}

}
&:hover ${MenuItemDiv} {
  display: flex;
  flex-direction: column;
    position: absolute;
    z-index: 999;
    height: auto;
    width: auto;
    background: white;
    padding: 5;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 1px 4px grey;
    right:0
}
`

