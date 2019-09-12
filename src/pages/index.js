import React from "react"
import { Link } from "gatsby"

import ModelDescription from "~p/index/ModelDescription/ModelDescription"
import Layout from "~l/Layout/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Slider from "~c/Slider/Slider"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className='wrapper'>
    <h1>Hi people</h1>
    <Slider></Slider> 
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <a href='#' className='Button'>Я кнопка тыц</a> </div>
    <ModelDescription/>
  </Layout>
)

export default IndexPage
