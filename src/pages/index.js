import React from "react"
import { PageTransition } from "../components/page_transition"
import SEO from "../components/seo"
import { TodoList } from "../components/todo_list"

const IndexPage = () => (
  <PageTransition>
    <SEO title="Todo List" />
    <TodoList />
  </PageTransition>
)

export default IndexPage
