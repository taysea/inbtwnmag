import React from "react"
import { Text } from "grommet"
import { CardAnchor } from "./CardImage"

export const CardTitle = ({ slug, title }) => (
  <CardAnchor href={slug}>
    <Text weight="bold">{title}</Text>
  </CardAnchor>
)
