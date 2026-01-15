import Image from 'next/image'
import styles from './movingToAmerica.module.css'
import Caption from '@/app/components/caption/caption'
import { useContext } from 'react'
import { ScrollContext } from '@/app/contexts/scrollContext'
import TianjinLineArt from '@/app/components/tianjinLineArt/tianjinLineArt'
import SuburbanHouse from '@/app/components/suburbanHouse/suburbanHouse'

export default function MovingToAmerica ({...props}) {

    const {scrollY, windowHeight} = useContext(ScrollContext)

    // console.log(Math.min((scrollY - 13.5 * windowHeight) / 4, 0) + 180)

    return <>
        <div className={styles.primalContainer} {...props} style={{
            opacity: scrollY > 15 * windowHeight ? 0 : scrollY > 12.5 * windowHeight ? 1 : 1 - (scrollY - 12.5 * windowHeight) / 100,
            transition: '0.05s ease-out',
        }}>
            <div className={styles.toFlip}>
                <TianjinLineArt farness={1 - (scrollY - 13 * windowHeight) / 800} tinted style={{
                    transform: `rotate(${Math.max(0, Math.min((scrollY - 13.5 * windowHeight) / 4, 0) + 180)}deg)`,
                    transition: '0.15s ease-out'
                }}/>
                <SuburbanHouse farness={(scrollY - 13 * windowHeight) / 800} style={{
                    transform: `rotate(${Math.max(0, Math.min((scrollY - 13.5 * windowHeight) / 4, 0) + 180) - 180}deg)`,
                    transition: '0.15s ease-out'
                }}/>
            </div>
            <Caption title={"SUBURBAN LIVING"} subtitle={"At the age of 8, I moved back to the United States due to improving economic conditions since the 2008 Financial Crisis."}/>
        </div>
        <div className={styles.scrollContainer}/>
    </>
}