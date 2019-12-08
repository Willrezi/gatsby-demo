import React from "react"
import { graphql } from "gatsby"
import propTypes from "prop-types"

import Layout from "../components/layout"

export const query = graphql`
  query markdownRemark($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`
const Blog = props => {
  return (
    <Layout>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: props.data.markdownRemark.html,
        }}
      ></div>
    </Layout>
  )
}

Blog.propTypes = {
  data: propTypes.string,
}

export default Blog
