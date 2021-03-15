import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import sanityClient from "../../Client"
import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const FooterCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  position: absolute;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  padding: 0 7%;
  z-index: 2;
  a {
    text-decoration: none;
    color: black;
  }
`
const FooterItem = styled.div`
  margin: 0 5px;
  img {
    width: 75px;
  }
`

const Footer = () => {
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

  const [logo, setLogo] = useState("")

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
    <FooterCont style={{ backgroundColor: `${color?.altColor?.hex}` }}>
      <FooterItem>
        <a href="#">
          <img alt="k sweden" src={urlFor(logo.logo).url()}/>
        </a>
      </FooterItem>
      <FooterItem>
        <Link to="./integritets-policy">integritetspolicy</Link>
      </FooterItem>
    </FooterCont>
  )
}

export default Footer
