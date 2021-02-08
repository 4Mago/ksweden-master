import React, {useEffect} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ReactGA from 'react-ga'

const LinkCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-flow: column
`

const Cont = styled.div`
    width: 70%;
    padding: 100px 5%;
    height: auto;
    text-align: left;
`
const Text = styled.div`
`

const Terms = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search) 
      },[])
    return (
        <Cont>
        <h1 >Integritetspolicy</h1>
         <Text>
    <p>Passacon AB är ett modernt konsultbolag med fokus på att bistå våra kunder med verksamhetsutveckling och IT. Genom integritetspolicyn lämnar vi information om hur vi hanterar personuppgifter i vår verksamhet enligt reglerna i EU:s nya dataskyddsförordning, GDPR. Vill du veta mer om begreppen vi använder i vår policy eller vad dataskyddsförordningen innebär finns mer information i Dataskyddsinspektionens hemsida.
</p>     

<h2>Om Passacon AB:s personuppgiftsansvar</h2>
<p>Passacon AB har inga anställda utan består av ett antal fristående konsulter. När vi behandlar personuppgifter är Passacon AB och respektive konsultbolag gemensamt personuppgiftsansvariga för behandlingen. Vi har noga reglerat ansvaret i våra partneravtal
</p>

<h2>Hur vi behandlar personuppgifter</h2>
<p>Nedan beskriver vi mer konkret hur vi behandlar personuppgifter både i kontakt med kunder och i marknadsföring. För att göra det enklare för dig att förstå har vi ritat upp kartor över våra vanligaste processer. Vi berättar sedan utifrån kartorna hur vi behandlar personuppgifter i vår verksamhet.
</p>
<h2>Vi har följande processer</h2>

<LinkCont>
    <Link to="/marknadsforing">Marknadsföring</Link>
    <Link to="/forsaljning">Försäljning</Link>
    <Link to="/leverans">Leverans</Link>
    <Link to="hantering-bokforing-skatter">Hantering av bokföring och skatter</Link>

</LinkCont>

<p>För att göra bilden än mer tydlig kan du också läsa om vår personuppgiftshantering i följande fall:
</p>
<LinkCont>
    <Link to="/partners">Våra partners personuppgifter</Link>
    <Link to="/mejl-dokumenthanteringspolicy">Vår mejl och dokumenthanteringspolicy</Link>
    <Link to="/kontakt-tredje-land">Kontakter med tredje land</Link>
    <Link to="/analytics">Inbördes arrangemang kopplade till hemsida och sociala medier</Link>
</LinkCont>



<h2>Dina rättigheter</h2>
<p>
I vår integritetspolicy lämnar vi information om vår behandling av personuppgifter vilket är ett sätt för oss att tillse att du som registrerad kan utöva din rättighet att få information av oss.

Om du tycker att vi behandlat dina personuppgifter på ett felaktigt sätt eller att de behöver kompletteras har du rätt att begära att vi rättar dem. Om du inte vill att vi ska fortsätta behandla personuppgifter har du rätt att begära att vi ska radera dem. Vi kommer rätta och radera personuppgifterna om det är möjligt i förhållande till vårt ändamål med behandlingen, de lagregler vi är skyldiga att följa och de avtal som vi eller vår kund ingått med dig som registrerad.

Om du gett ett samtycke till behandling har du alltid rätt att återkalla samtycket. Då kommer vi radera personuppgifterna som omfattas av samtycket. Du kan också invända mot behandling vi gör beträffande marknadsföring liksom om du har egna personliga skäl för att inte vilja få uppgifterna behandlade. Om du invänder kommer vi att pröva om vi ska radera dem (se föregående stycke). Självklart kommer vi alltid att radera personuppgifter om du inte längre önskar ta emot marknadsföring från oss.

Om du är i en rättslig tvist och behöver dina personuppgifter som bevis kan du också begära att vi inte raderar dina uppgifter (kallas begränsning) trots att vi inte själva längre behöver dem eller vi saknar laglig grund för fortsatt behandling. Du har också rätt att begära begränsning när du ber oss rätta/radera uppgifter, vilket innebär att vi får inte använder uppgifterna under den tid vi undersöker om vi kan rätta/radera dem. Som tidigare nämnts finns restriktioner i vad vi kan rätta eller radera (se andra stycket ovan).

Slutligen har du rätt att få besked om vilka behandlingar vi gör om dig (kallas ibland registerutdrag). Ett registerutdrag ska bl.a. innehålla beskrivning av ändamål och laglig grund med behandlingarna och vilka kategorier personuppgifter det rör sig om. Denna typ av information har vi redan sammanställt på övergripande nivå – se ovan under rubriken "Hur vi behandlar personuppgifter" vilket är ett enkelt sätt för dig att få information hur vi arbetar med dina personuppgifter. Ett registerutdrag innebär att du ska få en överblick över behandlingar så du förstår var dina personuppgifter eventuellt behandlas (du har dock inte en ovillkorlig rätt att ta del av handlingar där dina personuppgifter finns).

</p>

<h2>Kontakta oss</h2>

Det är viktigt för oss att du känner förtroende för hur vi behandlar dina personuppgifter. Har du frågor eller synpunkter kan du kontakta <a href="mailto:info@passacon.se">info@passacon.se</a>. Detsamma gäller om du vill utöva dina rättigheter (se ovan).

<h2>Kontakta Datainspektionen</h2>

Du har alltid rätt att kontakta Datainspektionen om du har synpunkter på vår behandling av dina personuppgifter Detta får du givetvis göra utan att kontakta oss först, men vi värdesätter förstås om du också berättar för oss vad du tycker så vi vet det i vårt kontinuerliga förbättringsarbete.
        </Text>   

        </Cont>
       
    )
}

export default Terms
