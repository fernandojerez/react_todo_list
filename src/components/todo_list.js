import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons"
import { navigate } from "gatsby"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { todoList } from "../store/todo_list"
import { padding } from "../styles/theme"
import { IconButton } from "./buttons"
import { SimpleMessage } from "./messages"
import { Item } from "./todo_item"

const ToolbarStyled = styled.div`
  text-align: right;
  padding-top: ${padding};
  padding-bottom: ${padding};
`

const TodoListToolBar = () => {
  const addItem = event => {
    navigate("/add_item")
  }
  return (
    <ToolbarStyled>
      <IconButton icon={faCalendarPlus} label="Agregar" onClick={addItem} />
    </ToolbarStyled>
  )
}

export const TodoList = () => {
  const [items, setItems] = useState([])
  const stored_items = useSelector(todoList)
  useEffect(() => {
    setItems(stored_items)
  }, [stored_items, items])
  return (
    <>
      <TodoListToolBar />
      {items.length === 0 ? (
        <SimpleMessage>No hay tareas registradas</SimpleMessage>
      ) : (
        items.map((itm, i) => (
          <Item
            key={itm.id}
            item={itm}
            onClick={() => navigate(`/show_item?id=${itm.id}`)}
          />
        ))
      )}
    </>
  )
}
