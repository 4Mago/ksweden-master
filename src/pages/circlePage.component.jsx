import React from "react"
import sanityClient from "../Client"
import styled from "styled-components"
import imageUrlBuilder from "@sanity/image-url"
import PortableText from "@sanity/block-content-to-react"

const CirclePage = ({ about }) => {
  return (
    <>
      <Circle />
      <AboutCont>
        <AboutContainer>
          <AboutTitle>{about.title}</AboutTitle>
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

  @media screen and (max-width: 800px) {
    flex-flow: column;
  }
`
const Circle = styled.div`
  position: absolute;
  height: 860px;
  width: 860px;
  left: 20vw;
  top: 130vh;
  border-radius: 860px;
  background: #fff5f5;
  z-index: -1;
  overflow: hidden;

  @media screen and (max-width: 1200px) {
    height: 800px;
    width: 800px;
    border-radius: 800px;
    left: 15vw;
  }
  @media screen and (max-width: 1000px) {
    height: 800px;
    width: 800px;
    border-radius: 800px;
    left: 5%;
  }
  @media screen and (max-width: 800px) {
    height: 600px;
    width: 600px;
    top: auto;
    border-radius: 800px;
    left: 8vw;
  }
  @media screen and (max-width: 600px) {
    height: 600px;
    width: 600px;
    top: auto;
    border-radius: 800px;
    right: 8vw;
  }
`
const AboutContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 600px;
  text-align: left;

  @media screen and (min-width: 1400px) {
    width: 700px;
  }
  @media screen and (max-width: 1200px) {
    width: 500px;
  }
  @media screen and (max-width: 1000px) {
    width: 400px;
  }
`
const ImageCont = styled.div`
  width: 550px !important;
  border-radius: 550px;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 1000px) {
    width: 350px;
    border-radius: 350px;
    height: 350px;
  }
`

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`
const AboutTitle = styled.h2`
  font-family: "Bebas Neue", sans-serif;
  font-size: 48px;
  line-height: 50px;
  width: 450px;
  margin-bottom: 0;

  @media screen and (min-width: 1200px) {
    font-size: 64px;
    line-height: 60px;
    width: 600px;
    padding: 0;
  }
`
const Desc = styled(PortableText)`
  font-size: 16px;
  line-height: 19px;
  padding: 0 15px 0 0;

  @media screen and (max-width: 600px) {
    padding: 0 15px;
  }
`
