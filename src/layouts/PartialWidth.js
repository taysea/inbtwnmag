import React, { useContext } from "react"
import { Box, ResponsiveContext } from "grommet"

export const PartialWidthSection = ({ direction, marginBottom, ...rest }) => {
  const size = useContext(ResponsiveContext)

  return (
    <Box
      width="xlarge"
      margin={{ horizontal: "auto", bottom: marginBottom || "medium" }}
      direction={direction || "column"}
      pad={size === "small" ? { horizontal: "medium" } : "small"}
      {...rest}
    />
  )
}
