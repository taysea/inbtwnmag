/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import { Grommet, Box } from "grommet"
import { customTheme } from "../theme"

// import Header from "./header"
// import "./layout.css"
import { Navigation } from "./Navigation"

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
        <Box gap="small">
          {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
          <Navigation />
          <main>{children}</main>
        </Box>
        <Box as="footer" background="dark-1" height="small">
          <Box width="xlarge" margin="auto">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Box>
        </Box>
      </>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
