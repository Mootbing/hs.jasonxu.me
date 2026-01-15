import Image from 'next/image'
import styles from './transportation.module.css'
import Caption from '@/app/components/caption/caption'
import { useContext } from 'react'
import { ScrollContext } from '@/app/contexts/scrollContext'
import TianjinLineArt from '@/app/components/tianjinLineArt/tianjinLineArt'

export default function Transportation ({...props}) {

    const {scrollY, windowHeight} = useContext(ScrollContext)

    return <>
        <div className={styles.primalContainer} {...props} style={{
            opacity: scrollY > 11.6 * windowHeight ? 0 : scrollY > 9.5 * windowHeight ? 1 : 0,
            transition: '0.05s ease-out',
        }}>
            <TianjinLineArt farness={1} tinted/>
            {scrollY < 11.5 * windowHeight && <Caption title={"CAPTIVATED BY TECHNOLOGY"} subtitle={"Furthermore, Tianjin was a bustling hub for transportation. I loved watching the high-speed trains at the stations or planes takeoff at its international airport."}/>}

            <div className={styles.train} style={{
                transform: `translateX(${((scrollY - (10 * windowHeight)) * 2 - 1000)}px)`,
            }}>
                <img src="./images/techScene/bulletTrain.svg" />
            </div>
            <div className={styles.plane} style={{
                transform: `translateX(${((scrollY - (10 * windowHeight)) * 2 - 800)}px) translateY(${-1 * ((scrollY - (10 * windowHeight)) * 2 - 800) / 4}px)`,
            }}>
                <img src="./images/techScene/plane.svg" />
            </div>
        </div>
        <div className={styles.scrollContainer}/>
    </>
}