import React from 'react';
import styled from "styled-components";

function Tool({ id, icon, title, text }) {
    return (
        <ToolsWrapper>
            <div className="tools-icon">
                {icon}
            </div>
            <div className="mt-3 text-capitalize">
                <h5>{title}</h5>
            </div>
            <div className="mt-3">
                <h6>{text}</h6>
            </div>
        </ToolsWrapper>
    )
}

export default Tool

const ToolsWrapper = styled.div` 

.tools-icon{
    font-size: 3.5rem;
    color:var(--primaryColor);
}
`