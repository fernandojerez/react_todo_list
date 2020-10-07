import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import { currentTheme, toggle } from "../store/theme"
import styled from "styled-components"
import { onPrimaryColor, padding, primaryVariantColor } from "../styles/theme"

const ThemeChooserStyle = styled.div`
  border-radius: 20px;
  padding: ${padding};
  background-color: ${primaryVariantColor};
  color: ${onPrimaryColor};
`

export const ThemeChooser = ({ className }) => {
  const dispatch = useDispatch()
  const theme = useSelector(currentTheme)

  return (
    <ThemeChooserStyle onClick={() => dispatch(toggle())}>
      <FontAwesomeIcon icon={theme === "light" ? faSun : faMoon} size="lg" />
    </ThemeChooserStyle>
  )
}
