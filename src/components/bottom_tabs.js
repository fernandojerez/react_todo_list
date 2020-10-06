import React, { useContext, useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
  primaryColor,
  elevation,
  onPrimaryColor,
  padding,
  primaryVariantColor,
} from "../styles/theme"
import { navigate } from "gatsby"

const SelectedTabContext = React.createContext({
  selected: 0,
  setSelected: selected => {},
})

const BottomTabsStyle = styled.div`
  display: flex;
  align-items: center;
  background-color: ${primaryColor};
  color: ${onPrimaryColor};
  ${elevation(8)}
`

const TabStyle = styled.div`
  display: inline-flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${padding};

  border-top: 6px solid
    ${props => (props.selected ? primaryVariantColor : "transparent")};

  > :nth-child(2) {
    font-size: 0.8rem;
    padding-top: calc(${padding} / 2);
  }
`

export const BottomTabs = ({ children, selected = 0 }) => {
  const [_selected, setSelected] = useState(selected)
  return (
    <SelectedTabContext.Provider value={{ selected: _selected, setSelected }}>
      <BottomTabsStyle>
        {React.Children.toArray(children).map((itm, i) => {
          return React.cloneElement(itm, { __index__: i })
        })}
      </BottomTabsStyle>
    </SelectedTabContext.Provider>
  )
}

BottomTabs.propTypes = {
  selected: PropTypes.number,
}

export const Tab = ({ label, icon, to, __index__ }) => {
  const { selected, setSelected } = useContext(SelectedTabContext)
  const tabClickHandler = event => {
    event.preventDefault()
    setSelected(__index__)
    navigate(to)
  }
  return (
    <TabStyle selected={selected === __index__} onClick={tabClickHandler}>
      <FontAwesomeIcon icon={icon} />
      <div>{label}</div>
    </TabStyle>
  )
}

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
}
