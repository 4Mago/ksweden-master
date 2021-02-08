import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import styled from 'styled-components'
import sanityClient from '../../Client'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}




const ItemCont = styled.div`
    width: 100%;
    max-width: 350px;
    height: 450px;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer
    `
const KonsultImage = ({konsult, clicked, slide, setSlide}) => {
    return (     
          <ItemCont className="desktop"
          onClick={() => {
           
            clicked({
            pointerEvents: 'auto',
            opacity: 1
        })
       setSlide(slide)}}
          style={{backgroundImage: `url(${urlFor(konsult.bild).url()})`}}></ItemCont>

    )
}

export default KonsultImage
