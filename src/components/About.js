import React from "react"
import {useStaticQuery, graphql} from "gatsby"

const ReactMarkdown = require('react-markdown')

const About = () => {
    // le plus simple : recopier les fichier fetches depuis les repo distant a l interieur du projet
    // pour pouvoir les appeler via graphql
    // redondant mais simple
    //
    // autre solution si pas possivble de eq:about ce serait de fetcher les fichiers directement dans le repo
    const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: {path: {eq: "/about/"}}) {
        html
      }
    }
  `)
    return <ReactMarkdown
        source={data.markdownRemark.html}
        escapeHtml={false}
    />

    // <data.markdownRemark.html
    // JSON.stringify(data.markdownRemark.html, null, 4)
}

export default About