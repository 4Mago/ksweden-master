import React from 'react'
import sanityClient from '../Client'
import styled from 'styled-components'
import imageUrlBuilder from '@sanity/image-url'
import PortableText from '@sanity/block-content-to-react'
import Title from '../components/title/title.component'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}
const OmOssCont = styled.div`
    width: 100%;
    height: auto;
    margin-top: 125px;
    text-align: left;
    box-sizing: border-box;

    margin-bottom: 100px;`

const Image = styled.img`
    width: 100%;
    height: auto;
    max-width: 1000px;
`
const ImageCont = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;    
`

const OmOssTitle = styled.h1`
    font-size: 64px;
    width: 400px;
    max-width: 80%;
    line-height: 0.9em;
    @media screen and (max-width: 800px){
        font-size: 36px;
    }
    @media screen and (max-width: 500px){
        font-size: 28px;
    }
    @media screen and (max-width: 400px){
        font-size: 22px;
    }

`
const Desc = styled(PortableText)`
    width: 100%;
    max-width: 800px
    `
const SecondDesc = styled(PortableText)`
    width: 100%;
   
    column-count: 2;
    margin-top: 0;
    & p:nth-child(1) {
        margin-top: 0;
    }
    @media screen and (max-width: 600px){
        column-count: 1;
    }

`
const SecondTitle = styled.h4`
    
`
const FaktaDiv = styled.div`
    width: 100%;
    max-width: 800px;
    background: #E9F4FA;
    padding: 5px 10px;
    box-sizing: border-box;
`

const OmOss = ({omOss}) => {
        console.log(omOss)

    return (
        <OmOssCont id="om-oss">
            <Title title="Om oss" />
            <ImageCont>
             <Image src={urlFor(omOss.bild).url()}/>
            </ImageCont>
            <OmOssTitle>{omOss.titel}</OmOssTitle>
            <Desc blocks={omOss.beskrivning} />
            <FaktaDiv>
                <SecondTitle>{omOss.andraTitel}</SecondTitle>
                <SecondDesc blocks={omOss.beskrivning2}/>
            </FaktaDiv>
           
        </OmOssCont>
    )
}

export default OmOss
