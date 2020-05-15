import { grommet } from "grommet/themes"
import { deepMerge } from "grommet/utils"

export const customTheme = deepMerge(grommet, {
  name: "my theme",
  global: {
    colors: {
      "dark-1": "#222",
      text: {
        light: "#222",
      },
      focus: "black",
    },
    font: {
      family: '"Avenir Next", sans-serif',
    },
    selected: {
      background: "#CCC",
    },
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
