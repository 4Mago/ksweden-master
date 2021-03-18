import React, { useState, useEffect } from "react"
import sanityClient from "../Client"
import styled from "styled-components"
import imageUrlBuilder from "@sanity/image-url"
import PortableText from "@sanity/block-content-to-react"
import { motion } from "framer-motion"

const transition = { duration: 0.6, ease: [0.43, 0.013, 0.23, 0.96] }
const variants = {
  visible: { opacity: 1, transition: transition },
  hidden: { opacity: 0, transition: transition },
}

const About = ({ about, inView }) => {
  const [color, setColor] = useState("")

  useEffect(() => {
    const colorQuery = `*[_type == "colorScheme"]`

    sanityClient.fetch(colorQuery).then((color) => {
      color.forEach((color) => {
        setColor(color)
      })
    })

    return
  }, [])

  return (
    <ContCont
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <Circle style={{ backgroundColor: `${color?.mainColor?.hex}` }} />
      <AboutCont
      >
        {about.length > 0 
        ? about.map((aboutItem, idx) => (
          <>
        <ImageCont>
          <Image src={urlFor(aboutItem.image).url()} />
        </ImageCont>
        <AboutContainer key={idx}>
          <AboutTitle>{aboutItem.title}</AboutTitle>
          <Desc blocks={aboutItem.description} />
        </AboutContainer>
        </>
        ))
        : null }
      </AboutCont>
    </ContCont>
  )
}

export default About

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const ContCont = styled(motion.div)`
  position: relative;
  @media screen and (max-width: 1400px) {
    margin-bottom: 20vh;
  }
  @media screen and (max-height: 800px) {
    margin-bottom: 40vh;
  }
`

const AboutCont = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  position: relative;
  gap: 25px;


  @media screen and (max-height: 800px) {
    margin-bottom: 10em;
    margin-top: 10em;
  }
  @media screen and (max-width: 800px) {
    flex-flow: column;
    justify-content: center;
  }
`
const Circle = styled.div`
  position: absolute;
  height: 550px;
  width: 550px;
  left: 73%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 550px;
  z-index: -1;
  overflow: hidden;
  transform: 1s ease;
 
  @media screen and (min-width: 1700px) {
    top: 44%;
  }
  @media screen and (min-width: 1400px) {
    height: 800px;
    width: 800px;
    border-radius: 900px;
    top: 50%;
  }
  @media screen and (max-width: 1200px) {
    height: 550px;
    width: 550px;
    border-radius: 800px;
  }
  @media screen and (max-width: 1025px) {
    height: 450px;
    width: 450px;
    border-radius: 800px;
  }
  @media screen and (max-width: 800px) {
    height: 600px;
    width: 600px;
    border-radius: 800px;
  }
  @media screen and (max-width: 799px) {
    height: 700px;
    width: 700px;
    border-radius: 700px;
    left: 50%;
    top: 57%;
  }
  @media screen and (max-width: 700px) {
    height: 650px;
    width: 650px;
    border-radius: 700px;
    left: 50%;
  }
  @media screen and (max-width: 400px) {
    height: 580px;
    width: 580px;
    top: auto;
    border-radius: 500px;
    top: 52%;
  }
`
const AboutContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 55%;
  text-align: left;
  z-index: 9;

  @media screen and (min-width: 1400px) {
    width: 700px;
    padding: 0 2% 0 0;
  }
  @media screen and (max-width: 1200px) {
    width: 450px;
  }
  @media screen and (max-width: 1025px) {
    width: 400px;
  }
  @media screen and (max-width: 800px) {
    width: 400px;
    }
  @media screen and (max-width: 500px) {
    padding-left: 20px;
  }
`
const ImageCont = styled.div`
  width: 50%;
  border-radius: 550px;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: -1;

  @media screen and (min-width: 1400px) {
    width: 700px;
    border-radius: 700px;
    height: 700px;
    position: relative;
  }
  @media screen and (max-width: 1200px) {
    width: 450px;
    border-radius: 450px;
    height: 450px;
    align-items: flex-start;
    position: relative;
  }
  @media screen and (max-width: 1025px) {
    width: 350px;
    border-radius: auto;
    height: 350px;
  }
  @media screen and (max-width: 800px) {
    height: 350px;
    width: 350px;
    border-radius: 350px;
    top: 50px;
  }
  @media screen and (max-width: 500px) {
    display: none;
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
  max-width: 500px;
  margin-bottom: 0;

  @media screen and (min-width: 1200px) {
    font-size: 64px;
    line-height: 60px;
    width: 600px;
    padding: 0;
  }
  @media screen and (max-width: 500px) {
    text-align: center;
    padding-bottom: 8px;
    text-indent: 5%;
    font-size: 32px;
    line-height: 32px;
    max-width: 85%;
  }
`
const Desc = styled(PortableText)`
  font-size: 16px;
  line-height: 19px;
  padding: 0 15px 0 0;

  @media screen and (max-width: 600px) {
    font-size: 15px;
    line-height: 16px;
    padding: 0 25px;
    width: 80%;
  }
  @media screen and (max-width: 320px) {
    font-size: 15px;
    line-height: 16px;
    padding: 0 45px;
    width: 70%;
  }
`