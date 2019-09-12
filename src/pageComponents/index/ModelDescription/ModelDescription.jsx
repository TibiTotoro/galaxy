import React from "react"
import styles from './ModelDescription.module.scss'

const ModelDescription = () => (
    <section className={styles.section} id="model-description">
			<div className="wrapper">
				<h2 className={`${styles.title} h1`}>Описание 3d модели Солнечной системы</h2>
				<ul>
					<li className={styles.item}>3d модель солнечной системы позволяет представить себе движение планет и других объектов в солнечной системе.</li>
					<li className={styles.item}>Модель интерактивная, вы можете посмотреть информацию о любом объекте и его фотографии просто кликнув на него левой кнопкой мышки. </li>
					<li className={styles.item}>Управление осуществляется с помощью мыши и клавиш WASD</li>
					<li className={styles.item}>Соотношение размеров планет, а также скорость их вращения не соответствуют реальным, т.к. на экране невозможно было бы увидеть ни один из объектов, кроме Солнца, и было бы незаметно движение планет.</li>
					<li className={styles.item}>Орбиты планет рассчитаны приблизительно, однако при таких масштабах разница с расчетами по законам Кеплера не видна человеческим глазом.</li>
					<li className={styles.item}>Соблюдаются соотношения орбитальных скоростей, скоростей вращения планет вокруг своей оси,  также наклоны орбит относительно плоскости эклиптики. </li>
				</ul>
			</div>
	</section>
)
export default ModelDescription