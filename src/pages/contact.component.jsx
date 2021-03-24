import React, { useState, useEffect } from "react"
import styled from "styled-components"
import PortableText from "@sanity/block-content-to-react"
import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "../Client"
import { motion } from "framer-motion"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const transition = { duration: 0.6, ease: [0.43, 0.013, 0.23, 0.96] }
const variants = {
  visible: { opacity: 1, transition: transition },
  hidden: { opacity: 0, transition: transition },
}

const Contact = ({ contact, team, inView }) => {
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
    <ContactContainer>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <Span style={{ backgroundColor: `${color?.altColor?.hex}` }} />
        {contact.length > 0
          ? contact.map((contactItem, id) => (
              <ContactCont
                key={id}
                style={{ backgroundColor: `${color?.mainColor?.hex}` }}
              >
                <ContactTextCont>
                  <ContactTitle>{contactItem.title}</ContactTitle>
                  <ContactText blocks={contactItem.text} />
                  <ContactTele>
                    <PortableText>{contactItem.text}</PortableText>
                    <a href="https://www.linkedin.com/company/2868236?trk=tyah&trkInfo=tarId:1411567075903,tas:passacon,idx:1-1-1">
                      <img alt="linkedin" src="/linked.svg" />
                    </a>
                  </ContactTele>
                </ContactTextCont>
                <MapCont>
                  {team.length > 0
                    ? team.map((teamItem, id) => (
                        <ContactContainer key={id}>
                          <ImageCont>
                            <ImageDiv><Image src={urlFor(teamItem.image).quality(60).auto('format').url()} /></ImageDiv>
                            <Overlay />
                            <TextOverlay>
                              {teamItem.name}
                              <br />
                              <TextOverlay2>{teamItem.profession}</TextOverlay2>
                            
                            </TextOverlay>
                          </ImageCont>
                          <TextDivs>
                            <Text><b>Telefon:</b> {teamItem.phone} </Text>
                            <Text> <b>Email:</b> {teamItem.email} </Text>
                            <Text2 blocks={teamItem.description} />
                          </TextDivs>
                        </ContactContainer>
                      ))
                    : null}
                </MapCont>
              </ContactCont>
            ))
          : null}
        <Span />
      </motion.div>
    </ContactContainer>
  )
}

export default Contact

const ContactCont = styled.div`
  min-height: 50vh;
  height: auto;
  width: 100%;
  text-align: left;
  display: flex;
  justify-content: space-between;
  padding: 5%;
  box-sizing: border-box;
  align-items: flex-start;
  flex-flow: column wrap;

  @media screen and (max-width: 900px) {
    justify-content: center;
    align-items: center;
    height: auto;
    margin-bottom: 44px;
  }
`
const ContactTitle = styled.h2`
  text-align: left;
  font-family: "Bebas Neue", sans-serif;
  font-size: 64px;
  line-height: 50px;
  margin-bottom: 12%;
  @media screen and (max-width: 800px) {
    font-size: 48px;
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

const TextOverlay = styled.p`
  font-size: 20px;
  padding: 5px 0 0 8px;
  position: absolute;
  text-align: left;
  z-index: 99;
`
const TextOverlay2 = styled.p`
font-family: 'bebas neue';
margin: 0;
`

const ContactText = styled(PortableText)`
  width: 95%;
`
const ContactTextCont = styled.div`
  width: 100%;
  max-width: 760px;
  margin-bottom: 10px;
  @media screen and (max-width: 900px) {
  }
`

const TextDivs = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: left;
  align-items: left;
  text-align: left;
  box-sizing: border-box;
  padding: 0 0 2% 2%;
  width: 66%;

  @media screen and (max-width: 1200px) {
    padding: 15px;
    width: 75%;

  }

  @media screen and (max-width: 900px) {
    padding: 15px;
    width: 90%;

  }

  @media screen and (max-width: 900px) {
    padding: 15px;
    width: 90%;

  }
`

const ImageCont = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: flex-end;
  position: relative;
  padding: 5px;
`

const ImageDiv = styled.div`

  width: 280px;
  min-width: 280px;
  height: 385px;

  @media screen and (max-width: 1600px) {
  }
  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 900px) {
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;

`

const MapCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 500px) {
    width: 100%;
    flex-flow: column;
  }
`
const ContactTele = styled.h4`
  font-size: 22px;
  font-weight: 400;
  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`
const ContactLink = styled.a`
  text-decoration: none;
  color: black;
`
const Text = styled.p`
  height: 10px;
`
const Text2 = styled(PortableText)`
  height: 10px;
  text-align: flex;
  z-index: 99;
`

const ContactContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  text-align: flex-start;
  position: relative;
`
const Span = styled.div`
  width: 100%;
  height: 20px;
`
