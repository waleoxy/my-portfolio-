import React, { useState } from 'react';
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { linkData } from "../context/LinkData"

function Navbar() {
    return (
        <NavbarWrapper>
            <div className="navbar">

                <ul className="navbar__links">
                    {linkData.map((link) =>
                        (<li key={link.id} className="navbar__link">
                            <Link smooth to={link.path} >
                                {link.text}
                            </Link>

                        </li>)
                    )}
                </ul>
            </div>
        </NavbarWrapper>
    )
}

export default Navbar

const NavbarWrapper = styled.nav`
position: -webkit-sticky;
position: sticky;
background-color: var(--lightGrey);
margin-top: 0px;
margin-bottom: 20px;
z-index: 1;
top: 0;
height: 60px;
align-items: center;


.navbar__links{
   display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 5rem;
    list-style: none;
 
    
}
.navbar__link{
   margin-right: 5rem;
   margin-top: 10px;
   font-size: 20px;
   font-style: italic;
   text-transform: capitalize;
 
}
@media (max-width:925px){ 
    .navbar__links{
        visibility: hidden;
        
    }
}



`