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

const CirclePage = ({ about, inView }) => {
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
      id="Om-oss"
    >
      <Circle style={{ backgroundColor: `${color?.mainColor?.hex}` }} />
      <AboutCont>
        <AboutContainer>
          <AboutTitle>{about.title}</AboutTitle>
          <Desc blocks={about.description} />
        </AboutContainer>
        <ImageCont>
          <Image src={urlFor(about.image).url()} />
        </ImageCont>
      </AboutCont>
    </ContCont>
  )
}

export default CirclePage

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const ContCont = styled(motion.div)`
  position: relative;
  min-height: 70vh;
  @media screen and (max-width: 1600px) {
    margin-bottom: 10em;
    }
  @media screen and (max-width: 1200px) {
    margin-bottom: 0;
    }
`

const AboutCont = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10em;
  margin-bottom: 10em;
  position: relative;



  @media screen and (max-width: 1300px) {
    margin-top: 10vh;
    margin-bottom: 5em;
  }
  @media screen and (max-height: 900px) {
  height: 100%;
  }
  @media screen and (max-width: 800px) {
    flex-flow: column-reverse;
    justify-content: center;
    margin-top: 0;
    gap: 50px;
  }
`
const Circle = styled.div`
  position: absolute;
  height: 860px;
  width: 860px;
  left: 50%;
  top: 46%;
  transform: translate(-50%, -50%);
  border-radius: 860px;
  z-index: -1;
  overflow: hidden;
  transform: 1s ease;

  
  @media screen and (min-width: 1700px) {
  }
  @media screen and (min-width: 1400px) {
    height: 900px;
    width: 900px;
    border-radius: 900px;
  }
  @media screen and (max-width: 1200px) {
    height: 800px;
    width: 800px;
    border-radius: 800px;
    top: 34%;
  }
  @media screen and (max-width: 800px) {
    height: 700px;
    width: 700px;
    border-radius: 800px;
    top: 34%;
  }
  @media screen and (max-width: 800px) {
    height: 600px;
    width: 600px;
    top: auto;
    border-radius: 800px;
  }
  @media screen and (max-width: 799px) {
    top: 46%;
  }
  @media screen and (max-width: 600px) {
    height: 650px;
    width: 650px;
    top: auto;
    border-radius: 700px;
    top: 44%;
  }
  @media screen and (max-width: 400px) {
    height: 580px;
    width: 580px;
    top: auto;
    border-radius: 500px;
    top: 46%;
  }
`
const AboutContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 50%;
  justify-content: flex-start;
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
    width: auto;
  }
  @media screen and (max-width: 500px) {
    text-align: center;
    width: 95%;
  }
`
const ImageCont = styled.div`
    width: 700px;
    border-radius: 700px;
    height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 1600px) {
    width: 550px;
    border-radius: 550px;
    height: 550px;
  }
  @media screen and (max-width: 1200px) {
    width: 450px;
    border-radius: 450px;
    height: 450px;
    align-items: flex-start;
    position: relative;
    bottom: 120px;
  }
  @media screen and (max-width: 1025px) {
    width: 350px;
    border-radius: 350px;
    height: 350px;
  }
  @media screen and (max-width: 800px) {
    top: 50px;
  }
  @media screen and (max-width: 500px) {
    width: 250px;
    border-radius: 250px;
    height: 250px;
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
  margin-top: 14px;
  margin-bottom: 0;

  @media screen and (min-width: 1400px) {
    font-size: 84px;
    line-height: 80px;
    width: auto;
    width: 750px;
    padding: 0;
  }

  @media screen and (max-width: 1200px) {
    font-size: 64px;
    line-height: 60px;
    width: auto;
    max-width: 600px;
    padding: 0;
  }
  @media screen and (max-width: 500px) {
    text-align: center;
    padding: 8px 0;
    max-width: 100%;
    line-height: 35px;
    font-size: 44px;
  }
  @media screen and (max-width: 400px) {
    text-align: center;
    padding: 8px 0;
    font-size: 32px;
    line-height: 32px;
    max-width: 100%;
  }
`
const Desc = styled(PortableText)`
  font-size: 16px;
  line-height: 19px;
  padding: 0 15px 0 0;

  @media screen and (max-width: 600px) {
    font-size: 15px;
    line-height: 16px;
    padding: 0 15px;
  }
  @media screen and (max-width: 450px) {
    font-size: 15px;
    line-height: 16px;
    padding: 0;
  }
`
