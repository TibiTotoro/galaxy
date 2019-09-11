import React from "react"
import styles from './Footer.module.scss'
import { Link } from "gatsby"

const Footer = () => (
    <footer className={styles.footer}>
			<div class="wrapper">
				<p  className={styles.copyright} >Все права на любые материалы, опубликованные на сайте, защищены в соответствии с российским и международным законодательством об авторском праве. Использование любых материалов, размещенных на сайте, допускается только с разрешения правообладателя и ссылкой на сайт https://galaxy3d.ru/</p>
				<p  className={styles.policy} ><Link to="/policy/">Политика обработки персональных данных</Link ></p>	
			</div>
		</footer>
)
export default Footer