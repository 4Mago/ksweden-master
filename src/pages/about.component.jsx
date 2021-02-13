import React from "react"
import sanityClient from "../Client"
import styled from "styled-components"
import imageUrlBuilder from "@sanity/image-url"
import PortableText from "@sanity/block-content-to-react"
import Title from "../components/title/title.component"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}
const AboutCont = styled.div`
  width: 100%;
  height: auto;
  margin-top: 125px;
  text-align: left;
  box-sizing: border-box;

  margin-bottom: 100px;
`

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
const AboutContainer = styled.div``

const AboutTitle = styled.h1`
  font-size: 64px;
  width: 400px;
  max-width: 80%;
  line-height: 0.9em;
  @media screen and (max-width: 800px) {
    font-size: 36px;
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
`

const About = ({ about }) => {
  return (
    <AboutCont>
  {about.length > 0 ? (
      about.map((aboutItem, idx) => (
        <AboutContainer key={idx}>
        <Title title="Om oss" />
        <ImageCont>
          <Image src={urlFor(aboutItem.image).url()} />
        </ImageCont>
        <AboutTitle>{aboutItem.title}</AboutTitle>
        <Desc blocks={aboutItem.description} />
        </AboutContainer>
      ))
      

  ) : null}
      
    </AboutCont>
  )
}

export default About
