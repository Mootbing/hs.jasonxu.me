import Image from 'next/image'
import styles from './introQuote.module.css'
import { ScrollContext } from '@/app/contexts/scrollContext'
import { useContext, useEffect, useReducer, useState } from 'react'
import RandomSky from '@/app/components/randomSky/randomSky'

export default function IntroQuote ({...props}) {

    const {scrollY, windowHeight} = useContext(ScrollContext)

    return <>
        <div className={styles.primalContainer}{...props}  style={{
            opacity: scrollY > 3 * windowHeight ? 1 - (scrollY - 3 * windowHeight) / (windowHeight/2) : (scrollY - windowHeight * 1 * 2.5 + windowHeight) / 100,
            transition: '0.15s ease-out'
        }}>
            <RandomSky dimTop/>
            <div className={styles.aboveStarsContainer}>
                <div className={styles.quoteContainer}>
                    <p className={styles.openQuote}>
“
                    </p>
                    <p className={styles.quoteText}>
The odds of a single soul&apos;s
arrival are infinitesimal, 
yet against all cosmic
odds, they are here,
an extraordinary convergence
of chance and destiny.
                    </p>
                    <p className={styles.closedQuote}>
”
                    </p>
                </div>
                <p className={styles.name}>
UNKNOWN
                </p>
            </div>
            {/* todo tmr */}
        </div>
        <div className={styles.scrollContainer}/>
    </>
}