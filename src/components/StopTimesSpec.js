import React from "react"
import {useStaticQuery, graphql} from "gatsby"

const ReactMarkdown = require('react-markdown')

const StopTimesSpec = () => {
    const data = useStaticQuery(graphql`
  {
      markdownRemark(frontmatter: {path: {eq: "/stoptimesspec/"}}) {
        rawMarkdownBody
      }
    }`)
    return <ReactMarkdown
        source={data.markdownRemark.rawMarkdownBody}
        escapeHtml={false}
    />
}

export default StopTimesSpec