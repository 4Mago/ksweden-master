import React from "react"
import styled from "styled-components"
import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "../Client"
import PortableText from "@sanity/block-content-to-react"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const TjanstCont = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  box-sizing: border-box;
  padding: 2.5% 0;
  text-align: start;
  text-decoration: none;
  @media only screen and (max-width: 840px) {
    grid-template-columns: 1fr;
    max-width: 100%;
    padding: 2.5% 0;
  }
`

const Title = styled.h2`
  font-size: 38px;
  padding: 4px 0;
  margin: 0;
  @media screen and (max-width: 800px) {
    font-size: 36px;
  }
`

const ServicesImage = styled.img`
  width: 100%;
  max-height: 220px;
  object-fit: cover;
  height: 100%;
`

const Desc = styled(PortableText)`
  width: 95%;
  max-width: 800px;
  height: 95px;
  padding: 0;
  overflow: hidden;
`

const DescDiv = styled.div`
  height: 100px;
  width: 100%;
  z-index: 9;
`

const DescText = styled.p`
  height: 75px;
`

const Services = ({ services }) => {
  console.log(services)
  return (
    <TjanstCont id="services">
      {services.length
        ? services.map((servicesItem, idx) => (
            <div key={idx}>
              <ServicesImage src={urlFor(servicesItem.thumbnail).url()} />
              <Title>{servicesItem.title}</Title>
              <Desc blocks={servicesItem.description} />
            </div>
          ))
        : null}
    </TjanstCont>
  )
}

export default Services
