import { css } from "styled-components"
import theme from "styled-theming"

export const primaryColor = theme("mode", {
  light: "#4299fb",
  dark: "#96ccff",
})

export const secondaryColor = theme("mode", {
  light: "#ffc996",
  dark: "#ffc996",
})

export const primaryVariantColor = theme("mode", {
  light: "#3a79d9",
  dark: "#3a79d9",
})

export const secondaryVariantColor = theme("mode", {
  light: "#f5773b",
  dark: "#ffc996",
})

export const backgroundColor = theme("mode", {
  light: "#FFFFFF",
  dark: "#121212",
})

export const surfaceColor = theme("mode", {
  light: "#FFFFFF",
  dark: "#121212",
})

export const onBackgroundColor = theme("mode", {
  light: "#000000",
  dark: "#FFFFFF",
})

export const onSurfaceColor = theme("mode", {
  light: "#000000",
  dark: "#FFFFFF",
})

export const onPrimaryColor = theme("mode", {
  light: "#FFFFFF",
  dark: "#000000",
})

export const onSecondaryColor = theme("mode", {
  light: "#000000",
  dark: "#000000",
})

const ELEVATION_VALUES = [
  "box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12);",
  "box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0,0,0,.12);",
  "box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);",
  "box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 1px 8px 0px rgba(0,0,0,.12);",
  "box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);",
  "box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 5px 8px 0px rgba(0, 0, 0, 0.14),0px 1px 14px 0px rgba(0,0,0,.12);",
  "box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12);",
  "box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2),0px 7px 10px 1px rgba(0, 0, 0, 0.14),0px 2px 16px 1px rgba(0,0,0,.12);",
  "box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);",
  "box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2),0px 9px 12px 1px rgba(0, 0, 0, 0.14),0px 3px 16px 2px rgba(0,0,0,.12);",
  "box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2),0px 10px 14px 1px rgba(0, 0, 0, 0.14),0px 4px 18px 3px rgba(0,0,0,.12);",
]

export const elevation = level => {
  if (level >= ELEVATION_VALUES.length) {
    return ELEVATION_VALUES[ELEVATION_VALUES.length - 1]
  }
  return ELEVATION_VALUES[level]
}

export const screenSizes = {
  small: 400,
  medium: 480,
  mediumL: 960,
  large: 1140,
}

export const above = Object.keys(screenSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${screenSizes[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const padding = "10px"
