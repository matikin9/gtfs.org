import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import rehypeReact from 'rehype-react';
import { Accordion, Icon, Button } from 'semantic-ui-react';

// const renderAst = new rehypeReact({
//   createElement: React.createElement,
//   components: { "accordion": Accordion },
// }).Compiler

class BestPracticesPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    const {data} = props;
  }

  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state;
    return(

      <Layout>
        {/* <div dangerouslySetInnerHTML={{ __html: data.allFile.edges[0].node.childMarkdownRemark.html }}></div> */}
        <Accordion>
          <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
            <Icon name='dropdown' />
            What is a dog?
          </Accordion.Title>
          {/* {renderAst(data.allFile.edges[0].node.childMarkdownRemark.htmlAst)} */}
        </Accordion>
      </Layout>
    )
  }

}

export default BestPracticesPage

export const homeQuery = graphql`
    query {
      allFile(
          filter: {
            internal: {mediaType: {eq: "text/markdown"}},
            sourceInstanceName: {eq: "local"},
            name: {eq: "best-practices"},
            # relativePath: {regex: "/en\//"}
          }
        ){
          edges {
            node {
              name
              relativePath
              childMarkdownRemark {
                htmlAst

              }
            }
          }
        }
    }
`
