import React from "react"
import { Link } from "gatsby"

const Hamburger = ({ className, items }) => {
  let navItems = items.map(item => {
    return (
      <li className={className + "__item"}>
        <Link
          className={className + "__link"}
          activeClassName={className + "__link_" + "active"}
          to={item.link}
        >
          {item.title}
        </Link>
      </li>
    )
  })
  return (
    <nav className={className}>
      <ul className={className + "__list"}>{navItems}</ul>
    </nav>
  )
}
export default Nav
