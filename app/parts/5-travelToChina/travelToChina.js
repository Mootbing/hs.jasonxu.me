import Image from 'next/image'
import styles from './travelToChina.module.css'
import { ScrollContext } from '@/app/contexts/scrollContext'
import { useContext, useEffect, useReducer, useState } from 'react'
import Clock from '@/app/components/clock/clock'
import Earth from '@/app/components/earth/earth'
import RandomSky from '@/app/components/randomSky/randomSky'
import Caption from '@/app/components/caption/caption'

export default function TravelToChina ({...props}) {

    const {scrollY, windowHeight} = useContext(ScrollContext)

    return <>
        <div className={styles.primalContainer}{...props}  style={{
            opacity: scrollY > 6 * windowHeight ? 1 - (scrollY - 6 * windowHeight) / (windowHeight/2) : (scrollY - windowHeight * 5.75 + windowHeight) / 100,
            transition: '0.15s ease-out',
            
            transform: `translateY(${-1 * Math.min((scrollY - 3 * windowHeight) / 1, 0)}px) translateX(${Math.min((scrollY - 3 * windowHeight) / 1, 0)}px)`
        }}>
            <RandomSky dimTop/>
            <div className={styles.aboveStarsContainer}>
                <div className={styles.earthContainer}>
                    <Earth />
                </div>
                <Caption title="3 YEARS LATER" subtitle="I moved to China with my mom at 3 years old due to her getting a job there. My dad stayed in America to work."/>
            </div>
        </div>
        <div className={styles.scrollContainer}/>
    </>
}