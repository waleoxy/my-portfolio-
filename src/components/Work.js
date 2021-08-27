import React from 'react';
import styled from "styled-components";
import Title from './Title';

function Work({ image, title, id, projectUrl }) {
    {/* const handleDemoClicked = (projectUrl) => {

    }*/}

    return (
        <WorkWrapper className="col-10 mx-auto col-sm-8 col-md-6 col-lg-4 my-3">
            <div className="card">
                <div className="image-container">
                    <img
                        className="card-img-top p-5 mr-2"
                        src={image}
                        style={{ height: "320px", width: "350px" }}
                        alt="project imsge"
                    />
                    <div className="demo">
                        <a href={projectUrl}>
                            <button>
                                Demo
                             </button>
                        </a>
                    </div>

                </div>

                <div className="work__title">
                    <h5>{title}</h5>
                </div>

            </div>

        </WorkWrapper>
    )
}

export default Work

const WorkWrapper = styled.div` 

.card {
    box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.3);
    transition:all 0,3s ease-in-out;
    height: 100%;
   
}
.card:hover{
    box-shadow: 7px 10px 5px 0 rgba(0, 0, 0, 0.5);
    cursor: pointer;
}
.card-img-top{
    transition: all 0.3s ease-out;
    border-radius: 25px;
    object-fit: cover;
}
.card:hover .card-img-top{
    transform: scale(1.15);
    opacity: 0.2;
}
.image-container{
    position: relative;
}
.demo{
    box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease-out;
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    >a >button{
        background-color: transparent;
        box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.3);
        color: black;
        font-weight: bold;
        font-size: small;
    }
    >button:hover{
        background-color: transparent;
        box-shadow: 7px 10px 5px 0 rgba(0, 0, 0, 0.3);
        color: darkgray;
        font-weight: bolder;
        cursor: pointer;
    }
}
.work__title{
    font-weight: bold;
    letter-spacing:2px;
    text-transform: uppercase;
    text-align: center;
}
`