import React, { useEffect } from "react"
import HeaderImage from "../components/header-image/header-image.component"
import styled from "styled-components"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import ClientContainer from "../components/client-logo-container/client-logo-container.component"
import Services from "./services.component"
import About from "./about.component"
import Contact from "./contact.component"
import ReactGA from "react-ga"
import CirclePage from "./circlePage.component"
import PortableText from "@sanity/block-content-to-react"
import { motion } from "framer-motion"

const HomeCarousel = styled(Carousel)`
  height: 100vh;
  width: 100%;
  font-size: 40px;

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

  p,
  ul,
  h1 {
    font-size: 40px;
  }

  @media only screen and (max-width: 1300px) {
    font-size: 45px;
  }
  @media only screen and (max-width: 1000px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 600px) {
    padding-top: 210px;
    font-size: 32px;
  }
  @media only screen and (max-width: 550px) {
    padding-top: 210px;
    font-size: 25px;
  }
  @media only screen and (max-width: 480px) {
    padding-top: 210px;
    font-size: 22px;
  }
`

const ContCont = styled.div`
  overflow-x: hidden;
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
const PageContainer = styled(motion.div)`
  height: auto;
  width: 100%;
  box-sizing: border-box;
  padding: 0 8%;
  line-height: 24px;
`

const Home = ({ home, about, services, contact, team, circlePage }) => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  const settings = {
    autoPlay: true,
    stopOnHover: false,
    interval: 6000,
    showThumbs: false,
    infiniteLoop: true,
    showStatus: false,
    transitionTime: 1000,
  }
  return (
    <ContCont>
      <HomeContainer id="home">
        {home.length > 0 ? (
          <HomeCarousel {...settings}>
            {home.map((homeItem, idx) => (
              <HeaderImage
                key={idx}
                slider={homeItem}
                blocks={homeItem.heroText}
              />
            ))}
          </HomeCarousel>
        ) : null}
      </HomeContainer>
      <ClientContainer />
      <PageContainer>
        <CirclePage about={circlePage} />
        <Services services={services} />
        <About about={about} />
        <Contact contact={contact} team={team} />
      </PageContainer>
    </ContCont>
  )
}

export default Home
