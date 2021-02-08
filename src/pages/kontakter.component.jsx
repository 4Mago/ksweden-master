import React, {useEffect} from 'react'
import styled from 'styled-components'
import ReactGA from 'react-ga'

const Cont = styled.div`
    width: 70%;
    padding: 100px 5%;
    height: auto;
    text-align: left;
`
const Text = styled.div`
`
const Kontakt = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search) 
      },[])
    return (
        <Cont>
            <h1>Kontakter med tredje land</h1>
            <Text>
                <p>
                Enligt dataskyddsförordningen krävs särskilda åtgärder vid överföringar till tredje land (land som
ligger utanför EU). När vi har kunder som befinner sig i tredje land och vi behöver överföra uppgifter
dit gör vi följande</p>
                <ul>
                    <li>Vi undersöker om EU-kommissionen har bedömt att det föreligger en adekvat skyddsnivå i
förhållande till det aktuella tredje landet enligt artikel 45 i dataskyddsförordningen. I sådana
fall behandlar vi personuppgifter på det sätt som beskrivs i processerna ovan.</li>
               <li>
               Om så inte har skett är vi ytterst restriktiva i vår hantering av personuppgifter och använder
oss t.ex. inte av elektronisk överföring av personuppgifter till tredje land om inte
överföringen har säkrats på korrekt sätt.
               </li>
                </ul>
            </Text>
        </Cont>
                )}
export default Kontakt