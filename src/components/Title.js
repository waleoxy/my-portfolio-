import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const pVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeIn",
    },
  },
};

function Title({ greeting, intro, jobTitle }) {
  return (
    <TitleWrapper>
      <div className="container__title">
        <div className="title">
          <motion.p2 variants={pVariants} initial="hidden" animate="visible">
            {greeting}
          </motion.p2>
          <motion.p1 variants={pVariants} initial="hidden" animate="visible">
            {intro}
          </motion.p1>
          <motion.p3
            initial={{ x: "100vw" }}
            animate={{
              x: 0,
              transition: {
                delay: 2.5,
                duration: 3,
                type: "spring",
              },
            }}>
            {jobTitle}
          </motion.p3>
        </div>
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
  padding-left: 200px;
  padding-top: 70px;
  .title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 50px;
    height: 100%;
    width: 100%;
  }
  .title p2 {
    font-weight: 600;
    font-size: 64px;
    font-family: "open Sans", "Gill Sans MT", "Trebuchet MS", sans-serif;
  }
  .title p1 {
    font-weight: 900;
    color: #02ff6f;
    font-size: 106px;
    font-family: "open Sans", "Gill Sans MT", "Trebuchet MS", sans-serif;
    line-height: 96px;
    padding-right: 96px;
    width: max-content;
    animation-duration: 9s;
    animation-name: fadein;
  }
  /* 
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
  } */
  .title p3 {
    font-weight: 600;
    margin-top: 15px;
    font-size: 52px;
    padding-right: 98px;
    font-family: "open Sans", "Gill Sans MT", "Trebuchet MS", sans-serif;
    animation-duration: 5s;
    animation-name: slidein;
  }
`;
