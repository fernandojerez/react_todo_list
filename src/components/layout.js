/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
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
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { currentTheme } from "../store/theme"
import { ThemeChooser } from "./theme_chooser"

const Header = styled.header`
  display: flex;
  align-items: center;
  background-color: ${primaryColor};
  color: ${onPrimaryColor};
  padding: ${padding};
  ${elevation(8)};

  > h1 {
    font-family: "Open Sans";
    font-size: 2rem;
    flex-grow: 1;
    font-weight: 100;
  }
`

const Content = styled.main`
  position: relative;
  padding: ${padding};
  flex-grow: 1;
`

const LayoutArea = styled.div`
  display: flex;
  flex-direction: column;
  height: var(--device-full-height, 100vh);
  width: 100vw;
  overflow: auto;
  background-color: ${backgroundColor};
  color: ${onBackgroundColor};
`

const Layout = ({ children }) => {
  useEffect(() => {
    const mobile_device = window.navigator.userAgent
      .toLowerCase()
      .match(/mobile/)
    if (mobile_device) {
      document.documentElement.style.setProperty(
        "--device-full-height",
        window.innerHeight + "px"
      )
    } else {
      document.documentElement.style.setProperty(
        "--device-full-height",
        "100vh"
      )
    }
  }, [])
  const theme = useSelector(currentTheme)
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
    "/update_item": 0,
    "/map": 1,
  }
  return (
    <ThemeProvider theme={{ mode: theme }}>
      <LayoutArea>
        <Header>
          <h1>{data.site.siteMetadata?.title || `Title`}</h1>
          <ThemeChooser />
        </Header>
        <Content>{children}</Content>
        <BottomTabs selected={tabs[window.location.pathname]}>
          <Tab label="Todo List" icon={faClipboardList} to="/" />
          <Tab label="Map" icon={faMapMarkedAlt} to="/map" />
        </BottomTabs>
      </LayoutArea>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
