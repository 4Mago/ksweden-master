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
  const [logo, setLogo] = useState("")

  useEffect(() => {
    const colorQuery = `*[_type == "colorScheme"]`

    sanityClient.fetch(colorQuery).then((color) => {
      color.forEach((color) => {
        setColor(color)
      })
    })

    return
  }, [])

  useEffect(() => {
    const logoQuery = `*[_type == "navigation"]`

    sanityClient.fetch(logoQuery).then((logo) => {
      logo.forEach((logo) => {
        setLogo(logo)
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
                  <ContactTitle>
                    {contactItem.title}
                    <StyledLogo src={urlFor(logo.logo3).quality(60).auto('format').url()} />
                  </ContactTitle>
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
                              <TextOverlay2>{teamItem.role}</TextOverlay2>
                            </TextOverlay>
                          </ImageCont>
                          <TextDivs>
                            <Text> <b>Telefon:</b> <A href={`mailto:${teamItem.phone}`}>{teamItem.phone}</A> </Text>
                            <Text> <b>E-post:</b> <A href={`mailto:${teamItem.email}`}> {teamItem.email} </A> </Text>
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
  height: 200px;
  margin-bottom: 3%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
  font-size: 48px;
  }
`

const Overlay = styled.div`
  width: 97%;
  top: 180px;
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
margin: 5px 0 0 0;
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

const StyledLogo = styled.img`
  width: 300px;
  height: 313px;
  z-index: 100;
  box-sizing: border-box;
  position: relative;
  bottom: 70px;
  left: 270px;
  cursor: default;
  
  @media screen and (max-width: 1300px) {
    width: 265px;
    height: 277px;
    left: 100px;
  }
  @media screen and (max-width: 1100px) {
    width: 245px;
    height: 256px;
    left: 0;
  }
  @media screen and (max-width: 900px) {
    width: 225px;
    height: 235px;
    bottom: 55px;
  }
  @media screen and (max-width: 700px) {
    width: 200px;
    height: 209px;
    bottom: 45px;
  }
  @media screen and (max-width: 500px) {
  }

`

const A = styled.a`
  text-decoration: none;
  color: #414141;
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
  cursor: pointer;
`

const ImageDiv = styled.div`

  width: 280px;
  min-width: 280px;
  height: 360px;

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
  font-size: 8px;
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
  height: 25px;
`
