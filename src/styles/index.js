import styled, { createGlobalStyle } from "styled-components"
import { onSurfaceColor } from "./theme"

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: 'Roboto';
}

body {
    margin: 0;
    padding: 0;
    height: 100%;
}

html {
  height: 100%;
}

:root {
  --device-full-height: 100vh
}
`

export const Title = styled.h2`
  font-family: "Open Sans";
  font-size: 1.8rem;
  color: ${onSurfaceColor};
`
