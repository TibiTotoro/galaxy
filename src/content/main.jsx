import React from "react"

const slideOne = () => (
    <>
        <h1>Слайд 1</h1>
        <p className="slider__text">3d модель солнечной системы позволяет представить движение планет и других объектов в солнечной системе.</p>
        <a className="btn" href="/solnechnaya-sistema-3d.html">Посмотреть</a><br/>

        <div className="slider__footer">

    <a className="model-desc-link model-desc-link_txt" href="#model-description">Описание модели</a>
    <a className="model-desc-link arrow bounce" href="#model-description"></a>
    </div>
    </>
)
const slideTwo = () =>(
	<>
		<p className="slider__number">02</p>
		<p className="h1">Слайд 2</p> 
		<p className="slider__text">Фотографии, простые и увлекательные описания, понятные и взрослым и детям. Интересные факты о планетах солнечной системы. </p> 
		<a className="btn" href="/solnechnaya-sistema-3d.html">Посмотреть</a>
    </>
)
const slideThree = () =>(
    <>
    	<p className="slider__number">03</p>
		<p className="h1">Слайд 3</p>
		<p className="slider__text">Я не знаю, что здесь можно написать. В общем, в этом разделе сайта есть всякая информация и про солнце, и про карликовые планеты, и про пояса астероидов.  </p> 
		<a className="btn" href="/solnechnaya-sistema-3d.html">Посмотреть</a> 
    </> 
)
const slideFour= () =>(
    <>
        <p className="slider__number">03</p>
        <p className="h1">Слайд 3</p>
        <p className="slider__text">Я не знаю, что здесь можно написать. В общем, в этом разделе сайта есть всякая информация и про солнце, и про карликовые планеты, и про пояса астероидов.  </p> 
        <a className="btn" href="/solnechnaya-sistema-3d.html">Посмотреть</a>   
    </> 
)
export const sliderContent= [slideOne(), slideTwo(), slideThree(), slideFour()]