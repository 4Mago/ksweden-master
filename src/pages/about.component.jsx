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
  margin-top: 100px;
  text-align: left;
  margin-bottom: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
`

const Image = styled.img`
  height: 300px;
  width: auto;
`

const ImageCont = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const AboutContainer = styled.div``

const AboutTitle = styled.h1`
  font-size: 42px;
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
      {about.length > 0
        ? about.map((aboutItem, idx) => (
            <AboutContainer key={idx}>
              <ImageCont>
                <Image src={urlFor(aboutItem.image).url()} />
              </ImageCont>
              <Desc blocks={aboutItem.description} />
            </AboutContainer>
          ))
        : null}
    </AboutCont>
  )
}

export default About
