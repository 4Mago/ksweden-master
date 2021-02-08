import React, {useEffect} from 'react'
import styled from 'styled-components'
import ErfarenhetContainer from '../components/erfarenhet-container/erfarenhet-container'
import Title from '../components/title/title.component'
import ReactGA from 'react-ga'

const ErfarenhetCont = styled.div`
    margin-top: 100px;
    text-align: left;  
    height: auto;  
    margin-bottom: 100px;
    position: relative;
   
`

const Erfarenhet = ({erfarenhet}) => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search) 
      },[])
    return (
        <ErfarenhetCont id="erfarenhet">
            <Title title={'Erfarenhet'} />
            <ErfarenhetContainer erfarenhet={erfarenhet} />
        </ErfarenhetCont>
    )
}

export default Erfarenhet
