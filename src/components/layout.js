import React from "react"
import propTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import "../style/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: propTypes.element,
}

export default Layout
