import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Test from "./Test"
import HeaderNav from "~l/headerNav/headerNav"

import styles from "./header.module.scss"

const Header = ({siteTitle}) => {
    return (
  <header
  className={styles.header}
  >
    <div   className={`wrapper ${styles.wrapper}`} >
      <svg className={styles.logo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title/><g data-name="Layer 2" id="Layer_2"><path fill='#fff' d="M18.42,14a4,4,0,0,0-3-6A4,4,0,0,0,16,6,4,4,0,0,0,8,6a4,4,0,0,0,.58,2,4,4,0,0,0-3,6A4,4,0,1,0,9,20.62a3.95,3.95,0,0,0,6,0A4,4,0,1,0,18.42,14ZM17,12a2,2,0,1,1-2-2A2,2,0,0,1,17,12ZM12,4a2,2,0,1,1-2,2A2,2,0,0,1,12,4ZM9,10a2,2,0,1,1-2,2A2,2,0,0,1,9,10ZM6,20a2,2,0,1,1,2-2A2,2,0,0,1,6,20Zm6,0a2,2,0,1,1,2-2A2,2,0,0,1,12,20Zm6,0a2,2,0,1,1,2-2A2,2,0,0,1,18,20Z"/></g></svg>
   
      <HeaderNav/>
     
      <Test />
    </div>
  </header>)
  
  
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header


