import React from 'react';
import Skill from './components/Skill';
import { skills } from "./context/skillsSetData";
import styled from "styled-components"

function SkillsSetPage() {
    return (
        <SkillsSetPageWrapper>
            <div className="workspage-title my-5 py-5" id="skills">
                <h1>My Skills Set</h1>
            </div>
            <div className="work-card row">
                {skills.map(item => (
                    <div className="col-10 mx auto col-sm-6 col-md-4
                    text-center flex justify-center my-3">
                        <Skill
                            key={item.id}
                            icon={item.icon}
                            title={item.title}
                            text={item.text}
                        />
                    </div>
                ))}
            </div>

        </SkillsSetPageWrapper>
    )
}

export default SkillsSetPage

const SkillsSetPageWrapper = styled.div`

background: var(--lightGrey);
.work-card{
    justify-content: center;
}
.workspage-title{
    text-align: center;
}

`