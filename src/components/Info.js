import React from 'react'
import styled from "styled-components"

function Info() {
    return (
        <InfoWrapper>
            <div className="info">
                <div className="info__title">
                    <h1>About Me</h1>
                    <p>
                        Highly motivated, self-starting developer ever committed to continuous and never ending personal improvements. Designing and developing apps for business solutions, educational tutorial app, websites…Looking forward to rubbing minds with like great minds by working on a large scale in a corporate environment.
                    </p>
                </div>
                <button>My Resume</button>
                <button>Contact Me</button>

            </div>
        </InfoWrapper>

    )
}

export default Info

const InfoWrapper = styled.div` 
.info__title p{
text-align: justify;
font-size: 18px;
}
.info button{
background-color: transparent;
box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.3);
font-size: 22px;
background-color: var();
padding: 6px;
margin: 6px;
border-radius: 10px;
}
.info button:hover{
    background-color: transparent;
    box-shadow: 7px 10px 5px 0 rgba(0, 0, 0, 0.3);
    color: darkgray;
    font-weight: bolder;
    color: var(--peimaryColor);

}

`