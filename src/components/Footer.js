import React from 'react';
import styled from "styled-components";

export default function Footer() {
    return (
        <FooterWrapper>
            <div className="container py-3">
                <div className="row">
                    <div className="col-md-6">
                        <p className="text text-capitalize">
                            copyright &copy; Olawale Otubu
                          {new Date().getFullYear()}
                            {" "}all rights reserved{""}
                        </p>
                    </div>
                    <div className="col-md=6  d-flex justify-content-between">
                        {/*{socialLinks.map(item => (
                            <a href={item.url} key={item.id}>
                                {item.icon}
                            </a>
))}*/}
                    </div>
                </div>
            </div>

        </FooterWrapper>
    );
}

const FooterWrapper = styled.footer`
position: sticky;
    background: var(--primaryRGBA);
    color: var(--mainWhite);
    .text{
        font-size: 1.2rem;
        color: var(--mainBlack);
    }
    .icon:hover{
        color: var(--primaryColor);
        cursor: pointer;
    }
`

