import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <div style={{ textAlign: "center" }}>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <div>
        <img style={{ width: "10%" }} src={post.frontmatter.img} />
      </div>
      <h4>
        posted by {post.frontmatter.author} on {post.frontmatter.date}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Link className="link" to="/blog">
        Go back
      </Link>
    </div>
  )
}
export const individualQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        img
        title
        author
        date
      }
    }
  }
`
