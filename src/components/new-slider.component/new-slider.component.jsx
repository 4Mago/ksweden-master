import React from 'react'
import { CarouselProvider, Slider, ButtonBack, Slide, ButtonNext } from 'pure-react-carousel'
import styled from 'styled-components'
import SliderItem from '../konsult-slider-item/konsult-slider-item.component'

const SliderBackground = styled.div`
width: 100%;
height: 100vh;
position: fixed;
top: 0;
left: 0;
background: rgba(0,0,0,0.5);
cursor: pointer;
pointer-events: none;
opacity: 0;
transition: opacity  0.1s ease-in-out;
`
const SliderCont = styled.div`
    position: fixed;
    top: 10vh;
    left: 15%;
    width: 70%;
    z-index: 1;
    cursor: auto;
    opacity: 0;
    transition: opacity  0.1s ease-in-out;

`
const CloseButton = styled.div`
    position: absolute;
    left: 5px;
    top: 5px;
    z-index: 50;
    cursor: pointer;
`

const KonsultSlide = ({konsulter, showing, click, slide, setSlide}) => {
    return (
        <div>
            <SliderBackground onClick={() => click({
            pointerEvents: 'none',
            opacity: 0
        })} style={{pointerEvents: showing.pointerEvents, opacity: showing.opacity}}>
        </SliderBackground>
             <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={90}
        totalSlides={9}
        currentSlide={slide}
        infinite={true}
      >
        <SliderCont style={{pointerEvents: showing.pointerEvents, opacity: showing.opacity}}>
        <CloseButton onClick={() => click({
            pointerEvents: 'none',
            opacity: 0
        })}><i className="fas fa-times-circle fa-2x"></i></CloseButton>
            <Slider>
            {konsulter ? konsulter.map((konsult, index) => <Slide key={index} index={index}><SliderItem konsult={konsult} /></Slide>) : null}
            </Slider>
            <ButtonBack style={{position: 'absolute', top:'32vh', left:'-60px', borderRadius: '50%', width:'50px', height: '50px'}} ><img style={{width: '30px'}} alt="back" src="./back.svg"/></ButtonBack>
            <ButtonNext style={{position: 'absolute', top:'32vh', right:'-60px', borderRadius: '50%', width:'50px', height: '50px'}} ><img style={{width: '30px'}} alt="next" src="./next.svg"/></ButtonNext>
        </SliderCont>
       
       
      </CarouselProvider>
            
        </div>
    )
}

export default KonsultSlide
