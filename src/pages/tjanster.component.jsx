import React from 'react'
import styled from 'styled-components'
import ArticleContainer from '../components/article-container/article-container.component'
import Title from '../components/title/title.component'

const TjanstCont = styled.div`
    margin-top: 100px;
    text-align: left;
    margin-bottom: 100px;
    position:relative;
    height: auto;
    
`

const Tjanster = ({tjanster}) => {
    
    return (
        <TjanstCont id="tjanster">
            <Title title={'Våra tjänster'} />
            <ArticleContainer articles={tjanster} />
        </TjanstCont>
    )
}

export default Tjanster
