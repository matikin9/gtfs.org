import React from "react"
import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: post.html }}/>
    </Layout>
  )
}
