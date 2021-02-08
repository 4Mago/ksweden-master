import React from 'react'
import styled from 'styled-components'
import {bool, func} from 'prop-types'



const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2.5rem;
  height: 2.5rem;
  margin-left: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 100;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2.5rem;
    height: 0.25rem;
    background: ${({ theme, open }) => open ? theme.secondaryLight : theme.burgerDark};
    border-radius: 50px;
    transition: all 0.3s ease-in-out;
    position: relative;
    transform-origin: 1px;

    :first-child {
        width: 70%;
      transform: ${({ open }) => open ? 'rotate(45deg); width 100%' : 'rotate(0); width: 70%'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(-20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
        width: 70%;
        margin-left: 30%;
      transform: ${({ open }) => open ? 'rotate(-45deg); width: 100%; margin-left: 0;' : 'rotate(0); width: 70%; margin-left: 30%;'};
    }
  }
`


const Burger = ({open, setOpen}) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
    )
}
Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired
}

export default Burger
