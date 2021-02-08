import React from 'react'
import styled from 'styled-components'
import sanityClient from '../../Client'
import imageUrlBuilder from '@sanity/image-url'
import PortableText from '@sanity/block-content-to-react'
const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const ItemCont = styled.div`
    background: rgba(255,255,255,1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80vh !important;
    width: 100%;

`
const Image = styled.div`
    width: 40%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

`
const Text = styled(PortableText)`
    text-align: left;
   

`

const TextContainer = styled.div`
    width: 60%;
    text-align: left;
    padding: 0 5%;
    @media only screen and (max-width: 1200px) {
        padding: 0 1%;
    }
`

const SliderItem = ({konsult}) => {
    return (
        <ItemCont>
            <TextContainer>
                <Text blocks={konsult.beskrivning}/>
            </TextContainer>
            <Image style={{backgroundImage:`url(${urlFor(konsult.bild).url()}`}} />
        </ItemCont>
    )
}

export default SliderItem
