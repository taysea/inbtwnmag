import styled from "styled-components"
import { Link } from "gatsby"
import { Text } from "grommet"

export const BodyText = styled(Text)`
  font-family: "Tiempos", serif;
  line-height: 1.75em;
  color: #000;
`
export const CardAnchor = styled(Link)`
  font-weight: bold;
  color: #000;
  text-decoration: none;
  :visited {
    color: inherit;
  }
  width: 100%;
`
