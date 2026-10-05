import { Link } from "gatsby"
import styled from "styled-components"

export const CategoryLink = styled(Link)`
  font-weight: 600;
  text-decoration: none;
  color: #134097;
  transition: text-decoration 0.5s ease-in-out;
  &:hover {
    text-decoration: none;
  }
  font-size: ${props => props.size};
`
