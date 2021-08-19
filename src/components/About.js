import React from 'react'
import styled from "styled-components";
import Info from './Info';
import portHomeBcg from "../images/portHomeBcg.jpg";


function About() {
    return (
        <AboutWrapper>
            <div className="aboutPage">
                <div className="aboutImg">
                    <img src={portHomeBcg} />
                </div>
                <div className="aboutInfo">
                    <Info />
                </div>
            </div>
        </AboutWrapper>
    )
}

export default About

const AboutWrapper = styled.div` 
width: 100%;
margin: auto;

.aboutPage{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: var(--mainWhite);
}
.aboutInfo{
width: 35vw;
margin-right: 6rem;
margin-top: 6rem;
}
.aboutImg{

    >img{
   margin-top: 6rem;
  height:65vh;
  width: 32vw;

    }
}



`