
import React from "react"
import styles from './Slider.module.scss'



class Slider extends React.Component {
	constructor (props) {
		super(props);
	}
    state = {
		activeNum: 0,
    }

	componentDidMount() {
		this.autoplay()
	}

    autoplay = () => setInterval(() => {
		this.next();
	}, 100000);

    next = () => {
		this.setState((prevState) => {
			if (prevState.activeNum < content.length - 1)
			return {activeNum: prevState.activeNum + 1}			
			else return {activeNum: 0}		
		})
	}

    render(){
       
        const items = content.map((item, i) => {
			let cn = styles.img_ + i
					
			return(
			<div className = {i === this.state.activeNum ? `${styles.item} ${styles.itemActive} ` :  styles.item }>
				<div className={styles.img}  ></div>
				<div className={styles.content}>
				<div class="container">
					{item}
				</div>
				</div>
			</div>)
        })
        return(
            <div className={styles.slider}>
              {items}
            </div>
        )
    }
}

export default Slider


const slideOne = () =>(<>
		<h1>Солнечная система 3d онлайн</h1>
		<p class="slider__text">3d модель солнечной системы позволяет представить движение планет и других объектов в солнечной системе.</p>
		<a class="btn" href="/solnechnaya-sistema-3d.html">Посмотреть</a><br/>

		<div class="slider__footer">

<a class="model-desc-link model-desc-link_txt" href="#model-description">Описание модели</a>
<a class="model-desc-link arrow bounce" href="#model-description"></a>
</div>
</>)
	 
const slideTwo = () =>(
	<>

		<p class="slider__number">02</p>
		<p class="h1">Планеты и спутники</p> 
		<p class="slider__text">Фотографии, простые и увлекательные описания, понятные и взрослым и детям. Интересные факты о планетах солнечной системы. </p> 
		<a class="btn" href="/solnechnaya-sistema-3d.html">Посмотреть</a>
	   
</>)
const slideThree = () =>(		<>

		<p class="slider__number">03</p>
		<p class="h1">Карликовые планеты и астероиды</p>
		<p class="slider__text">Я не знаю, что здесь можно написать. В общем, в этом разделе сайта есть всякая информация и про солнце, и про карликовые планеты, и про пояса астероидов.  </p> 
		<a class="btn" href="/solnechnaya-sistema-3d.html">Посмотреть</a> 
	  
</> 
)

const content = [slideOne(), slideTwo(), slideThree()]




/*<section class="main-slider">
			<div class="slider">
				<div class="slider-list">
				
					
				
				<div class="slider-buttons">
					<span class="slider-buttons__prev"></span>
					<span class="slider-buttons__next"></span>
				</div>
			</div>
			
		</section>*/