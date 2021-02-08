import React from 'react'
import styled from 'styled-components'

const JuiceCont = styled.div`
    text-align: left;
    width: 76%;
    margin-bottom: 100px;

`
const Text = styled.h3`
    font-weight: 400;
    font-size: 26px;

`
const Contact = styled.button`
    padding: 1% 2%;
    background: white;
    border: black 1px solid;
    cursor: pointer;
`
const Link = styled.a``

const Mer = () => {
    return (
        <JuiceCont>
            <Text>
                Vill du veta mer?
            </Text>
            <Link href="mailto:info@passacon.se">
                <Contact>
                    Ta kontakt med oss!
                </Contact>
            </Link>
            
        </JuiceCont>
    )
}

export default Mer
