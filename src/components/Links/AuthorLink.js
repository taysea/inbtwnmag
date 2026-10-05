import { Link } from "gatsby"
import styled from "styled-components"

export const AuthorLink = styled(Link)`
  text-decoration: none;
  color: ${props =>
    props.theme.global.colors?.[props.color]?.[
      props.theme.dark ? "dark" : "light"
    ] || "#555555"};
  &:hover {
    text-decoration: underline;
    text-decoration-color: #555555;
  }
  font-size: ${props => props.size};
`
