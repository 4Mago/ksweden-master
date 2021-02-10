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

const Services = ({services}) => {
    
    return (
        <TjanstCont id="services">
            <Title title={'Våra tjänster'} />
            <ArticleContainer services={services} />
        </TjanstCont>
    )
}

export default Services
