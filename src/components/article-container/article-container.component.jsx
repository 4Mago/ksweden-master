import React from 'react'
import styled from 'styled-components'
import ArticleThumbnail from '../article-thumbnail/article-thumbnail.component'
import "animate.css/animate.min.css"

const StyledContainer = styled.div`
    width: 100%;
    display: grid;
    height: auto;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 100px;
    grid-gap: 2%;
    @media only screen and (max-width: 1100px){
        grid-template-columns: 1fr 1fr;
    }
    @media only screen and (max-width: 640px){
        grid-template-columns: 1fr ;
        grid-gap: 0;
    }
`

const ArticleContainer = ({articles}) => {


    return (
        <StyledContainer>
            {articles ? articles.map((article, id) =><ArticleThumbnail key={id} article={article} />) : null}
        </StyledContainer>
    )
}

export default ArticleContainer
