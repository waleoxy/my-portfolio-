import React from "react";
import { linkIcons } from "../context/linkIconsData";
import styled from "styled-components";

function Title({ greeting, intro, jobTitle }) {
  return (
    <TitleWrapper>
      <div className="container__title">
        <div className="title">
          <p2>{greeting}</p2>
          <p1>{intro}</p1>
          <p3>{jobTitle}</p3>
        </div>
        {/* <div className="icons">
          {linkIcons.map((linkIcon) => (
            <a key={linkIcon.id} href={linkIcon.url}>
              {linkIcon.icon}
            </a>
          ))}
        </div> */}
      </div>
    </TitleWrapper>
  );
}

export default Title;

const TitleWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding-left: 220px;
  padding-top: 98px;
  .title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 65px;
    height: 100%;
    width: 100%;
  }
  .title p2 {
    font-weight: 600;
    font-size: 68px;
    font-family: "open Sans", "Gill Sans MT", "Trebuchet MS", sans-serif;
  }
  .title p1 {
    font-weight: 600;
    color: #02ff6a;
    font-size: 110px;
    font-family: "open Sans", "Gill Sans MT", "Trebuchet MS", sans-serif;
    line-height: 96px;
    padding-right: 96px;
    width: max-content;
    animation-duration: 9s;
    animation-name: fadein;

    /* transition: var(--mainTransition); */
    /* transform: translateX(30px, 20px); */
  }

  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 100%;
    }
    to {
      margin-left: 0%;
      width: 100%;
    }
  }
  @keyframes fadein {
    from {
      opacity: 0;
      width: 100%;
    }

    30% {
      opacity: 0.3;
      width: 100%;
    }
    60% {
      opacity: 0.6;
      width: 100%;
    }

    to {
      opacity: 1;
      width: 100%;
    }
  }
  .title p3 {
    font-weight: 600;
    margin-top: 15px;
    font-size: 60px;
    padding-right: 55px;
    font-family: "open Sans", "Gill Sans MT", "Trebuchet MS", sans-serif;
    animation-duration: 5s;
    animation-name: slidein;
  }
`;
