import React from "react"


import ModelDescription from "~p/index/ModelDescription/ModelDescription"
import Layout from "~l/Layout/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SliderContainer from "~cn/SliderContainer/SliderContainer"
import {sliderContent} from "~content/main"
import App from '~c/test/test'

const IndexPage = () => (
  <Layout>
    <SEO title="Солнечная система 3d онлайн" description = "3d модель солнечной системы позволяет представить себе движение планет и других объектов в солнечной системе. Модель интерактивная, вы можете посмотреть информацию о любом объекте и его фото"/>
    <App></App>
  </Layout>
)

export default IndexPage
