import React from 'react'
import styled from 'styled-components'
import sanityClient from '../../Client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}



const StyledHeaderImage = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: relative;   
    @media only screen and (max-width: 800px){
        height: 70vh;
    }
`

const Thumbnail = styled.div`
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    @media only screen and (max-width: 800px){
        height: 70vh
    }
`
const Title = styled.h1`
    color: ${({theme}) => theme.secondaryLight};
    padding-left: 6rem; 
    width: 70%;
    max-width: 700px;
    height: auto;
    text-align: left;
    font-size: 64px;
    z-index: 1;
    @media screen and (max-width: 800px){
        font-size: 42px;
        width: 80%;
    }
    @media screen and (max-width: 500px){
        font-size: 22px;
        width: 80%;
        padding-left: 3.5rem; 
    }
    @media screen and (max-width: 350px){
        font-size: 18px;
        width: 80%;
        padding-left: 3.5rem; 
    }
`
const Overlay = styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.3);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    @media only screen and (max-width: 800px){
        height: 70vh
    }
`

const HeaderImage = ({imageDeets}) => {
    return (
       
        <StyledHeaderImage>
           <Thumbnail style={{backgroundImage:`url(${urlFor(imageDeets.thumbnail).url()})`}}/> 
           <Overlay />
           <Title>{imageDeets.titel}</Title>
        </StyledHeaderImage>
        
    )
}

export default HeaderImage
