import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom' 
import sanityClient from '../../Client'
import PortableText from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'


const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}
const Thumbnail = styled.div`
    width 350px;
    height: 400px;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 120px;
`

const ArticleCont = styled.div`
    height: auto;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: wrap column;
    box-sizing: border-box;
    padding: 0 5%;
    
`
const TextCont = styled.div`
    width: 100%;
    text-align: left;
    box-sizing: border-box;
    padding: 0 12%;
`
const Text = styled(PortableText)`
margin-top: 50px;`

const JuiceCont = styled.div`
    text-align: left;
    width: 76%;

`
const TextText = styled.h3`
    font-weight: 400;
    font-size: 26px;

`
const Contact = styled.button`
    padding: 1% 2%;
    background: white;
    border: black 1px solid;
    cursor: pointer;
    margin-bottom: 100px;
   
`

const KonsultExtendedPhone = () => {
    const [article, setArticle] = useState('')
    let id = useParams()
   useEffect(() => {
       const articleQuery = `*[_type == "konsult" && namn == "${id.artikelId.trim()}"]`

       sanityClient.fetch(articleQuery).then(article => { 
        article.forEach(article => {
            setArticle(article)
        })
      })
   }, [id])
   const namn = article.namn ? article.namn.split(" ") : null

    return (
        <ArticleCont>
            <Thumbnail style={{backgroundImage: `url(${urlFor(article.bild).url()})`}}/>
            <TextCont>
                <Text blocks={article.beskrivning} />
            </TextCont>
            <JuiceCont>
            <TextText>
                Vill du veta mer?
            </TextText>
                <a href={`tel:${article.telefon}`}>
                <Contact>
                    {`Ta kontakt med ${namn ? namn[0] : null}`}
                </Contact>
                </a>
                
        </JuiceCont>
        </ArticleCont>
    )
}

export default KonsultExtendedPhone
