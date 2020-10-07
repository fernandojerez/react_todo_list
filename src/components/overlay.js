import React from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import { backgroundColor, onBackgroundColor, padding } from "../styles/theme"
import { OutlineButton, Button } from "./buttons"

const OverlayButtons = styled.div`
  text-align: center;
  padding: ${padding};

  > :nth-child(1) {
    margin-right: ${padding};
  }
`

const Overlay = styled.div`
  border-radius: ${padding};
  padding: ${padding};
  margin: ${padding};
  background-color: ${backgroundColor};

  > * {
    color: ${onBackgroundColor};
  }
`

const OverlayArea = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  justify-content: center;
  align-items: center;
`

const OverlayShim = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
`

export const Confirm = ({ title, msg, onConfirm, onCancel }) => {
  return ReactDOM.createPortal(
    <>
      <OverlayShim />
      <OverlayArea>
        <Overlay>
          <h3>{title}</h3>
          <hr />
          <p>{msg}</p>
          <hr />
          <OverlayButtons>
            <OutlineButton onClick={onConfirm}>Aceptar</OutlineButton>
            <Button onClick={onCancel}>Cancelar</Button>
          </OverlayButtons>
        </Overlay>
      </OverlayArea>
    </>,
    document.getElementById("portal")
  )
}
