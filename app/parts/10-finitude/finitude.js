import Image from 'next/image'
import styles from './finitude.module.css'
import { ScrollContext } from '@/app/contexts/scrollContext'
import { useContext, useEffect, useReducer, useState } from 'react'
import RandomSky from '@/app/components/randomSky/randomSky'

export default function Finitude ({...props}) {

    const {scrollY, windowHeight} = useContext(ScrollContext)

    return <>
        <div className={styles.primalContainer}{...props}  style={{
            opacity: scrollY > 17 * windowHeight ? 1 - (scrollY - 15 * windowHeight) / (windowHeight/2) : (scrollY - windowHeight * 16 + windowHeight) / 100,
            transition: '0.15s ease-out'
        }}>
            <RandomSky dimTop offset={15 * windowHeight}/>
            <div className={styles.aboveStarsContainer}>
                <div className={styles.quoteContainer}>
                    {/* <p className={styles.openQuote}>
“
                    </p> */}
                    <p className={styles.quoteText}>
Having limited capabilities communicating then in English, I found solace in art, which transcended language barriers.
                    </p>
                    {/* <p className={styles.closedQuote}>
”
                    </p> */}
                </div>
                <p className={styles.name}>
JASON XU
                </p>
            </div>
            {/* todo tmr */}
        </div>
        <div className={styles.scrollContainer}/>
    </>
}