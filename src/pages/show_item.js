import React from "react"
import SEO from "../components/seo"
import { TodoItemViewer } from "../components/todo_item"
import { PageTransition } from "../components/page_transition"
import { navigate } from "gatsby"
import { parseQueryString } from "../utils"
import { getItem } from "../store/todo_list"
import { useSelector } from "react-redux"

const PaintShowItem = ({ id }) => {
  const item = useSelector(getItem(id))
  return (
    <>
      <SEO title="Ver Item" />
      {item && <TodoItemViewer item={item} />}
    </>
  )
}

const ShowItem = ({ location }) => {
  const { id } = parseQueryString(location.search)
  if (id) {
    return (
      <PageTransition>
        <PaintShowItem id={id} />
      </PageTransition>
    )
  }
  navigate("/404")
}

export default ShowItem
