import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import rehypeReact from 'rehype-react';
import NestedTable from '../components/nested-table';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "nested-table": NestedTable },
}).Compiler

export default ( { data }) => {
  return (
    <Layout>
      <div>This is the doc-page template</div>
      {
        renderAst(data.markdownRemark.htmlAst)
      }
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
    }
  }
`
