import React, { lazy, Suspense, useState, useEffect } from "react"
import { Route, Switch, Link } from "react-router-dom"
import "./App.css"
import { ThemeProvider } from "styled-components"
import { theme } from "./theme.styles"
import Header from "./components/header/header.component.jsx"
import Footer from "./components/footer/footer-component.jsx"
import sanityClient from "./Client"
import styled from "styled-components"
import CookieConsent from "react-cookie-consent"
import ReactGA from "react-ga"

const HomePage = lazy(() => import("./pages/home.component.jsx"))
const Terms = lazy(() => import("./pages/terms.component.jsx"))

function App() {
  const [cookie, cookieTrigger] = useState(false)
  useEffect(() => {
    if (cookie) {
      ReactGA.initialize("UA-159437523-1")
      window.localStorage.setItem("cookieAccepted", true)
      ReactGA.pageview(window.location.pathname + window.location.search)
    }
  }, [cookie])
  useEffect(() => {
    window.localStorage.cookieAccepted
      ? cookieTrigger(true)
      : cookieTrigger(false)
  }, [])

  const [home, setHome] = useState("")
  const [about, setAbout] = useState("")
  const [services, setServices] = useState("")
  const [contact, setContact] = useState("")
  const [team, setTeam] = useState("")

  const homeQuery = `*[_type == "slider"] | order(datum desc)`

  const contactQuery = `*[_type == "contakt"]`

  const servicesQuery = `*[_type == "services"] | order(datum desc)`

  const teamQuery = `*[_type == "team"]`

  const aboutQuery = `*[_type == "about"]`

  const uppdragQuery = `*[_type == ""] | order(datum desc)
{
    thumbnail, titel
}`

  useEffect(() => {
    sanityClient.fetch(homeQuery).then((homeResult) => {
      const homeArray = []
      homeResult.forEach((homeItem) => {
        homeArray.push(homeItem)
      })
      setHome(homeArray)
    })

    sanityClient.fetch(aboutQuery).then((aboutResult) => {
      const aboutArray = []
      aboutResult.forEach((aboutItem) => {
        aboutArray.push(aboutItem)
      })
      setAbout(aboutArray)
    })

    sanityClient.fetch(contactQuery).then((contactResult) => {
      const contactArray = []
      contactResult.forEach((contactItem) => {
        contactArray.push(contactItem)
      })
      setContact(contactArray)
    })

    sanityClient.fetch(servicesQuery).then((servicesResult) => {
      const servicesArray = []
      servicesResult.forEach((servicesItem) => {
        servicesArray.push(servicesItem)
      })
      setServices(servicesArray)
    })

    sanityClient.fetch(teamQuery).then((teamResult) => {
      const teamArray = []
      teamResult.forEach((teamItem) => {
        teamArray.push(teamItem)
      })
      setTeam(teamArray)
    })

    //   sanityClient.fetch(rollQuery).then((roller) => {
    //     roller.forEach((roll) => {
    //       setRoller(roll)
    //     })
    //   })

    //   const uppdragArray = []

    //   sanityClient.fetch(uppdragQuery).then((uppdrag) => {
    //     uppdrag.forEach((uppdrag) => {
    //       uppdragArray.push(uppdrag)
    //     })
    //     setNyheter(uppdragArray)
    //   })

    //   const konsultArray = []
    //   sanityClient.fetch(konsultQuery).then((konsult) => {
    //     konsult.forEach((konsult) => {
    //       konsultArray.push(konsult)
    //     })
    //     setKonsult(konsultArray)
    //   })
    //   return
  }, [])

  // const [loading, setLoading] = useState(false)
  // setLoading(true)
  // setLoading(false)

  const Fallback = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
  `
  return (
    <div className="App">
      <CookieConsent
        enableDeclineButton
        disableStyles={true}
        flipButtons
        declineButtonClasses="decline-button"
        buttonClasses="cookie-button"
        buttonText={"Acceptera"}
        declineButtonText={"Nej Tack"}
        containerClasses="cookie-container"
        onAccept={() => cookieTrigger(true)}
      >
        Den här webbplatsen använder cookies, som samlar information om hur du
        interagerar med sidan. Genom att acceptera tillåter du att vi samlar och
        behandlar dina personuppgifter enligt vår{" "}
        <Link style={{ color: "white" }} to="./integritets-policy">
          integritetspolicy
        </Link>
      </CookieConsent>
      <ThemeProvider theme={theme}>
        <Header />
        <Suspense
          fallback={
            <Fallback>
              <p></p>
            </Fallback>
          }
        >
          <Switch>
            <Route path={"/"} exact>
              <HomePage
                services={services}
                home={home}
                about={about}
                contact={contact}
                team={team}
              />
            </Route>
            <Route path={"/integritets-policy"} component={Terms} />
          </Switch>
        </Suspense>
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default App
