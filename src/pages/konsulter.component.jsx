import React, {useState } from 'react'
import KonsultContainer from '../components/konsult-container/konsult-container.component'
import KonsultSlider from '../components/new-slider.component/new-slider.component'
import Title from '../components/title/title.component'

const Konsulter = ({konsult}) => {
    const [showing, setShowing] = useState({
        opacity: 0,
        pointerEvents: 'none'
    })
    const [slide, setSlide] = useState(0)
   
  
    return (
        <div style={{height:'auto'}} id="konsulter">
            <Title title="Konsulter" />
            <KonsultContainer setSlide={setSlide} click={setShowing} showing={showing} konsulter={konsult} />
            <KonsultSlider setSlide={setSlide} slide={slide} click={setShowing} showing={showing} konsulter={konsult} />
        </div>
    )
}

export default Konsulter
