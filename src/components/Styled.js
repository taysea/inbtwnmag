import styled, { createGlobalStyle } from "styled-components"
import { Text } from "grommet"

export default createGlobalStyle`
    @font-face {
        font-family: 'PT Serif';
        src: local('PT Serif')
        url(/src/fonts/PTSerif.woff) format('woff');
        // font-weight: 300;
        font-style: normal;
    }
`

export const BodyText = styled(Text)`
  font-family: "PT Serif", sans-serif;
  line-height: 1.75em;
  color: #000;
`
