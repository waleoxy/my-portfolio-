import React from 'react';
import Work from './components/Work';
import styled from "styled-components";
import { items } from "./context/myProjectList";

function WorkPage() {
    return (
        <WorkPageWrapper>
            <div>
                <h1>My Projects</h1>
            </div>
            {console.log("items", items)}
            <div className="project__list">
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



        </WorkPageWrapper>
    )
}

export default WorkPage

const WorkPageWrapper = styled.div` 
display: flex;
flex-direction: column;
align-items: center;

.project__list{
display: grid;
grid-template-columns: auto auto auto;
grid-column-gap: 35px;

}

`