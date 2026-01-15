import Image from 'next/image'
import styles from './python.module.css'
import { ScrollContext } from '@/app/contexts/scrollContext'
import { useContext, useEffect, useReducer, useState } from 'react'
import Clock from '@/app/components/clock/clock'
import Earth from '@/app/components/earth/earth'
import RandomSky from '@/app/components/randomSky/randomSky'
import Caption from '@/app/components/caption/caption'
import PythonIcon from '@/app/components/pythonIcon/pythonIcon'

export default function Python ({...props}) {

    const {scrollY, windowHeight} = useContext(ScrollContext)

    return <>
        <div className={styles.primalContainer} {...props} style={{
            opacity: scrollY > 24 * windowHeight ? 0 : (scrollY - windowHeight * 20.5) / 100,
            transition: '0.15s ease-out',
        }}>
            <div className={styles.iconContainer}>
                <div className={styles.constellation} style={{
                    opacity: 1 - (scrollY - 22.5 * windowHeight) / 100
                }}>
                    <img src="./images/python/constellation.svg" />
                </div>
                <PythonIcon farness={
                    (scrollY - 21 * windowHeight) / 1000
                } fillFarness={
                    (scrollY - 22.5 * windowHeight) / 500
                }/>
            </div>
            <Caption title={"ENTANGLED IN PYTHON"} subtitle={"Eventually, I realized my passion for programming, and that, in tandem with my passion for art, could result in truly amazing projects."}/>
        </div>
        <div className={styles.scrollContainer}/>
    </>
}