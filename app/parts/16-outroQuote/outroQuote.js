import Image from 'next/image'
import styles from './outroQuote.module.css'
import { ScrollContext } from '@/app/contexts/scrollContext'
import { useContext, useEffect, useReducer, useState } from 'react'
import RandomSky from '@/app/components/randomSky/randomSky'

export default function OutroQuote ({...props}) {

    const {scrollY, windowHeight} = useContext(ScrollContext)

    return <>
        <div className={styles.primalContainer}{...props}  style={{
            opacity: scrollY > 34 * windowHeight ? 1 - (scrollY - 34 * windowHeight) / (windowHeight/2) : (scrollY - windowHeight * 32.5) / 100,
            transition: '0.15s ease-out'
        }}>
            <RandomSky dimTop offset={31 * windowHeight}/>
            <div className={styles.aboveStarsContainer}>
                <div className={styles.quoteContainer}>
                    <p className={styles.openQuote}>
“
                    </p>
                    <p className={styles.quoteText}>
I&apos;ve only penned a few
pages, yet the unwritten
chapters brim with boundless optimism, eager
to unveil the wondrous 
tales that await me in the
bright tapestry of the future.
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