import styles from './earth.module.css'

export default function Earth ({...props}) {
    return <div className={styles.earthContainer}>
        <div className={styles.graphicsContainer}>
            <img src="./images/earth/earth.svg" className={styles.background}/>
            <img src="./images/earth/plane.svg" className={styles.plane}/>
        </div>
    </div>
}