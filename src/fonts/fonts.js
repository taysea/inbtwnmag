import { createGlobalStyle } from "styled-components"
import PTSerif from "../fonts/PtSerif.woff"

export default createGlobalStyle`
    @font-face {
        font-family: 'PT Serif';
        src: local('PT Serif'),
        url(${PTSerif}) format('woff');
        font-style: normal;
    }
`
