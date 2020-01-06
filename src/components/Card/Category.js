import React from "react"
import { Anchor, Text } from "grommet"

export const Category = category => (
  <Text size="small">
    Blog /{" "}
    <Anchor
      href={`/categories/${category}`.toLowerCase()}
      size="small"
      color="#094533"
    >
      {category}
    </Anchor>
  </Text>
)
