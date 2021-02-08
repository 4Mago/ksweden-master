import React from 'react'
import styled from 'styled-components'

const JuiceCont = styled.div`
 
`

const Contact = styled.button`
    background: rgba(255,255,255,0.7);
    border: gray 1px solid;
    cursor: pointer;
    width: 135px;
    height: 35px;
    font-size: 14px;
    
`
const Link = styled.a``
const VetaMer = () => {
    return (
        <JuiceCont>
            <Link href="mailto:info@passacon.se">
                <Contact>
                    Vill du veta mer?
                </Contact>
            </Link>
            
        </JuiceCont>
    )
}

export default VetaMer