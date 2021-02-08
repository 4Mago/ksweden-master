import React from 'react'
import styled from 'styled-components'
import KonsultImage from '../konsult-image/konsult-image.component'
import KonsultImagePhone from '../konsult-image-phone/konsult-image-phone.component'
import './konsult-item.styles.css'


const ContCont = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center
    position: relative;
    `


const BoxCont = styled.div`
    height: auto;
    width: 100%;
    background: rgba(255,255,255,0.8);
   display: flex;
   justify-content: center;
   align-items: center;
   flex-flow: column wrap;
   box-sizing: border-box;
   padding: 5% 0;
   position: absolute;
   bottom: 0;
   left: 0;
   @media only screen and (max-width: 480px){
    padding: 1% 5%;
}
`

const Text = styled.p`
    text-align: center;
    margin: 5px 0 8px 0;
    font-weight: 800;
`
const Deets = styled.a`
    margin: 2px;
    position: relative;
    z-index: 1;
    text-decoration: none;
    color: black;
    @media screen and (max-width: 500px){
        font-size: 12px;
    }
    @media screen and (max-width: 350px){
        font-size: 10px;
    }
`
const KonsultItem = ({konsult, clicked, setSlide, slide}) => {
    return (
        <ContCont className="konsult-item" >
           <KonsultImagePhone konsult={konsult} />
            <KonsultImage 
            clicked={clicked}
            setSlide={setSlide}
            slide={slide}
            konsult={konsult} /> 
            <BoxCont>
                    <Text>{konsult.namn}</Text>
                    <Deets href={`Tel:${konsult.telefon}`}>Tel: {konsult.telefon}</Deets>
                    <Deets href={`mailto:${konsult.email}`}>{konsult.email}</Deets>
                </BoxCont>
        </ContCont>
        
    )
}

export default KonsultItem
