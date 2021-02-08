import React from 'react'
import styled from 'styled-components'
import sanityClient from '../../Client'
import imageUrlBuilder from '@sanity/image-url'
import { Link } from 'react-router-dom'


const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}
const Thumbnail = styled.div`
    width 100%;
    height: 250px;
    background-repeat: no-repeat;
    background-size: cover;
`
const ArticleLink = styled(Link)`
    text-decoration: none;
    color: black;
`

const ArticleText = styled.p`
    font-size: 18px;
    color: black;
    text-decoration: none;
    text-align: left;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const Arrow = styled.img`
    width: 15px;
    height: auto;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    margin-bottom: -2.8px;
    margin-left: 5px;
`
const LinkContainer = styled.div`
    width: 100%;

`

const ArticleThumbnail = ({article}) => {
    return (
        <ArticleLink to={`/artikel/${article.titel}`}>
             <Thumbnail style={{backgroundImage: `url(${urlFor(article.thumbnail).url()})`}}/>
             <LinkContainer>
             <ArticleText ><span>{article.titel}<Arrow alt="arrow" src="left-arrow.svg" /></span>
             </ArticleText>
             </LinkContainer>
        </ArticleLink>
    )
}

export default ArticleThumbnail
