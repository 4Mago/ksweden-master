import React from 'react'
import styled from 'styled-components'
import {Link } from 'react-router-dom'
const FooterCont = styled.div`
    width 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 70px;
    background: rgba(167, 218, 229,0.6);
    position: absolute;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    padding: 0 7%;
    z-index: 2;
    a {
        text-decoration: none;
        color: black;
    }
`
const FooterItem = styled.div`
    margin: 0 5px;
    img {
        width: 25px;
    }
`

const Footer = () => {
    return (
        <FooterCont>
            <FooterItem>
                <a href="https://www.linkedin.com/company/2868236?trk=tyah&trkInfo=tarId:1411567075903,tas:passacon,idx:1-1-1">
                    <img alt="linkedin" src="/linked.svg" />
                </a>
            </FooterItem>
            <FooterItem>
                <Link to="./integritets-policy">
                    integritetspolicy
                </Link>
                </FooterItem>
        </FooterCont>
    )
}

export default Footer
