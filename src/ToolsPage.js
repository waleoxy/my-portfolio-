import React from 'react'
import styled from "styled-components";
import Tool from './components/Tool';
import { tools } from "./context/toolsData";

function ToolsPage() {
    console.log("tools", tools)
    return (
        <ToolsPageWrapper>
            <div className="workspage-title">
                <h1>Tools Set</h1>
            </div>
            <div className="work-card row">

                {tools.map(item => (
                    <div className="col-10 mx-auto col-sm-6 col-md-2 
                    text-center flex justify-center my-3">
                        <Tool
                            key={item.id}
                            icon={item.icon}
                            title={item.title}
                            text={item.text}
                        />
                    </div>
                ))}
            </div>

        </ToolsPageWrapper>
    )
}

export default ToolsPage


const ToolsPageWrapper = styled.div`
.work-card{
    background: var(--mainWhite);
    justify-content: center;
}
.workspage-title{
    text-align: center;
}

`