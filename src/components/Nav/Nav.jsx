import React from "react"
import { Link } from "gatsby"

const Nav = ({ st, items, className }) => {
  console.log(st.link)
  let navItems = items.map(item => {
    return (
      <li className={st.item}>
        <Link
          className={st.link}
          activeClassName={st.link + "active"}
          to={item.link}
        >
          {item.title}
        </Link>
      </li>
    )
  })
  return (
    <nav className={st.nav}>
      <ul className={st.list}>{navItems}</ul>
    </nav>
  )
}
export default Nav
