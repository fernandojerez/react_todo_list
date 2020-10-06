import React, { useState } from "react"
import { navigate } from "gatsby"
import {
  elevation,
  padding,
  primaryColor,
  secondaryColor,
} from "../styles/theme"
import { Title } from "../styles"
import { Button, FlatIconButton, OutlineButton } from "./buttons"
import styled from "styled-components"
import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons"

const ToolbarStyled = styled.div`
  text-align: center;
  padding: ${padding};

  > :nth-child(1) {
    margin-right: ${padding};
  }
`

const ItemPanel = styled.div`
  display: flex;
  flex-direction: column;

  > :nth-child(n + 1) {
    margin-top: ${padding};
    padding: ${padding};
  }

  > :nth-child(n + 1):focus {
    border-color: ${primaryColor};
  }
`

const ItemBox = styled.div`
  position: relative;
  padding: ${padding};
  border-left: 4px solid ${secondaryColor};
  margin-top: calc(${padding} / 2);
  margin-bottom: calc(${padding} / 2);
  ${elevation(4)}
`

const ItemBoxButtons = styled.div`
  position: absolute;
  right: ${padding};
  bottom: ${padding};

  > :nth-child(1) {
    margin-right: ${padding};
  }
`

const ItemToolBar = ({ onOk }) => {
  const goBack = () => {
    navigate("/")
  }
  return (
    <ToolbarStyled>
      {onOk && <Button onClick={onOk}>Guardar</Button>}
      <OutlineButton onClick={goBack}>Cancelar</OutlineButton>
    </ToolbarStyled>
  )
}

export const TodoItemEditor = ({ title, item = {}, onSubmit }) => {
  const [state, setState] = useState({
    title: "",
    description: "",
  })

  const syncStateHandler = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }
  const performTaskHandler = () => {
    onSubmit(state)
  }
  return (
    <>
      <Title>{title}</Title>
      <ItemPanel>
        <input
          placeholder="Titulo"
          name="title"
          value={state.value}
          onChange={syncStateHandler}
        />
        <textarea
          rows="10"
          placeholder="Descripción"
          name="description"
          value={state.description}
          onChange={syncStateHandler}
        />
      </ItemPanel>
      <ItemToolBar onOk={performTaskHandler} />
    </>
  )
}

export const TodoItemViewer = ({ item }) => {
  return (
    <>
      <ItemPanel>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </ItemPanel>
      <ItemToolBar />
    </>
  )
}

export const Item = ({ item, onClick }) => {
  return (
    <ItemBox onClick={onClick}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <ItemBoxButtons>
        <FlatIconButton icon={faPencilAlt} />
        <FlatIconButton icon={faTrashAlt} />
      </ItemBoxButtons>
    </ItemBox>
  )
}
