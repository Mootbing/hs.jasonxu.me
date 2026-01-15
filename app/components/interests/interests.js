import { useEffect, useState } from 'react'
import styles from './intersts.module.css'

export default function Intersts ({...props}) {

    const [mobile, setMobile] = useState(false)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setMobile(globalThis?.window.innerWidth < 700)
        })
        setMobile(globalThis?.window.innerWidth < 700)
    }, [])

    return <div className={styles.interestContainer} {...props}>
        <p className={styles.interestHeading}>INTERESTED? INSPIRED?</p>
        <a className={styles.email} href="mailto:HIM@JASONXU.ME">{!mobile ? "HIM@JASONXU.ME" : `
WORKWITH@
JASONXU.ME
        `}</a>
        <img src="./images/expo/or.svg" className={styles.or}/>
        <a href="https://contact.jasonxu.me" target="_blank" rel="noopener noreferrer">
            <img src="./images/expo/viewCard.svg" className={styles.or}/>
        </a>
    </div>
}