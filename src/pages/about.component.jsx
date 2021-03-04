import React from "react"
import sanityClient from "../Client"
import styled from "styled-components"
import imageUrlBuilder from "@sanity/image-url"
import PortableText from "@sanity/block-content-to-react"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const AboutCont = styled.div`
  margin-top: 100px;
  text-align: left;
  margin-bottom: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;

  @media screen and (max-width: 500px) {
    min-height: auto;
  }
`

const Image = styled.img`
  width: 100%;
  height: auto;
  min-height: 55vh;

  @media screen and (max-width: 800px) {
    min-height: auto;
  }
`

const ImageCont = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`
const AboutContainer = styled.div``

const AboutTitle = styled.h1`
  font-size: 42px;
  width: 800px;
  max-width: 80%;
  line-height: 0.9em;
  padding: 0 2%;

  @media screen and (max-width: 800px) {
    font-size: 36px;
    width: 400px;
  }
  @media screen and (max-width: 500px) {
    font-size: 28px;
  }
  @media screen and (max-width: 400px) {
    font-size: 22px;
  }
`
const Desc = styled(PortableText)`
  width: 100%;
  max-width: 800px;
  padding: 0 2%;
  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
`

const About = ({ about }) => {
  return (
    <AboutCont id="Om oss">
      {about.length > 0
        ? about.map((aboutItem, idx) => (
            <AboutContainer key={idx}>
              <ImageCont>
                <Image src={urlFor(aboutItem.image).url()} />
              </ImageCont>
              <AboutTitle>{aboutItem.title}</AboutTitle>
              <Desc blocks={aboutItem.description} />
            </AboutContainer>
          ))
        : null}
    </AboutCont>
  )
}

export default About
