import React from 'react'
import styled from 'styled-components'
import RollHeader from '../components/roll-header/roll-header.component'
import RollContainer from '../components/roll-container/roll-container.component'
import Title from '../components/title/title.component'

const Cont = styled.div`
    margin: 120px 0;
    text-align: left;
    height: auto;
    
`


const Roller = ({roller}) => {
    

    return (
        <Cont id="roller">
            <Title title="Våra Roller" />
            <RollHeader headerImg={roller.thumbnail} headerTitle={roller.titel} headerDesc={roller.beskrivning} />
            <RollContainer roller={roller.roller}/>   
        </Cont>
    )
}

export default Roller
