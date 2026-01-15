import Image from 'next/image'
import styles from './timeBorn.module.css'
import { ScrollContext } from '@/app/contexts/scrollContext'
import { useContext, useEffect, useReducer, useState } from 'react'
import Clock from '@/app/components/clock/clock'

export default function TimeBorn ({...props}) {

    const {scrollY, windowHeight} = useContext(ScrollContext)

    return <>
        <div className={styles.primalContainer}{...props}  style={{
            opacity: scrollY > 4.5 * windowHeight ? 1 - (scrollY - 4.5 * windowHeight) / (windowHeight/2) : (scrollY - windowHeight * 3.5 + windowHeight) / 100,
            transition: '0.15s ease-out',
            
            transform: `translateY(${-1 * Math.min((scrollY - 3 * windowHeight) / 1, 0)}px) translateX(${Math.min((scrollY - 3 * windowHeight) / 1, 0)}px) scale(${Math.min(100, Math.max(0, (scrollY - (2 * windowHeight)) / 10))}%)`
        }}>
            <div>
                <Clock farness={(scrollY - 3 * windowHeight)/ 5000 + 0.85}/>
            </div>
        </div>
        <div className={styles.scrollContainer}/>
    </>
}