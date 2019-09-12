import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Nav from "~c/Nav/Nav"
import Swipe from "react-easy-swipe"
import styles from "./HeaderNav.module.scss"

class HeaderNav extends React.Component {
  state = {
    showMenu: false,
  }

  click = () => {
    console.log("test")
    if (document.body.clientWidth < 900) {
      this.setState(prevState => ({
        showMenu: !prevState.showMenu,
      }))
    } else {
      this.setState({
        showMenu: true,
      })
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
      <>
        <div
          className={
            this.state.showMenu
              ? `${styles.active} ${styles.wrapper}`
              : `${styles.wrapper}`
          }
        >
          <Swipe onSwipeLeft={this.click}>
            <div>
              <Nav items={menu} st={styles} className = 'test'/>
            </div>
          </Swipe>
        </div>
        <button className={styles.btn} onClick={this.click}>
          {this.state.showMenu.toString()}
        </button>
        <div  className={
            this.state.showMenu
              ? `${styles.overlay_active} ${styles.overlay}`
              : `${styles.overlay}`
          } onClick={this.click}></div>
      </>
    )
  }
}
export default HeaderNav
