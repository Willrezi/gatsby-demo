import React from "react"
import { graphql } from "gatsby"
import propTypes from "prop-types"

import Layout from "../components/layout"

// export const query = graphql`
//   query markdownRemark($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `
export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "DD MMMM YYYY")
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
    </Layout>
  )
}

Blog.propTypes = {
  data: propTypes.string,
}

export default Blog
