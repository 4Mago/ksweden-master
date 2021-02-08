import React from 'react'
import styled from 'styled-components'
import sanityClient from '../../Client'
import imageUrlBuilder from '@sanity/image-url'


const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}
const Cont = styled.div`
    margin-top: 100px;
    width: 80%;
    min-height: 45vh;
    height: auto
    text-align: left;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media only screen and (max-width: 800px){
    
        width: 90%;
    }
`
const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.2);
`
const Title = styled.h1`
    font-size: 52px;
    margin-left: 5%;
    color: white;
    width: 50%;
    position: relative;
    z-index: 2;
    line-height: 1em;
    @media only screen and (max-width: 800px){
        font-size:32px;
        width: 80%;
    }
`


const ArticleThumbnail = ({ imageDeets }) => {
    return (
        <Cont style={{backgroundImage: `url(${urlFor(imageDeets.focusedThumbnail).url()})`}}>
            <Overlay/>
            <Title>{imageDeets.titel}</Title>
          
        </Cont>
    )
}

export default ArticleThumbnail
