import Image from 'next/image'
import styles from './scratch.module.css'
import { ScrollContext } from '@/app/contexts/scrollContext'
import { useContext, useEffect, useReducer, useState } from 'react'
import Clock from '@/app/components/clock/clock'
import Earth from '@/app/components/earth/earth'
import RandomSky from '@/app/components/randomSky/randomSky'
import Caption from '@/app/components/caption/caption'

export default function Scratch ({...props}) {

    const {scrollY, windowHeight} = useContext(ScrollContext)

    return <>
        <div className={styles.primalContainer} {...props} style={{
            opacity: scrollY > 20 * windowHeight ? 1 - (scrollY - 20 * windowHeight) / (windowHeight/2) : (scrollY - windowHeight * 17) / 100,
            transition: '0.15s ease-out',
        }}>
            <div className={styles.background} style={{
                transform: `scaleX(${Math.min(Math.max(0, (scrollY - 18.6 * windowHeight) / 5), 100)}%)`
            }}>
                <img src="./images/scratch/space.svg" style={{width: "100vw", height: "100vh", marginTop: -100}} />
            </div>
            <div className={styles.blocksContainer}>
                <div className={styles.onFlag} style={{
                    transform: `translateY(${2 * Math.min(0, ((scrollY - windowHeight * 17) / 5) - 200)}px) rotate(-${Math.min(45, Math.max((scrollY - 18.6 * windowHeight) / 10, 0))}deg)`
                }}>
                    <img src="./images/scratch/onFlag.svg" />
                </div>
                <div className={styles.connector} style={{
                    transform: `translateY(${Math.min(0, ((scrollY - windowHeight * 17) / 5) - 200)}px) rotate(-${Math.min(45, Math.max((scrollY - 18.6 * windowHeight) / 10, 0))}deg)`
                }}>
                    <img src="./images/scratch/connector.svg" />
                </div>
                <div className={styles.loop} style={{
                    transform: `translateY(${-2 * Math.min(0, ((scrollY - windowHeight * 17) / 10) - 100)}px) rotate(-${Math.min(45, Math.max((scrollY - 18.6 * windowHeight) / 10, 0))}deg)`
                }}>
                    <img src="./images/scratch/loop.svg" />
                </div>
            </div>
            {scrollY > windowHeight * 18.6 ? <Caption title={"SCRATCH"} subtitle={"But it unlocked a whole new world for me."}/> : <Caption title={"HAPPY ACCIDENT"} subtitle={"Having loved drawing in China, I brought that passion with me to the states. I then stumbled upon Scratch as a medium to animate my creations and began learning it."}/>}
        </div>
        <div className={styles.scrollContainer}/>
    </>
}