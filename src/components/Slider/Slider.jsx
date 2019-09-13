
import React from "react"
import styles from './Slider.module.scss'

const Slider = ({items}) => {
    const slides = items.map((item, i) => {
        let cn 
        if (i%2 === 0){
            cn = styles.decrease
        }   
        else cn = styles.increase
        let className
        if (item.type === 'itemFirst') {
                className = `${styles.item} ${styles.itemFirst}`
        }
        else if (item.type === 'itemActive'){
                className = `${styles.item} ${styles.itemActive}`
        }   
        else className = styles.item
        

        return(
        <div className = {`${className} ${cn}`} key = {i}>
            <div className={styles.img}  ></div>
            <div className={styles.content}>
            <div className="container">
                {item.content}   
            </div>
            </div>
        </div>)
    })
    return(
        <div className={styles.slider}>
            {slides}
        </div>
    )
}
export default Slider
