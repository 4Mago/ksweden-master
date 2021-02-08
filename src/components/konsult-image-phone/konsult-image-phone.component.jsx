import React from 'react'
import { Link } from 'react-router-dom'
import imageUrlBuilder from '@sanity/image-url'
import styled from 'styled-components'
import sanityClient from '../../Client'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}


const StyledLink = styled(Link)`
width: 100%;
max-width: 350px;
height: 450px;
background-repeat: no-repeat;
background-size: cover;
cursor: pointer;
@media only screen and (max-width: 480px){
  height: 350px;
  width: 80%;
}
`
const ItemCont = styled.div`
    
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer
   
      width: 100%;
      height: 100%;
    
    `
const KonsultImagePhone = ({konsult}) => {
    return (
        <StyledLink className="phone"  to={`/konsult/${konsult.namn}`}>
          <ItemCont style={{backgroundImage: `url(${urlFor(konsult.bild).url()})`}}></ItemCont>
       </StyledLink>
    )
}

export default KonsultImagePhone
