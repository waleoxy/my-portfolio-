import React from 'react';
import { linkIcons } from "../context/linkIconsData";
import styled from "styled-components";

function ContactInfo() {
    return (
        <ContactInfoWrapper>

            <div className="row">
                <div className="col-12">
                    <h2 className="text-title">contact info</h2>
                    <div className="title-underline" />
                    {linkIcons.map(linkIcon => (
                        <div className="linkIcon">
                            {linkIcon.icon}
                            {linkIcon.url ?
                                <a href={linkIcon.url}><p>{linkIcon.text}</p></a> : <p>{linkIcon.text}</p>
                            }
                        </div>
                    ))}
                </div>
            </div>
        </ContactInfoWrapper>
    )
}

export default ContactInfo

const ContactInfoWrapper = styled.div` 

.linkIcon{
    margin-top: 8px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    >a{
        margin-left: 5px;
        text-decoration:none;
        font-size: large;
    }
   
}
`