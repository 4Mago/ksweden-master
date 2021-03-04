import React, { useRef } from "react"
import styled, { css } from "styled-components"
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
  margin-top: 5%;
  grid-gap: 2em;
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
const TitleCont = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 55px;
  
  @media screen and (max-width: 500px) {
    
    text-align: center;    
  }
`

const TitleText = styled.h1`
  font-size: 64px;
  margin-bottom: 2%;
  text-align: center;
  @media screen and (max-width: 800px) {
    font-size: 52px;
  }
  @media screen and (max-width: 400px) {
    font-size: 46px;
  }
`

const ItemContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Title = styled.p`
  font-size: 33px;
  padding: 15px 0;
  margin: 0;
  @media screen and (max-width: 800px) {
    font-size: 36px;
  }

`

const ServicesImage = styled.img`
  width: 90%;

  object-fit: cover;
  height: 220px;

  transition: all 0.5s ease-in-out;
  border-radius: 4.4px;
`

const ContDesc = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 120px;
  flex-flow: column;
  position: absolute;
  top: 220;
  margin-bottom: 10px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
`

const Desc = styled(PortableText)`
  width: 100%;
  max-width: 800px;
  box-sizing: border-box;
  padding: 0 10%;
  height: auto;
  position: relative;
  z-index: 1;
  transition: all 0.2s ease-in-out;

  ul {
    text-align: left;
    padding-left: 25%;
    list-style-position: inside;
  }
`

const Overlay = styled.div`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9;
  background-image: linear-gradient(to bottom, transparent, white);
  position: absolute;
  pointer-events: none;
  
`

const DescText = styled.a`
  border: solid black;
  border-width: 1px;
  background-color: white;
  border-radius: 8px;
  padding: 5px 7px;
  cursor: pointer;
`
const DescText2 = styled.a`
  border: solid black;
  border-width: 1px;
  background-color: white;
  border-radius: 8px;
  padding: 5px 7px;
  cursor: pointer;
  display: none;
`

const ReadMoreContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  transition: all 0.2s ease-in-out;
  min-height: 350px;

  @media screen and (max-width: 500px) {
    min-height: 400px;    
  }
`

const Services = ({ services }) => {
  // contDesc.style.overflow = 'default'
  // overlay.style.background = 'transparent'
  const readMore = (idx) => {
    document.getElementById(`content` + idx).style.cssText =
      "top: 0; height: 450px"
    document.getElementById(`overlay` + idx).style.cssText =
      "background-color: white; opacity: 0.85; z-index: 0;"
    document.getElementById("image" + idx).style.cssText = "height: 450px;"
    document.getElementById("readmore" + idx).style.cssText = "display: none;"
    document.getElementById("readless" + idx).style.cssText = "display: block;"
  }

  const readLess = (idx) => {
    document.getElementById(`content` + idx).style.cssText =
      "top: 220px; height: 120px"
    document.getElementById(`overlay` + idx).style.cssText =
      "background-color: linear-gradient(to bottom, transparent, white);"
    document.getElementById("image" + idx).style.cssText = "height: 220px;"
    document.getElementById("readmore" + idx).style.cssText = "display: block;"
    document.getElementById("readless" + idx).style.cssText = "display: none;"
  }

  return (
    <>
      <TitleCont id="Tjänster">
        <TitleText>Våra Tjänster</TitleText>
      </TitleCont>
      <TjanstCont id="services">
        {services.length
          ? services.map((servicesItem, idx) => (
              <ItemContainer key={idx}>
                <Title>{servicesItem.title}</Title>
                <ReadMoreContainer id={"readMore" + idx}>
                  <ServicesImage
                    id={"image" + idx}
                    src={urlFor(servicesItem.thumbnail).url()}
                  />
                  <ContDesc id={`content` + idx}>
                    <Overlay id={`overlay` + idx}  />
                    <Desc blocks={servicesItem.description} />
                  </ContDesc>
                </ReadMoreContainer>
                <DescText id={"readmore" + idx} onClick={() => readMore(idx)}>
                  Läs mer
                </DescText>
                <DescText2 id={"readless" + idx} onClick={() => readLess(idx)}>
                  ᕙ(`▿´)ᕗ
                </DescText2>
              </ItemContainer>
            ))
          : null}
      </TjanstCont>
    </>
  )
}

export default Services
