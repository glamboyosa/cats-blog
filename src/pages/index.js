import React from "react"
import { Link } from "gatsby"
import "../components/layout.css"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="A cat blog" />
    <h1>
      Hi people. Welcome to the cat blog <span class="heart">❤</span>
    </h1>
    <p>This site is built by Timothy Ogbemudia using Gastby.js</p>
    <p>Nothing fancy but hope you enjoy it.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link className="link" to="/blog">
      Go to blog{" "}
    </Link>
  </Layout>
)

export default IndexPage
