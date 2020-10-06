import React from "react"
import SEO from "../components/seo"
import { TodoItemEditor } from "../components/todo_item"
import { PageTransition } from "../components/page_transition"
import { useDispatch } from "react-redux"
import { addItem } from "../store/todo_list"
import { navigate } from "gatsby"
import { v4 as uuid } from "uuid"

const MapPage = () => {
  const dispatch = useDispatch()
  const saveItemHandler = item => {
    dispatch(
      addItem({
        ...item,
        id: uuid(),
      })
    )
    navigate(-1)
  }
  return (
    <PageTransition>
      <SEO title="Agregar tarea" />
      <TodoItemEditor title="Agregar tarea" onSubmit={saveItemHandler} />
    </PageTransition>
  )
}

export default MapPage
