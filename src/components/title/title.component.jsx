import React from 'react'
import styled from 'styled-components'

const TitleCont = styled.div`
    width: 100%;
    text-align: left;
    margin-bottom: 55px;
`

const TitleText = styled.h2`
    font-size: 64px;
    margin-bottom: 2%;
    @media screen and (max-width: 800px){
        font-size: 36px;
    }
`

const Title = ({title}) => {
    return (
        <TitleCont>
            <TitleText>
                {title}
            </TitleText>
        </TitleCont>

    )
}

export default Title
