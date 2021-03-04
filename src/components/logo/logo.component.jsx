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
  z-index: 100;
  cursor: default;
  @media screen and (max-width: 1300px) {
    width: 265px;
  }
  @media screen and (max-width: 800px) {
    width: 150px;
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
      <StyledLogo src={urlFor(logo.logo).url()} />
    </Link>
  )
}

export default Logo
