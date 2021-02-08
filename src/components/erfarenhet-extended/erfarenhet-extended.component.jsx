import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom' 
import sanityClient from '../../Client'
import PortableText from '@sanity/block-content-to-react'
import Mer from '../mer/mer.component'

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
margin-top: 120px;`

const ErfarenhetExtended = () => {
    const [article, setArticle] = useState('')
    let id = useParams()
   useEffect(() => {
       const articleQuery = `*[_type == "erfarenhet" && titel == "${id.artikelId.trim()}"]`

       sanityClient.fetch(articleQuery).then(article => { 
        article.forEach(article => {
            setArticle(article)
        })
      })
   }, [id])

    return (
        <ArticleCont>
            <TextCont>
                <Text blocks={article.beskrivning} />
            </TextCont>
            <Mer />
        </ArticleCont>
    )
}

export default ErfarenhetExtended
