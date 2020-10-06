import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  elevation,
  onPrimaryColor,
  onSurfaceColor,
  padding,
  primaryColor,
  surfaceColor,
  onSecondaryColor,
  primaryVariantColor,
  secondaryColor,
  secondaryVariantColor,
} from "../styles/theme"
import styled from "styled-components"

export const Button = styled.button`
  background-color: ${primaryColor};
  color: ${onPrimaryColor};
  padding: ${padding};
  border-radius: ${padding};
  border: 1px solid ${primaryColor};
  font-size: 0.9rem;
  ${elevation(4)}

  &:focus {
    outline: none;
  }

  &:active {
    background-color: ${primaryVariantColor};
  }

  > * {
    color: ${onPrimaryColor};
  }
`

export const OutlineButton = styled(Button)`
  background-color: ${surfaceColor};
  color: ${primaryColor};
  border: 1px solid ${onSurfaceColor};
  ${elevation(0)}
`

export const FlatButton = styled(Button)`
  background-color: ${secondaryColor};
  color: ${onSecondaryColor};
  border: 1px solid ${secondaryColor};
  border-radius: 10;
  ${elevation(0)}

  &:active {
    background-color: ${secondaryVariantColor};
  }

  > * {
    color: ${onSecondaryColor};
  }
`

export const IconButton = ({ label, icon, onClick }) => (
  <Button onClick={onClick}>
    <FontAwesomeIcon icon={icon} /> {label}
  </Button>
)

export const FlatIconButton = ({ icon, onClick }) => (
  <FlatButton onClick={onClick}>
    <FontAwesomeIcon icon={icon} />
  </FlatButton>
)

IconButton.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
}

FlatIconButton.propTypes = {
  icon: PropTypes.object.isRequired,
}
