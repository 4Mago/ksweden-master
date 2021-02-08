import React from 'react'
import styled from 'styled-components'
import sanityClient from '../../Client'
import imageUrlBuilder from '@sanity/image-url'


const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}
const StyledLogo = styled.img`
    width: 80%;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
    opacity: 0.4;
    margin: 0 15%;
`
const LogoCont = styled.div`
    display: flex;
    height: 100%;
    width: 80%;
    justify-content: center;
    align-items: center;
    margin 0 15%;
`

const ClientLogo = ({client}) => {
    return (
        <LogoCont>
             <StyledLogo src={urlFor(client.logga).url()}/>
        </LogoCont>
    )
}

export default ClientLogo
