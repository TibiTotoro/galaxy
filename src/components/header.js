import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Test from "./Test"
import HeaderNav from "~l/headerNav/headerNav"

const Header = ({siteTitle}) => {
    return (
  <header
    style={{
      background: `transparent`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Test />
      <HeaderNav/>
    </div>
  </header>)
  
  
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header


