"use client"

import Image from 'next/image'
import styles from './loading.module.css'
import { useEffect, useReducer, useState } from 'react'

export default function Loading ({...props}) {

    const [loadingPercentage, setLoadingPercentage] = useReducer((state, action) => {
        if (state >= 100) {
            return 100
        }
        return state + 1
    }, 0)

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingPercentage()
        }, 10)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return <div className={styles.fullPageContainer} {...props}>
        <div className={styles.progressBar}/>
        <center className={styles.textContainer} style={{display: 'none'}}>
            <p className={styles.loadingText}>{loadingPercentage}</p>
        </center>
    </div>
}