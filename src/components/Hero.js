import React from 'react';
import styled from "styled-components";
import portHomeImg from "../images/portHomeImg.JPG";



function Hero({ max, img, title, linkIcons, children }) {
    return (
        <HeroWrapper max={max} img={img}>
            <div className="banner">
                {children}
            </div>
        </HeroWrapper>
    )
}

export default Hero

const HeroWrapper = styled.div`
text-align: center;
display: flex;
align-items: center; 
justify-content: center;
min-height: ${props => (props.max ? "100vh" : "60vh")};
background: url(${props => props.img}) center/cover no-repeat;
background-clip: padding-box;


`
Hero.defaultProps = {
    img: portHomeImg
}