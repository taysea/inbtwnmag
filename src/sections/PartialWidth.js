import React from "react"
import { Box } from "grommet"

export const PartialWidthSection = ({ direction, marginBottom, ...rest }) => (
  <Box
    width="xlarge"
    margin={{ horizontal: "auto", bottom: marginBottom || "medium" }}
    direction={direction || "column"}
    {...rest}
  />
)
