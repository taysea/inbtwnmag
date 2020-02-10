/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import { Box, Grommet, Main } from "grommet"
import { customTheme } from "../theme"
import GlobalFonts from "../fonts/fonts"

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
    <Grommet theme={customTheme} full style={{ height: "auto" }}>
      <GlobalFonts />
      <Box height={{ min: "100vh" }}>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <NavBar />
        <Main overflow="visible">{children}</Main>
        <Footer />
      </Box>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
