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
                            <Image src={urlFor(teamItem.image).url()} />
                          </ImageCont>
                          <Text> Telefon: {teamItem.phone} </Text>
                          <Text> Email: {teamItem.email} </Text>
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

  @media screen and (max-width: 900px) {
    flex-flow: column wrap;
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

const ContactText = styled(PortableText)`
  width: 95%;
`
const ContactTextCont = styled.div`
  width: 50%;
  margin-bottom: 10px;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`

const ImageCont = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  object-fit: cover;
`
const Image = styled.img`
  width: 250px;
  height: 300px;
  padding: 15%;
  padding-bottom: 15px;

  @media screen and (max-width: 1600px) {
    padding: 5%;
  }
  @media screen and (max-width: 1400px) {
    width: auto;
    max-width: 250px;
    height: auto;
    max-height: 300px;
    padding: 2%;
  }
  @media screen and (max-width: 900px) {
    padding-top: 0;
  }
`

const MapCont = styled.div`
  width: 50%;
  display: flex;
  @media screen and (max-width: 1300px) {
    flex-flow: column;
      }
  @media screen and (max-width: 900px) {
    width: 100%;
    flex-flow: row;
  }
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
  text-align: center;
`

const ContactContainer = styled.div`
  height: auto;
  width: 100%;
`
const Span = styled.div`
  width: 100%;
  height: 20px;
`
