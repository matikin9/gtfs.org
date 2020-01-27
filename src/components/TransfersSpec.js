import React from "react"
import {useStaticQuery, graphql} from "gatsby"

const ReactMarkdown = require('react-markdown')

const TransfersSpec = () => {
    const data = useStaticQuery(graphql`
  {
      markdownRemark(frontmatter: {path: {eq: "/transfersspec/"}}) {
        rawMarkdownBody
      }
    }`)
    return <ReactMarkdown
        source={data.markdownRemark.rawMarkdownBody}
        escapeHtml={false}
    />
}

export default TransfersSpec