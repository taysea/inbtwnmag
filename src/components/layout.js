/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import { Box, Grommet } from "grommet"
import { customTheme } from "../theme"

// import Header from "./header"
// import "./layout.css"
import { NavBar } from "."
import { Footer } from "."

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <Grommet theme={customTheme} full>
      <>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <NavBar />
        <Box as="main">{children}</Box>
        <Footer />
      </>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
