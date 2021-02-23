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
  text-align: center;
  text-decoration: none;
  @media only screen and (max-width: 840px) {
    grid-template-columns: 1fr;
    max-width: 100%;
    padding: 2.5% 0;
  }
`

const Title = styled.h2`
  font-size: 44px;
  padding: 13px 0;
  margin: 0;
  @media screen and (max-width: 800px) {
    font-size: 36px;
  }
`

const ServicesImage = styled.img`
  width: 95%;
  max-height: 220px;
  object-fit: cover;
  height: 100%;
  border-radius: 4.4px;
`

const Desc = styled(PortableText)`
  width: 95%;
  max-width: 800px;
  height: 120px;
  padding: 0;
  overflow: hidden;
`

const DescDiv = styled.div`
  height: 120px;
  width: 100%;
  z-index: 9;
  background-image: linear-gradient(to bottom, transparent, white);
  position: relative;
  bottom: 85px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 0;
  padding: 0;
  cursor: pointer;
`

const DescText = styled.a`
  border: solid black;
  border-width: 1px;
  background-color: white;
  border-radius: 8px;
  padding: 5px 7px;
  cursor: pointer;
`

const Services = ({ services }) => {
  return (
    <TjanstCont id="services">
      {services.length
        ? services.map((servicesItem, idx) => (
            <div key={idx}>
              <Title>{servicesItem.title}</Title>
              <ServicesImage src={urlFor(servicesItem.thumbnail).url()} />
              <Desc blocks={servicesItem.description} />
              <DescDiv>
                <DescText>Läs mer</DescText>
              </DescDiv>
            </div>
          ))
        : null}
    </TjanstCont>
  )
}

export default Services
