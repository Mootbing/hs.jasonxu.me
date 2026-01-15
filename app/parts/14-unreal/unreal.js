import Image from 'next/image'
import styles from './unreal.module.css'
import { ScrollContext } from '@/app/contexts/scrollContext'
import { useContext, useEffect, useReducer, useState } from 'react'
import Clock from '@/app/components/clock/clock'
import Earth from '@/app/components/earth/earth'
import RandomSky from '@/app/components/randomSky/randomSky'
import Caption from '@/app/components/caption/caption'

export default function Unreal ({...props}) {

    const {scrollY, windowHeight} = useContext(ScrollContext)

    return <>
        <div className={styles.primalContainer} {...props} style={{
            opacity: scrollY > 30 * windowHeight ? 1 - ((scrollY - 30 * windowHeight) / 200) : scrollY > windowHeight * 28 ? 1 : 0,
        }}>
            <div className={styles.iconContainer}>
                <div className={styles.subwayChaos} style={{
                    transform: `rotate(-45deg) translateY(-${scrollY - windowHeight * 28.3}px)`,
                    opacity: Math.max((scrollY - 28.8 * windowHeight) / 400, 0),
                    transition: '0.25s ease-out'
                }}>
                    <img src="./images/unreal/subwayChaos.png" width={410} height={283} />
                </div>
                <div className={styles.loneCity} style={{
                    transform: `rotate(22deg) translateY(-${scrollY - windowHeight * 28.3}px)`,
                    opacity: Math.max((scrollY - 28.8 * windowHeight) / 400, 0),
                    transition: '0.25s ease-out'
                }}>
                    <img src="./images/unreal/loneCity.png" width={291} height={147} />
                </div>
                <div className={styles.freeThem} style={{
                    transform: `rotate(-2deg) translateY(${scrollY - windowHeight * 28.3}px)`,
                    opacity: Math.max((scrollY - 28.8 * windowHeight) / 400, 0),
                    transition: '0.25s ease-out'
                }}>
                    <img src="./images/unreal/freeThem.png" width={480} height={272} />
                </div>

                <div className={styles.bg} style={{
                    opacity: Math.max((scrollY - 28.5 * windowHeight) / 200, 0)
                }}>
                    <img src="./images/unreal/background.svg" />
                </div>
                <div className={styles.absIcon}>
                    <img src="./images/unreal/unreal.svg" />
                </div>
            </div>
                
            <Caption title={"UNREAL"} subtitle={"So I picked up learning Unreal Engine 4, the industry standard game engine, and got into 3D modeling & 2D Figma design."}/>
        </div>
        <div className={styles.scrollContainer}/>
    </>
}