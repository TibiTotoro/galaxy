import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Nav from "~c/Nav/Nav"
import './HeaderNav.scss'
class HeaderNav extends React.Component {
  state = {
    showMenu: false,
  }

  click = () => {
    if (document.body.clientWidth < 900) {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }))
  }
    else {
      this.setState(
        {
          showMenu: true
        }
      )

    }
  }
  render() {
    const menu = [
      {
        title: "main",
        href: "/",
      },
      {
        title: "TEST",
        href: "/",
      },
      {
        title: "test",
        href: "/",
      },
    ]
    return (
      <div className = "HeaderNav">
         <Nav items={menu} className = {this.state.showMenu ? "HeaderNav__nav active" : "HeaderNav__nav"}/>
         <button className = {"Btn"} onClick = {this.click}>{this.state.showMenu.toString()}</button>
      </div>
      )
  }
}
export default HeaderNav
