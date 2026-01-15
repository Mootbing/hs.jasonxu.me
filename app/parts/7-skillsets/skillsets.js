import Image from 'next/image'
import styles from './skillsets.module.css'
import Caption from '@/app/components/caption/caption'
import { useContext } from 'react'
import { ScrollContext } from '@/app/contexts/scrollContext'
import TianjinLineArt from '@/app/components/tianjinLineArt/tianjinLineArt'

export default function Skillsets ({...props}) {

    const {scrollY, windowHeight} = useContext(ScrollContext)

    return <>
        <div className={styles.primalContainer} {...props} style={{
            opacity: scrollY > 9.5 * windowHeight ? 0 : scrollY > 7.7 * windowHeight ? 1 : 0,
            transition: '0.15s ease-out',
        }}>
            <div className={styles.iconContainer}>
                <div className={styles.paintIcon} style={{
                    transform: scrollY < windowHeight * 9 ? `rotate(${Math.max(0, Math.min(9, (scrollY - windowHeight * 7.7) / 25))}deg) translateX(${Math.max(0, Math.min(9, (scrollY - windowHeight * 7.7) / 25))}%)` : `rotate(${9 - Math.max(0, Math.min(9, (scrollY - windowHeight * 9) / 25))}deg) translateX(${9 - Math.max(0, Math.min(9, (scrollY - windowHeight * 9) / 25))}%)`,
                    top: "15%",
                    right: "10%"
                }}>
                    <img src="./images/ipadScene/paint.svg" />
                </div>
                <div className={styles.wordIcon} style={{
                    transform: scrollY < windowHeight * 9 ? `rotate(-${Math.max(0, Math.min(9, (scrollY - windowHeight * 7.7) / 25))}deg) translateX(-${Math.max(0, Math.min(9, (scrollY - windowHeight * 7.7) / 25))}%)` : `rotate(-${9-Math.max(0, Math.min(9, (scrollY - windowHeight * 9) / 25))}deg) translateX(-${9-Math.max(0, Math.min(9, (scrollY - windowHeight * 9) / 25))}%)`,
                    top: "10%",
                    left: "10%"
                }}>
                    <img src="./images/ipadScene/word.svg" />
                </div>

                <div className={styles.ipad} style={{
                    transform: scrollY < windowHeight * 9 ? `translate(-50%, -50%) rotate(${Math.max(0, Math.min(6, (scrollY - windowHeight * 7.7) / 50))}deg) scale(${Math.min(1000, Math.max(100 - (scrollY - windowHeight * 8), 100))}%)` : `translate(-50%, -50%) rotate(${6 - Math.max(0, Math.min(6, (scrollY - windowHeight * 9) / 50))}deg) scale(${Math.min(1000, Math.max((scrollY - windowHeight * 9), 100))}%)`,
                }}>
                    <img src="./images/ipadScene/ipad.svg" />
                </div>

                <Caption title={"CAPTIVATED BY TECHNOLOGY"} subtitle={"I was exposed to tech at a young age. My school taught technology lessons and I remember being captivated in Microsoft's Word and Paint."}/>
            </div>

            <div className={styles.tianjinContainer} style={{
                transform: scrollY < windowHeight * 9 ? `rotate(${Math.max(0, Math.min(6, (scrollY - windowHeight * 7.7) / 50))}deg) scale(${Math.max(25, Math.min(100 - (scrollY - windowHeight * 7.7) / 3.25, 100))}%)` : `scale(${Math.max(25, Math.min((scrollY - windowHeight * 9) / 3.75, 100))}%) rotate(${6 - Math.max(0, Math.min(6, (scrollY - windowHeight * 9) / 50))}deg)`
            }}>
                <TianjinLineArt farness={1} />
            </div>
        </div>

        <div className={styles.scrollContainer}/>
    </>
}