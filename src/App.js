import React, { lazy, Suspense, useState, useEffect } from "react"
import { Route, Switch, Link } from "react-router-dom"
import "./App.css"
import { ThemeProvider } from "styled-components"
import { theme } from "./theme.styles"
import Header from "./components/header/header.component"
import Footer from "./components/footer/footer-component"
import sanityClient from "./Client"
import styled from "styled-components"
import CookieConsent from "react-cookie-consent"
import ReactGA from "react-ga"

const HomePage = lazy(() => import("./pages/home.component"))
const ErfarenhetPage = lazy(() =>
  import("./components/erfarenhet-extended/erfarenhet-extended.component")
)
const KonsultPage = lazy(() =>
  import("./components/konsult-extended-phone/konsult-extended-phone.component")
)
const Terms = lazy(() => import("./pages/terms.component"))

function App() {
  const [home, setHome] = useState({
    thumbnail: "",
    titel: "",
  })
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

  const [contact, setContact] = useState("")
  const [tjanster, setTjanster] = useState("")
  const [roller, setRoller] = useState("")
  const [konsult, setKonsult] = useState([])
  const [omOss, setOmOss] = useState("")
  const [nyheter, setNyheter] = useState("")
  const [erfarenhet, setErfarenhet] = useState("")

  useEffect(() => {
    const homeQuery = `*[_type == "artikel" && slider] | order(datum desc) {
        thumbnail, titel
    }`
    const contactQuery = `*[_type == "contact"]`
    const tjansterQuery = `*[_type == "artikel" && tjanster] | order(datum desc)
        {
            thumbnail, titel
        }`
    const rollQuery = `*[_type == "roller"]`
    const omOssQuery = `*[_type == "omOss"]`
    const articleQuery = `*[_type == "artikel" && nyhet] | order(datum desc)
    {
        thumbnail, titel
    }`
    const erfarenhetQuery = `*[_type == "erfarenhet"] | order(datum desc)
    {
        thumbnail, titel
    }`
    const konsultQuery = `*[_type == "konsult"] | order(namn asc)`

    sanityClient.fetch(homeQuery).then((home) => {
      const homeArray = []
      home.forEach((home) => {
        homeArray.push(home)
      })
      setHome(homeArray)
    })

    sanityClient.fetch(contactQuery).then((contact) => {
      contact.forEach((contact) => {
        setContact(contact)
      })
    })

    const tjansterArray = []

    sanityClient.fetch(tjansterQuery).then((article) => {
      article.forEach((article) => {
        tjansterArray.push(article)
      })
      setTjanster(tjansterArray)
    })

    sanityClient.fetch(rollQuery).then((roller) => {
      roller.forEach((roll) => {
        setRoller(roll)
      })
    })

    sanityClient.fetch(omOssQuery).then((omOss) => {
      omOss.forEach((omOss) => {
        setOmOss(omOss)
      })
    })

    const articleArray = []

    sanityClient.fetch(articleQuery).then((article) => {
      article.forEach((article) => {
        articleArray.push(article)
      })
      setNyheter(articleArray)
    })

    const erfarenhetArray = []

    sanityClient.fetch(erfarenhetQuery).then((article) => {
      article.forEach((article) => {
        erfarenhetArray.push(article)
      })
      setErfarenhet(erfarenhetArray)
    })

    const konsultArray = []
    sanityClient.fetch(konsultQuery).then((konsult) => {
      konsult.forEach((konsult) => {
        konsultArray.push(konsult)
      })
      setKonsult(konsultArray)
    })
    return
  }, [])

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
                tjanster={tjanster}
                omOss={omOss}
                erfarenhet={erfarenhet}
                home={home}
                nyheter={nyheter}
                contact={contact}
                konsult={konsult}
                roller={roller}
              />
            </Route>
            <Route path={"/erfarenhet/:artikelId"} component={ErfarenhetPage} />
            <Route path={"/konsult/:artikelId"} component={KonsultPage} />
            <Route path={"/integritets-policy"} component={Terms} />
          </Switch>
        </Suspense>
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default App
