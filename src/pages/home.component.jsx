import React, { useEffect } from "react"
import HeaderImage from "../components/header-image/header-image.component"
import styled from "styled-components"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import ClientContainer from "../components/client-logo-container/client-logo-container.component"
import Services from "./tjanster.component"
import About from "./about.component"
import Contact from "./contact.component"
import ReactGA from "react-ga"

const HomeCarousel = styled(Carousel)`
  height: 100vh;
  width: 100%;
  ul {
    padding: 0;
  }

  .slide iframe {
    margin: 0 !important;
    width: 100% !important;
    min-height: -webkit-fill-available;
  }
  .carousel-slider .control-arrow {
    padding: 20px !important;
  }
  @media only screen and (max-width: 800px) {
    height: 70vh;
  }
`
const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding-bottom: 100px;
  .carousel.carousel-slider .control-arrow:hover  {
    background: none;
  }
`
const AboutImage = styled.img``
const PageContainer = styled.div`
  height: auto;
  width: 100%;
  box-sizing: border-box;
  padding: 0 8%;
`

const Home = ({ home, about, services, contact }) => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  const settings = {
    autoPlay: true,
    stopOnHover: false,
    interval: 5000,
    showThumbs: false,
    infiniteLoop: true,
    showStatus: false,
    transitionTime: 1000,
  }

  return (
    <>
      <HomeContainer id="home">
        {home.length > 0 ? (
          <HomeCarousel {...settings}>
            {home.map((homeItem, idx) => (
              <HeaderImage key={idx} slider={homeItem} />
            ))}
          </HomeCarousel>
        ) : null}
      </HomeContainer>
      <ClientContainer />
      <PageContainer>
        <About about={about} />
        <Services services={services} />
        <Contact contact={contact} />
      </PageContainer>
    </>
  )
}

export default Home
