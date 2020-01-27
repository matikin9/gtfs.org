import React from "react"
import {useStaticQuery, graphql} from "gatsby"

const ReactMarkdown = require('react-markdown')

const FareRulesSpec = () => {
    const data = useStaticQuery(graphql`
  {
      markdownRemark(frontmatter: {path: {eq: "/farerulesspec/"}}) {
        rawMarkdownBody
      }
    }`)
    return <ReactMarkdown
        source={data.markdownRemark.rawMarkdownBody}
        escapeHtml={false}
    />
}

export default FareRulesSpec