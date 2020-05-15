import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import favicon from "../images/favicon.ico"
import { Skus } from "../components"
import { PartialWidthSection } from "../layouts"

export default ({ location }) => {
  return (
    <Layout location={location} height>
      <Helmet title="Shop | inbtwn.">
        <link rel="icon" href={favicon} />
      </Helmet>
      <PartialWidthSection>
        <Skus />
      </PartialWidthSection>
    </Layout>
  )
}
