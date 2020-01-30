import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import {Message} from "semantic-ui-react";

const ReactMarkdown = require('react-markdown')

const Agency = () => {
    const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: {path: {eq: "/agency/"}}) {
        html
      }
    }`)
//     return <Message>
//         <p>
//             <ReactMarkdown
//                 source={data.markdownRemark.html}
//                 escapeHtml={false}
//             />
//         </p>
//     </Message>
// }
    return <ReactMarkdown
        source={data.markdownRemark.html}
        escapeHtml={false}
    />
}
export default Agency
