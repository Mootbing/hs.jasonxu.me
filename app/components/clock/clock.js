import styles from './clock.module.css'

export default function Clock ({farness = 1, ...props}) {

    farness = Math.min(1, farness)

    return <div className={styles.clockContainer}>
        <div className={styles.clockFace}>
            <img src="./images/clock/clock_background.svg" className={styles.background}/>
            <img src="./images/clock/clock_hour.svg" className={styles.hourHand} style={{
                transform: `rotate(-${farness * 360}deg)`
            }}/>
            <img src="./images/clock/clock_minute.svg" className={styles.minuteHand} style={{
                transform: `rotate(-${farness * 360 * 12}deg)`
            }}/>

            <img src="./images/clock/clock_text.svg" className={styles.clockText} style={{
                transform: `rotate(${farness * 360 * 12}deg)`,
                opacity: (farness - 0.9) * 10 
            }}/>
        </div>
    </div>
}