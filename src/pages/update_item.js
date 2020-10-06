import React, { useEffect, useState } from "react"
import SEO from "../components/seo"
import { TodoItemEditor } from "../components/todo_item"
import { PageTransition } from "../components/page_transition"
import { navigate } from "gatsby"
import { parseQueryString } from "../utils"
import { getItem, updateItem } from "../store/todo_list"
import { useDispatch, useSelector } from "react-redux"

const PaintEditItem = ({ id }) => {
  const [item, setItem] = useState(null)
  const found_item = useSelector(getItem(id))
  useEffect(() => {
    setItem(found_item)
  }, [found_item, item])
  const dispatch = useDispatch()
  const saveItemHandler = item => {
    dispatch(
      updateItem({
        ...item,
        id,
      })
    )
    navigate(-1)
  }
  return (
    <>
      <SEO title="Ver Item" />
      {item && (
        <TodoItemEditor
          title="Actualizar Tarea"
          item={item}
          onSubmit={saveItemHandler}
        />
      )}
    </>
  )
}

const EditItem = ({ location }) => {
  const { id } = parseQueryString(location.search)
  if (id) {
    return (
      <PageTransition>
        <PaintEditItem id={id} />
      </PageTransition>
    )
  }
  navigate("/404")
}

export default EditItem
