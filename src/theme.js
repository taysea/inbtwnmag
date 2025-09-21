import { grommet } from "grommet/themes"
import { deepMerge } from "grommet/utils"

export const customTheme = deepMerge(grommet, {
  name: "my theme",
  global: {
    colors: {
      background: {
        light: "#FFF",
        dark: "#000",
      },
      "dark-1": "#222",
      text: {
        light: "#222",
      },
      focus: "black",
      navy: "#134097",
    },
    font: {
      family: '"Avenir Next", sans-serif',
    },
    selected: {
      background: "#CCC",
    },
  },
  button: {
    padding: {
      horizontal: '16px',
    },
    gap: '6px',
    border: {
      color: "#000",
    },
    hover: {
      border:{ 
        size: '2px',
      },
    },
    extend: ({ hasLabel }) => `font-weight: 500;
    &:hover svg {
      ${hasLabel ? `transform: translateX(5px);` : ``}
      transition: 0.5s cubic-bezier(0.2, 0.0, 0, 1.0);
    }
    `,
  },
  formField: {
    round: "xsmall",
    size: "small",
    label: {
      size: "xsmall",
      margin: {
        horizontal: "none",
      },
    },
    border: {
      side: "all",
      color: "#ccc",
    },
  },
  select: {
    icons: {
      color: "text",
    },
    options: {
      text: {
        size: "small",
      },
    },
  },
})
