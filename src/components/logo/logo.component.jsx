import React, { useState, useEffect } from "react"
import styled from "styled-components"
import sanityClient from "../../Client"
import imageUrlBuilder from "@sanity/image-url"
import { Link } from "react-router-dom"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const StyledLogo = styled.img`
  width: 300px;
  height: auto;
  position: absolute;
  top: 25vh;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: default;
  @media screen and (max-width: 1300px) {
    top: 26vh;
    width: 265px;
  }
  @media screen and (max-width: 1100px) {
    top: 26vh;
    width: 265px;
  }
  @media screen and (max-width: 1100px) {
    top: 26vh;
    width: 265px;
  }
  //height!!!
  @media screen and (max-height: 500px) {
    width: 85px;
    height: auto;
    top: 32px;
    left: 85%;
  }
  @media screen and (max-width: 900px) {
    width: 200px;
    top: 20vh;
  }
  @media screen and (max-width: 700px) {
    width: 150px;
    top: 8em;
    left: 77%;
  }
  @media screen and (max-width: 500px) {
    width: 85px;
    height: auto;
    top: 32px;
    left: 85%;
    z-index: 100;
  }
`

const Logo = ({ setOpen }) => {
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
    <Link
      onClick={() => {
        setOpen(false)
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      }}
      to="/"
    >
      <StyledLogo src={urlFor(logo.logo).quality(60).auto('format').url()} />
    </Link>
  )
}

export default Logo
