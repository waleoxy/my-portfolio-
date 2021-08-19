import React from 'react';
import styled from "styled-components";
import Title from './Title';

function Work({ image, title, id, projectUrl }) {
    return (
        <WorkWrapper>

            <div className="project">
                <img
                    className="project__image"
                    src={image}
                    alt="project imsge"
                />
                <span><button>Demo</button></span>
                <h3>{title}</h3>
            </div>

        </WorkWrapper>
    )
}

export default Work

const WorkWrapper = styled.div` 
max-width: 300px;
max-height: 350px;
object-fit: contain;
margin-top: 50px;
border: 1px solid;
.project{
    object-fit: contain;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

.project__image{
width: 100%;
max-height:80%;
}

`