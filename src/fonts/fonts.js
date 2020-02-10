import { createGlobalStyle } from "styled-components"
import PTSerif from "../fonts/PTSerif.woff"
import PTSerifBold from "../fonts/PT_Serif-Bold.woff"

export default createGlobalStyle`
    @font-face {
        font-family: 'PT Serif';
        src: local('PT Serif'),
        url(${PTSerif}) format('woff');
        font-style: normal;
    }
    @font-face {
        font-family: 'PT Serif';
        src: local('PT Serif'),
        url(${PTSerifBold}) format('woff');
        font-style: bold;
    }
`
