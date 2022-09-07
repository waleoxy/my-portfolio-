import React, { useState } from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { linkData } from "../context/LinkData";

function Navbar() {
  return (
    <NavbarWrapper>
      <button
        style={{
          marginLeft: "20px",
          outline: "none",
          padding: "6px 12px",
          border: "0 solid grey",
          color: "teal",
          fontSize: "16px",
          fontWeight: "normal",
          fontFamily: "sans-serif",
          borderRadius: "8px",
          boxShadow: "3px 1px teal",
        }}>
        <Link smooth to="#" style={{ textDecoration: "none", color: "green" }}>
          waleoxy
        </Link>
      </button>
      <ul className="navbar__links">
        {linkData.map((link) => (
          <li key={link.id} className="navbar__link">
            <Link className="link" smooth to={link.path}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </NavbarWrapper>
  );
}

export default Navbar;

const NavbarWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--lightGrey);
  margin-top: 0px;
  z-index: 1;
  top: 0;
  height: 60px;
  align-items: center;

  .navbar__links {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
    text-decoration: none;
  }
  .navbar__link {
    margin-right: 2rem;
    margin-top: 20px;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
  }
  .link {
    text-decoration: none;
    color: gray;
    transition: "all 0.02s ease-out ";
    word-spacing: 2px;
  }
  .link:hover {
    text-decoration: underline;
    color: green;
  }

  @media (max-width: 925px) {
    .navbar__links {
      visibility: hidden;
    }
  }
`;
