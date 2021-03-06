import React from "react"
import { PageTransition } from "../components/page_transition"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <PageTransition>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
  </PageTransition>
)

export default NotFoundPage
