import React from "react"
import styled from "styled-components"
import sanityClient from "../../Client"
import imageUrlBuilder from "@sanity/image-url"
import { Link } from "react-router-dom"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}
const StyledLogo = styled.img`
  width: 200px;
  height: auto;
  position: absolute;
  top: 15vh;
  left: 45%;
  z-index: 100;
  @media screen and (max-width: 800px) {
    width: 150px;
  }
`

const Logo = ({ navigation, setOpen }) => {
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
      <StyledLogo src={urlFor(navigation.logo).url()} />
    </Link>
  )
}

export default Logo
