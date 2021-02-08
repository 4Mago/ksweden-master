import React from 'react'
import styled from 'styled-components'
import RollItem from '../roll-item/roll-item.component'
import './roll-item.styles.css'

const Cont = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns:1fr 1fr;
    grid-gap: 1em;
    box-sizing: border-box;
    padding: 2.5% 0;
    @media only screen and (max-width: 840px){
        grid-template-columns:1fr;
        max-width: 100%;
        padding: 2.5% 0;

      }
    
`


const RollContainer = ({roller}) => {
    return (
        <Cont>
            {roller ? roller.map((roll, id) => <RollItem className="icon" key={id} roll={roll} />): null}
        </Cont>
    )
}

export default RollContainer
