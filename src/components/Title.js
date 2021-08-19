import React from 'react'
import { linkIcons } from "../context/linkIcons";
import styled from "styled-components"


function Title({ greeting, intro, jobTitle }) {

    return (
        <TitleWrapper>
            <div className="container__title">
                {/*intro*/}
                <div className="title">
                    <p1>{greeting}</p1>
                    <p2>{intro}</p2>
                    <p3>{jobTitle}</p3>
                </div>
                <div className="icons">
                    {linkIcons.map(linkIcon => {
                        <a key={linkIcon.id} href={linkIcon.url}>
                            {linkIcon.icon}
                        }
                    </a>
                    }
                    )}
                </div>
            </div>
        </TitleWrapper>
    )
}

export default Title

const TitleWrapper = styled.div`

.title{
    display: flex;
    flex-direction: column;
    height: 200px;
    width: 38vw;
    margin-top: 22px;
   
    
}
.title p1{
    font-weight: normal;
    font-size: 26px;
    color: var(--mainWhite);
    text-transform: uppercase;
    margin: 8px;
}
.title p2{
    font-weight: normal;
    font-size: 40px;
    color: var(--mainWhite);
    font-family: var(--fontFamily);
    font-weight: bold;
    font-stretch: ultra-condensed;
    
  
}
.title p3{
    font-weight: normal;
    margin-top: 6px;
    font-stretch: ultra-condensed;
    font-size: 23px;
    font-weight: 600;
    font-family: var(--fontFamily);
    color: var(--mainWhite);
  
}


`