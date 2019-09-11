import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginTop: "0",
      width: "100%",
      marginBottom: `1.45rem`,
      height: "10vh",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h3 style={{ textAlign: "center", float: "left" }}>The 🐈 Blog</h3>
      <ul
        style={{
          float: "right",
          display: "flex",
          listStyle: "none",
        }}
      >
        <li style={{ marginRight: "20px" }}>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
