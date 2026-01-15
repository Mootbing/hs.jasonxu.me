import Image from 'next/image'
import styles from './desktop.module.css'
import { ScrollContext } from '@/app/contexts/scrollContext'
import { useContext, useEffect, useReducer, useState } from 'react'
import Clock from '@/app/components/clock/clock'
import Earth from '@/app/components/earth/earth'
import RandomSky from '@/app/components/randomSky/randomSky'
import Caption from '@/app/components/caption/caption'
import PythonIcon from '@/app/components/pythonIcon/pythonIcon'

export default function Desktop ({...props}) {

    const {scrollY, windowHeight} = useContext(ScrollContext)

    // console.log(Math.max((scrollY - windowHeight * 26.4), 100))

    return <>
        <div className={styles.primalContainer} {...props} style={{
            opacity: scrollY > 28 * windowHeight ? 0 : (scrollY - windowHeight * 23.9) / 100,
            transition: '0.25s ease-out',
        }}>
            <div className={styles.desktopContainer} style={{
                // translateY(-43.45%) translateX(-2.87%)
                // ue5: translateY(40.5%) translateX(-43.5%)
                transform: `scale(${scrollY > windowHeight * 26.4 ? Math.max(100, Math.min((scrollY - windowHeight * 26.4), 740)) : Math.max(100, Math.min(2000 - (scrollY - windowHeight * 24.5) * 2, 2000))}%) translateY(${Math.min(41.35, -43.45 + (Math.max(0, scrollY - windowHeight * 25.8)) / 10)}%) translateX(${Math.max(-44, -2.87 - (Math.max(0, scrollY - windowHeight * 25.8)) / 20)}%)`,
                transition: '0.2s linear',
            }}>
                <img src="./images/desktop/desktop.svg" />
            </div>

            <Caption title={"CULTIVATING PASSION"} subtitle={"I also loved playing & programming my own video games. But making match 3 in Python or modding Minecraft just wasn't satiating enough. "}/>
        </div>
        <div className={styles.scrollContainer}/>
    </>
}