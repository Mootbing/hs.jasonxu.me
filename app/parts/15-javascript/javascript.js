import Image from 'next/image'
import styles from './javascript.module.css'
import { ScrollContext } from '@/app/contexts/scrollContext'
import { useContext, useEffect, useReducer, useState } from 'react'
import Clock from '@/app/components/clock/clock'
import Earth from '@/app/components/earth/earth'
import RandomSky from '@/app/components/randomSky/randomSky'
import Caption from '@/app/components/caption/caption'
import JSIcon from '@/app/components/jsIcon/jsIcon'

export default function Javascript ({...props}) {

    const {scrollY, windowHeight} = useContext(ScrollContext)

    return <>
        <div className={styles.primalContainer} {...props} style={{
            opacity: scrollY > 32.25 * windowHeight ? 1 - ((scrollY - 32.25 * windowHeight) / 200) : scrollY > 30.5 * windowHeight ? 1 : 0,
        }}>
            <div className={styles.iconContainer}>
                <JSIcon farness={
                    Math.min(1, (scrollY - 31 * windowHeight) / 700)
                }/>
            </div>
                
            <Caption title={"JAVASCRIPT FOR THE WORLD"} subtitle={
`I then learned JavaScript, hoping to culminate all the skills I've acquired for the past 17 years for good. Since then, I've undertaken various projects for causes beyond my own. This is where the story ends for now.`}/>
        </div>
        <div className={styles.scrollContainer}/>
    </>
}