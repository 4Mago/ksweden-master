import React from 'react'
import styled from 'styled-components'
import sanityClient from '../../Client'
import imageUrlBuilder from '@sanity/image-url'
import PortableText from '@sanity/block-content-to-react'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const HeaderCont = styled.div`
    margin-top: 50px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items:flex-start;
    flex-flow: column;
    min-height: 50vh;
    height: auto;
    width: 100%;
    color: white;
   
   
`

const Thumbnail = styled.div`
    width: 100%;
    min-height: 50vh;
    height: auto;
    background-repeat: no-repeat;
    background-size: cover;
    left: 0;
    top: 0;
    display: flex;
    padding: 3%;
    box-sizing: border-box;
    justify-content: flex-start;
    align-items: flex-start;
    flex-flow: column;
    text-align: left;
    z-index: -2;
    
`


const Title = styled.h2`
    color: white;
    font-size: 48px;
    margin: 0;
`

const Desc = styled(PortableText)`
    
`

const Overlay = styled.div`
    width: 100%;
    min-height: 50vh;
    height: 100%;
    background: rgba(0,0,0,0.3);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`
const TextCont = styled.div`
    padding: 0 40% 0 0;
    @media only screen and (max-width: 600px){
        padding-right: 20%;
    }

`

const RollHeader = ({ headerImg, headerTitle, headerDesc }) => {
    return (
        <HeaderCont>
          <Thumbnail style={{backgroundImage:`url(${urlFor(headerImg).url()})`}}> 
          <Overlay />
          <Title>{headerTitle}</Title>
          <TextCont>
          <Desc blocks={headerDesc}/>
          </TextCont>
            </Thumbnail>
        </HeaderCont>
    )
}

export default RollHeader
