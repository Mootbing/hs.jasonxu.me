import Image from 'next/image'
import styles from './livingInTianjin.module.css'
import Caption from '@/app/components/caption/caption'
import { useContext } from 'react'
import { ScrollContext } from '@/app/contexts/scrollContext'
import TianjinLineArt from '@/app/components/tianjinLineArt/tianjinLineArt'

export default function LivingInTianjin ({...props}) {

    const {scrollY, windowHeight} = useContext(ScrollContext)

    return <>
        <div className={styles.primalContainer}{...props}  style={{
            opacity: scrollY > 7.7 * windowHeight ? 0 : (scrollY - windowHeight * 6.5 + windowHeight) / 100,
            transition: '0.05s ease-out',
        }}>
            <TianjinLineArt farness={(scrollY - 6.5 * windowHeight) / 1000}/>
            <Caption style={{
                transform: `translateY(${-1 * Math.min((scrollY - 7 * windowHeight), 0)}px)`,
            }} title={"TIANJIN, CHINA"} subtitle={"Tianjin was my new home. It was a bright and bustling city that truly never slept."}/>
        </div>
        <div className={styles.scrollContainer}/>
    </>
}