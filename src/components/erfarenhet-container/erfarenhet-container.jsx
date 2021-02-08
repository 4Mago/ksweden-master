import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    min-height: auto;
    box-sizing: border-box;
    grid-gap: 1em 3em;
    list-style-type: circle;
   
    @media only screen and (max-width: 900px){
        grid-template-columns: 1fr 1fr;
        padding: 2%;
    }
    @media only screen and (max-width: 640px){
        grid-template-columns: 1fr;
        padding: 0 5%;
        
       
    }
  
`
const Item = styled.div`
    width: 100%;
    height: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 5%;
    text-align: center;
    border-radius: 10px;
    transition: all ease-in-out .2s;
    -webkit-box-shadow: -2px 3px 18px 0px rgba(0,0,0,0.25);
-moz-box-shadow: -2px 3px 18px 0px rgba(0,0,0,0.25);
box-shadow: -2px 3px 18px 0px rgba(0,0,0,0.25);
    @media only screen and (max-width: 640px){
       height: 125px;   
    }
    &:hover {
        margin-top: -2px;
        margin-left: -2px;
        -webkit-box-shadow: -1px 5px 22px 0px rgba(0,0,0,0.35);
        -moz-box-shadow: -1px 5px 22px 0px rgba(0,0,0,0.35);
        box-shadow: -1px 5px 22px 0px rgba(0,0,0,0.35);
    }
`

const StyledLink = styled(Link)`
    font-size: 18px;
    color: black;
    text-align: center;
    text-decoration: none;
    @media only screen and (max-width: 420px){
       margin: 5px 0;
       font-size: 16px;
    }
`
const Arrow = styled.img`
    width: 15px;
    height: auto;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    margin-bottom: -2.8px;
    margin-left: 5px;
`
const ErfarenhetContainer = ({erfarenhet, id}) => {

    
    return (
        
            <StyledContainer>
            {erfarenhet ? erfarenhet.map((article, id) => <StyledLink  key={id} to={`/erfarenhet/${article.titel}`} > <Item >
            <p>{article.titel} <span> <Arrow alt="arrow" src="left-arrow.svg" /></span></p>
            </Item>
           </StyledLink> 
       ) : null}
        </StyledContainer>
      
        
    )
}

export default ErfarenhetContainer
