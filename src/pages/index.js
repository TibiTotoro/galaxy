import React from "react"
import { Link } from "gatsby"

import ModelDescription from "~p/index/ModelDescription/ModelDescription"
import Layout from "~l/Layout/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SliderContainer from "~cn/SliderContainer/SliderContainer"
import {sliderContent} from "~content/main"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SliderContainer content = {sliderContent} />
    <div className='wrapper'>
 
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
