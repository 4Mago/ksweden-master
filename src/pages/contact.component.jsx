import React from 'react'
import styled from 'styled-components'
import PortableText from '@sanity/block-content-to-react'

const ContactCont = styled.div`
    min-height: 50vh;
    height: auto;
    background: #E9F4FA;
    width: 100%;
    text-align: left;
    display: flex;
    justify-content: space-between;
 
    padding: 5%;
    box-sizing: border-box;
    align-items: flex-start;
    @media screen and (max-width: 900px){
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        height: auto;
    }
`
const ContactTitle = styled.h2`
text-align: left;
font-size: 48px;
margin-bottom: 2%;
@media screen and (max-width: 800px){
    font-size: 32px;
}`
const ContactText = styled.h3`
   
`
const ContactTextCont = styled.div`
    width: 50%;
    margin-bottom: 50px;
    @media screen and (max-width: 900px){
        width: 100%;
    }   
`
const MapCont = styled.div`
    width: 50%;
    @media screen and (max-width: 900px){
        width: 100%;
    }
`
const ContactTele = styled.h4`
font-size: 22px;
font-weight: 400;
@media screen and (max-width: 800px){
    font-size: 16px;
}
`
const ContactLink = styled.a`
    text-decoration: none;
    color: black;
`

const ContactContainer = styled.div`
    height: auto;
    width: 100%;
   
`
const Span = styled.div`
    width: 100%;
    height: 20px;
    background:#1E3D78;
`

const Contact = ({contact}) => {

    
    return (
        <ContactContainer id="kontakt">
        <ContactTitle>{contact.titel}</ContactTitle>
        <Span/>
        <ContactCont>     
                <ContactTextCont> 
                <ContactText>
                    
                <PortableText blocks={contact.beskrivning}/>
            </ContactText>
            <ContactTele>Telefon: <ContactLink href={`tel:${contact.telefon}`}>{contact.telefon}</ContactLink> </ContactTele>
            <ContactTele>Email: <ContactLink href={`mailto:${contact.email}`}>{contact.email}</ContactLink> </ContactTele>

                </ContactTextCont>
                
            <MapCont><iframe title="maps" width="100%" height="350" src="https://maps.google.com/maps?width=100%&amp;height=400&amp;hl=en&amp;q=Sveav%C3%A4gen%2020%2C%20111%2057%2C%20Stockholm%2C%20Sweden+(Passacon)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"><a href="https://www.maps.ie/coordinates.html">find my coordinates</a></iframe></MapCont>
        </ContactCont>
        <Span/>
        </ContactContainer>
       
    )
}

export default Contact
