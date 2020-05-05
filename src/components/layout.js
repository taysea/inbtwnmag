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

const Layout = ({ children, isNavPage, isLanding }) => {
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
        <NavBar
          border={!isNavPage && { side: "bottom", color: "light-3" }}
          isLanding={isLanding}
        />
        <Main background={isNavPage && "#f5f5f5"} overflow="visible">
          {children}
        </Main>
        <Footer />
      </Box>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isNavPage: PropTypes.bool,
  isLanding: PropTypes.bool,
}

export default Layout
