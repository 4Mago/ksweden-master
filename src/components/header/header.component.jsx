import React, { useState, useRef, useEffect } from 'react'
import Burger from '../burger/burger.component'
import Menu from '../menu/menu.component'
import { useOnClickOutside } from '../../hooks'
import sanityClient from '../../Client'
import Logo from '../logo/logo.component'
import styled from 'styled-components'

const HeaderCont = styled.div`
  width: 100%;
  height: 65px;
  position: fixed;
  z-index: 99999;
  background: rgba(255,255,255,0.8);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.5);
`

const Header = () => {
    const [open, setOpen] = useState(false)
    const [header, setHeader] = useState({
        meny: [],
        logga: ''
    })
    const node = useRef()
    useOnClickOutside(node, () => setOpen(false))
    useEffect(() => {
        const headerQuery = `*[_type == "navigation"]`

        sanityClient.fetch(headerQuery).then(header => {
            
          header.forEach(header => {
              setHeader(header)
          })
        })

        return
      }, [])

    return (
        <HeaderCont ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu header={header} open={open} setOpen={setOpen} />
          <Logo logo={header.logga} setOpen={setOpen} />
        </HeaderCont>
    )
}

export default Header
