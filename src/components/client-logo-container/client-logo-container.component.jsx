import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import ClientLogo from '../client-logo/client-logo.component'
import sanityClient from '../../Client'
import { CarouselProvider, Slider, ButtonBack, Slide, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import './client-logo.styles.css'

const StyledContainer = styled.div`
    width: 80%;

    height: 30vh;
    margin: 35px 10% 5px 10%;
    @media screen and (max-width: 800px){
        width: 70%;
        margin: 35px 15% 5px 15%;
        height: 20vh;
    }
`
const SliderCont = styled.div`
    height: 100%;
    position: relative;
    
`

const ClientContainer = () => {
    const [client, setClient] = useState('')
    useEffect(() => {
        const clientQuery = `*[_type == "uppdrag"]`
        const clientArray = []
        sanityClient.fetch(clientQuery).then(client => {
            
          client.forEach(client => {
              clientArray.push(client)
          })
          setClient(clientArray)
        })
        return
      }, [])
    return (
        <StyledContainer className="client-container">
            <CarouselProvider className="carousel-desktop"
                naturalSlideWidth={100}
                naturalSlideHeight={100}
                totalSlides={client.length}
                visibleSlides={7}
                infinite={true}
                step={3}
            >
                <SliderCont>
                <Slider>
        {client ? 
            client.map((client, index) => <Slide width={10} key={index} index={index}><ClientLogo client={client} /></Slide>)
            : null}
           
        </Slider>
            
            <ButtonBack  style={{border: '0', opacity: '0.3', position: 'absolute', left: '-55px', top: '45%', borderRadius: '50%', width:'30px', height: '30px'}} ><img style={{width: '15px'}} alt="back" src="./back.svg"/></ButtonBack>
            <ButtonNext style={{border: '0',opacity: '0.3', position: 'absolute', right: '-55px', top: '45%', borderRadius: '50%', width:'30px', height: '30px'}} ><img style={{width: '15px'}} alt="next" src="./next.svg"/></ButtonNext>
                </SliderCont>
        
            </CarouselProvider>
            <CarouselProvider className="carousel-phone"
                naturalSlideWidth={100}
                naturalSlideHeight={100}
                totalSlides={client.length}
                visibleSlides={3}
                infinite={true}
                step={3}
            >
                <SliderCont>
                <Slider>
        {client ? 
            client.map((client, index) => <Slide width={10} key={index} index={index}><ClientLogo client={client} /></Slide>)
            : null}
           
        </Slider>
            
            <ButtonBack  style={{border: '0', opacity: '0.3', position: 'absolute', left: '-55px', top: '45%', borderRadius: '50%', width:'30px', height: '30px'}} ><img style={{width: '15px'}} alt="back" src="./back.svg"/></ButtonBack>
            <ButtonNext style={{border: '0',opacity: '0.3', position: 'absolute', right: '-55px', top: '45%', borderRadius: '50%', width:'30px', height: '30px'}} ><img style={{width: '15px'}} alt="next" src="./next.svg"/></ButtonNext>
                </SliderCont>
        
            </CarouselProvider>
        </StyledContainer>

    )
}

export default ClientContainer
