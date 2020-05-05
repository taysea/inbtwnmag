import { createGlobalStyle } from "styled-components"
import TiemposBold from "../fonts/TiemposBold.woff"
import TiemposRegular from "../fonts/TiemposRegular.woff"

export default createGlobalStyle`
    @font-face {
        font-family: 'Tiempos';
        src: url(${TiemposRegular}) format('woff');
        font-style: normal;
    }
    @font-face {
        font-family: 'Tiempos';
        src: url(${TiemposBold}) format('woff');
        font-weight: bold;
    }
`
