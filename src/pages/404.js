import React from "react"

import Layout from "~l/Layout/Layout"
import SEO from "../components/seo"
import {Link} from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 - страницы нет" />
    <h1>404</h1>
    <p>Что-то пошло не так. Похоже, такой страницы нет. 
      Но точно есть <Link to="/">Главная</Link>
    </p>
  </Layout>
)

export default NotFoundPage
