import React from "react"
import { Link, graphql } from "gatsby"
import "../components/layout.css"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="blog" />

    {data.allMarkdownRemark.edges.map(post => {
      return (
        <div style={{ textAlign: "center" }} key={post.node.id}>
          <h2 style={{ marginTop: "30px" }}>{post.node.frontmatter.title}</h2>
          <small>Posted by {post.node.frontmatter.author}</small>
          <br></br>
          <div>
            <img style={{ width: "20%" }} src={post.node.frontmatter.img} />
          </div>
          <br />
          <Link className="link" to={`/${post.node.frontmatter.path}`}>
            Read Now
          </Link>
        </div>
      )
    })}
  </Layout>
)
export const pageQuery = graphql`
  query BlogIndex {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
            img
          }
        }
      }
    }
  }
`
export default IndexPage
