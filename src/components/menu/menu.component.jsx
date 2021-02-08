import React from 'react'
import styled from 'styled-components'
import { bool } from 'prop-types'
import { HashLink  as Link } from 'react-router-hash-link'

const StyledMenu = styled.nav`
display: flex;
flex-direction: column;
justify-content: center;
background:${({ theme }) => theme.primaryLight};
height: auto;
transform: ${({open}) => open ? 'translate(0)' : 'translate(-100%)'};
text-align: left;
padding:3rem 6rem;
position: absolute;
min-width: 300px;
z-index: 99;
top: 0;
left: 0;
transition: transform 0.3s ease-in-out;

@media screen and (max-width: ${({theme }) => theme.mobile}) {
  min-width: 90%;
  width: 100%;
  padding: 0;
}

}
`
const NavLink = styled(Link)`

  font-size: 1rem;
  text-transform: uppercase;
  padding: 0.5rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: black;
  text-decoration: none;
  transition: color 0.1s linear;
  cursor:pointer;
  
  @media screen and (max-width: ${({theme }) => theme.mobile}) {
    font-size: 1rem;
    text-align: center;
    margin: 5px 0;
  }

  &:hover {
    color: ${({ theme }) => theme.primaryHover};
  }
`

const Menu = ({ open, header, setOpen }) => {

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    })}
  
  
    return (
        <StyledMenu open={open}>
            <div style={{height: "3rem"}}></div>
            {header ? header.meny.map(item => <NavLink scroll={el => scrollWithOffset(el, 85)} to={`/#${item.link}`} smooth onClick={() => setOpen(!open)} key={item._key}>{item.name}</NavLink>): null}
        </StyledMenu>
    )
}

Menu.propTypes = {
    open: bool.isRequired
}

export default Menu
