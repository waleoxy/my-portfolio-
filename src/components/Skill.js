import React from 'react'
import styled from "styled-components";

function Skill({ id, icon, title, text }) {
    return (
        <SkillWrapper>
            <div className="skills-icon">
                {icon}
            </div>
            <div className="mt-3 text-capitalize">
                <h5>{title}</h5>
            </div>
            <div className="mt-3">
                <h6>{text}</h6>
            </div>
        </SkillWrapper>
    )
}

export default Skill

const SkillWrapper = styled.div` 

.skills-icon{
    font-size: 3.5rem;
    color:var(--primaryColor);
}
`