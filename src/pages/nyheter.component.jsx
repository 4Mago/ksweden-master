import React from 'react'
import styled from 'styled-components'
import ArticleContainer from '../components/article-container/article-container.component'

const NyhetContainer = styled.div`
    margin-top: 100px;
    text-align: left;
    margin-bottom: 100px;
    position:relative;
    height: auto;
    @media screen and (max-width: 700px){
        margin-top: 0;
    }
    
`

const Nyheter = ({nyheter}) => {
    
    return (
        <NyhetContainer>
             <ArticleContainer articles={nyheter} />
        </NyhetContainer>
           
    )
}

export default Nyheter
