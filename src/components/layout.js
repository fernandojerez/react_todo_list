/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { BottomTabs, Tab } from "./bottom_tabs"
import {
  faClipboardList,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons"
import {
  primaryColor,
  elevation,
  onPrimaryColor,
  padding,
  backgroundColor,
  onBackgroundColor,
} from "../styles/theme"

const Header = styled.header`
  display: flex;
  background-color: ${primaryColor};
  color: ${onPrimaryColor};
  font-size: 2rem;
  font-weight: 100;
  padding: ${padding};
  ${elevation(8)};
`

const Content = styled.main`
  position: relative;
  padding: ${padding};
  flex-grow: 1;
`

const LayoutArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: auto;

  background-color: ${backgroundColor};
  color: ${onBackgroundColor};
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  var tabs = {
    "/": 0,
    "/add_item": 0,
    "/view_item": 0,
    "/map": 1,
  }
  return (
    <LayoutArea>
      <Header>{data.site.siteMetadata?.title || `Title`}</Header>
      <Content>{children}</Content>
      <BottomTabs selected={tabs[window.location.pathname]}>
        <Tab label="Todo List" icon={faClipboardList} to="/" />
        <Tab label="Map" icon={faMapMarkedAlt} to="/map" />
      </BottomTabs>
    </LayoutArea>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
