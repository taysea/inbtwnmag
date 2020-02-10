import { Link } from "gatsby"
import styled from "styled-components"

export const CategoryLink = styled(Link)`
  font-weight: 600;
  text-decoration: none;
  color: #094533;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #094533;
  }
  ${props => props.size}
`
