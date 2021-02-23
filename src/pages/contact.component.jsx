import React from "react"
import styled from "styled-components"
import PortableText from "@sanity/block-content-to-react"
import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "../Client"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const ContactCont = styled.div`
  min-height: 50vh;
  height: auto;
  background: #e9f4fa;
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
  }
`
const ContactTitle = styled.h2`
  text-align: left;
  font-size: 48px;
  margin-bottom: 2%;
  @media screen and (max-width: 800px) {
    font-size: 32px;
  }
`

const ContactText = styled(PortableText)`
  width: 95%;
`
const ContactTextCont = styled.div`
  width: 50%;
  margin-bottom: 50px;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`

const ImageCont = styled.div`
  display: flex;
  flex-flow: row;
`
const Image = styled.img`
  width: 150px;
  height: 200px;
`

const MapCont = styled.div`
  width: 50%;
  display: flex;
  @media screen and (max-width: 900px) {
    width: 100%;
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
  height: 15px;
`

const ContactContainer = styled.div`
  height: auto;
  width: 100%;
`
const Span = styled.div`
  width: 100%;
  height: 20px;
  background: #1e3d78;
`

const Contact = ({ contact, team }) => {
  console.log(contact)
  return (
    <ContactContainer id="kontakt">
      <Span />
      {contact.length > 0
        ? contact.map((contactItem, id) => (
            <ContactCont key={id}>
              <ContactTextCont>
                <ContactText blocks={contactItem.text} />
                <ContactTele>
                  <PortableText>{contactItem.text}</PortableText>
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
    </ContactContainer>
  )
}

export default Contact
