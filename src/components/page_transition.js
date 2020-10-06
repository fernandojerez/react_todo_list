import React from "react"
import GatsbyPageTransition from "gatsby-plugin-page-transitions"

export const PageTransition = ({ children }) => (
  <GatsbyPageTransition>{children}</GatsbyPageTransition>
)
