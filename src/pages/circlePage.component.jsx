import React from "react"
import sanityClient from "../Client"
import styled from "styled-components"
import imageUrlBuilder from "@sanity/image-url"
import PortableText from "@sanity/block-content-to-react"

const CirclePage = ({ about }) => {
  return (
    <>
      <Circle />
      <AboutTitle>{about.title}</AboutTitle>
      <AboutCont>
        <AboutContainer>
          <Desc blocks={about.description} />
        </AboutContainer>
        <ImageCont>
          <Image src={urlFor(about.image).url()} />
        </ImageCont>
      </AboutCont>
    </>
  )
}

export default CirclePage

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const AboutCont = styled.div`
  height: 75vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 30vh;
  position: relative;
`
const Circle = styled.div`
  position: absolute;
  height: 550px;
  width: 550px;
  left: 29vw;
  border-radius: 700px;
  background: #fff5f5;
  z-index: -1;
`
const AboutContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 400px;
`
const ImageCont = styled.div`
  width: 400px;
  border-radius: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`
const AboutTitle = styled.h2`
  font-size: 30px;
`
const Desc = styled(PortableText)`
  text-align: center;
  font-size: 16px;
  line-height: 24px;
`
