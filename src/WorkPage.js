import React from 'react';
import Work from './components/Work';
import styled from "styled-components";
import { items } from "./context/myProjectList";

function WorkPage() {
    return (
        <WorkPageWrapper>
            <div className="container">
                <div className="projectspage_title">
                    <h1>My Projects</h1>
                </div>
                <div className="row py-5">
                    {items.map(item => (
                        <Work
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            projectUrl={item.projectUrl}
                        />
                    )
                    )}
                </div>



            </div>

        </WorkPageWrapper>
    )
}

export default WorkPage

const WorkPageWrapper = styled.div` 
background: var(--lightGrey);;
.projectspage_title{
    margin-top: 50px;
    font-size: 26px;
    font-family: "Open sans";
    text-align: center;
}


`