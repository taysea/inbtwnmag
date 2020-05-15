import React, { useContext } from "react"
import { graphql, StaticQuery } from "gatsby"
import { ResponsiveContext, Box } from "grommet"
import SkuCard from "./SkuCard"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe("pk_live_3YKDw9oL7l1LwRwLe36TgNAQ00228odXZO")

export const Skus = ({ addToCart }) => {
  const size = useContext(ResponsiveContext)
  return (
    <StaticQuery
      query={graphql`
        query SkusForProduct {
          skus: allStripeSku {
            group(field: product___id) {
              edges {
                node {
                  id
                  product {
                    name
                  }
                  attributes {
                    name
                  }
                  price
                  currency
                  image
                }
              }
            }
          }
        }
      `}
      render={({ skus }) => (
        <Box width="medium" margin={size === "small" ? "auto" : undefined}>
          {skus.group.map(
            ({ edges }) =>
              edges[0].node.id !== "sku_HHKbm0mtjBUOvV" && (
                <SkuCard
                  key={edges[0].node.id}
                  sku={edges[0].node}
                  stripePromise={stripePromise}
                />
              )
          )}
        </Box>
      )}
    />
  )
}
