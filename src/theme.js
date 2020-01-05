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
    },
    font: {
      family: '"Avenir Next", sans-serif',
    },
  },
})
