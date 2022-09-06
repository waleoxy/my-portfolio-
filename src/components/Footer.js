import React from "react";
import styled from "styled-components";
import { linkIcons } from "../context/linkIconsData";

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="container py-2">
        <div className="row d-flex justify-content-start items-center mt-3">
          <div className="col-md-6">
            <p className="text text-capitalize ">
              copyright &copy; Olawale Otubu
              {new Date().getFullYear()} all rights reserved{""}
            </p>
          </div>
          <div className="col-md-6  d-flex justify-content-start gap-3">
            {linkIcons
              .filter((item) => item.id !== 1 && item.id !== 2 && item.id !== 3)
              .map((item) => (
                <a href={item.url} key={item.id}>
                  {item.icon}
                </a>
              ))}
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primaryRGBA);
  color: var(--lightgrey);
  .text {
    font-size: 1rem;
  }
  .icon {
    font-size: 1.3rem;
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;
