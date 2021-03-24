import React, { useEffect, useState } from "react"
import sanityClient from "../../Client"
import styled from "styled-components"
import { bool } from "prop-types"
import { HashLink as Link } from "react-router-hash-link"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  transform: ${({ open }) => (open ? "translate(0)" : "translate(-100%)")};
  text-align: left;
  padding: 3rem 6rem;
  position: fixed;
  min-width: 300px;
  z-index: 99;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    min-width: 90%;
    width: 100%;
    padding: 0;
  }
`

const NavLink = styled(Link)`
  font-size: 1.2rem;
  text-transform: uppercase;
  padding: 0.5rem 2rem;
  font-weight: bold;
  letter-spacing: 0.25rem;
  color: white;
  text-decoration: none;
  transition: color 0.1s linear;
  cursor: pointer;

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1rem;
    text-align: center;
    margin: 5px 0;
  }

  &:hover {
    color: ${({ theme }) => theme.primaryHover};
  }
`

const StyledLogo = styled.img`
z-index: 999;
height: 230px;
position: absolute;
right: 0;
top: 0;
`

const SPAN = styled.div`
display: flex;
justify-content: flex-end;
height: 1.25rem;
`

const Menu = ({ open, setOpen }) => {
  const [navigation, setNavigation] = useState("")
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

  useEffect(() => {
    const navigationQuery = `*[_type == "navigation"]`

    sanityClient.fetch(navigationQuery).then((navigation) => {
      navigation.forEach((navigation) => {
        setNavigation(navigation)
      })
    })

    return
  }, [])

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    })
  }

  return (
    <StyledMenu
      open={open}
      style={{ backgroundColor: `${color?.secondColor?.hex}` }}
    >      
      <SPAN>
      <StyledLogo src={urlFor(navigation.logo2).quality(60).auto('format').url()} />
      </SPAN>
      {navigation
        ? navigation.menu.map((item, id) => (
            <NavLink
              id={id}
              scroll={(el) => scrollWithOffset(el, 85)}
              to={`/#${item.link}`}
              smooth
              onClick={() => setOpen(!open)}
              key={item._key}
            >
              {item.name}
              <br />
            </NavLink>
          ))
        : null}
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu
