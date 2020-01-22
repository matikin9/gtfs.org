import React from "react"
import {useStaticQuery, graphql} from "gatsby"

const ReactMarkdown = require('react-markdown')

const Calendar = () => {
    const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: {path: {eq: "/routes/"}}) {
        html
      }
    }`)
    return <ReactMarkdown
        source={data.markdownRemark.html}
        escapeHtml={false}
    />

    // <data.markdownRemark.html
    // JSON.stringify(data.markdownRemark.html, null, 4)
}

export default Calendar