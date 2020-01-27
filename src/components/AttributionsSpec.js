import React from "react"
import {useStaticQuery, graphql} from "gatsby"

const ReactMarkdown = require('react-markdown')

const AttributionsSpec = () => {
    const data = useStaticQuery(graphql`
  {
      markdownRemark(frontmatter: {path: {eq: "/attributionsspec/"}}) {
        rawMarkdownBody
      }
    }`)
    return <ReactMarkdown
        source={data.markdownRemark.rawMarkdownBody}
        escapeHtml={false}
    />
}

export default AttributionsSpec