

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "~l/Header/Header"
import "~s/base.scss"

import Footer from "~l/Footer/Footer"

const Layout = ({ children }) => {

  return (
    <>
        <Header siteTitle='Супер сайт' />
          <div className="wrapper">
            <main>{children}</main>
            </div>
        <Footer />

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
