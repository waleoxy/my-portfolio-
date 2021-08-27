import React from 'react'
import styled from "styled-components"

function Info() {
    return (
        <InfoWrapper>
            <div className="info">
                <div className="info__title">
                    <h1>About Me</h1>
                    <p>
                        I am Jhone Deo Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever It has survived not only five centuries,
                        but also the leap into electronic but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with
                        the release of Letraset sheets containing
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