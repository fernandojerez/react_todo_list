import React, { useState } from "react"

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
import { Confirm } from "./overlay"
import { navigate } from "gatsby"
import { useDispatch } from "react-redux"
import { removeItem } from "../store/todo_list"

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
  display: flex;
  flex-direction: row;
  padding: ${padding};
  border-left: 4px solid ${secondaryColor};
  margin-top: calc(${padding} / 2);
  margin-bottom: calc(${padding} / 2);
  ${elevation(4)}
`

const ItemBoxContent = styled.div`
  flex-grow: 1;
`

const ItemBoxButtons = styled.div`
  align-self: flex-end;
  display: flex;

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
    ...item,
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
          value={state.title}
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
  const [confirm_delete, setConfirmDelete] = useState(false)
  const dispatch = useDispatch()
  const editItem = event => {
    event.stopPropagation()
    event.preventDefault()
    navigate(`/update_item?id=${item.id}`)
  }
  const deleteItem = event => {
    event.stopPropagation()
    event.preventDefault()
    dispatch(removeItem(item.id))
    setConfirmDelete(false)
  }
  return (
    <>
      <ItemBox>
        <ItemBoxContent onClick={onClick}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </ItemBoxContent>
        <ItemBoxButtons>
          <FlatIconButton icon={faPencilAlt} onClick={editItem} />
          <FlatIconButton
            icon={faTrashAlt}
            onClick={() => setConfirmDelete(true)}
          />
        </ItemBoxButtons>
      </ItemBox>
      {confirm_delete && (
        <Confirm
          title="Desea eliminar la tarea?"
          msg={`Esta seguro que desea eliminar la tarea ${item.title}`}
          onConfirm={deleteItem}
          onCancel={() => setConfirmDelete(false)}
        />
      )}
    </>
  )
}
