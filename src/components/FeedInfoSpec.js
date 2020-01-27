import React from "react"
import {useStaticQuery, graphql} from "gatsby"

const ReactMarkdown = require('react-markdown')

const FeedInfoSpec = () => {
    const data = useStaticQuery(graphql`
  {
      markdownRemark(frontmatter: {path: {eq: "/feedinfospec/"}}) {
        rawMarkdownBody
      }
    }`)
    return <ReactMarkdown
        source={data.markdownRemark.rawMarkdownBody}
        escapeHtml={false}
    />
}

export default FeedInfoSpec