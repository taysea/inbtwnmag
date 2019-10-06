import { grommet } from "grommet/themes"
import { deepMerge } from "grommet/utils"

export const customTheme = deepMerge(grommet, {
  name: "my theme",
  global: {
    colors: {
      text: {
        light: "#000",
      },
    },
    font: {
      family: '"Avenir Next"',
    },
  },
})
