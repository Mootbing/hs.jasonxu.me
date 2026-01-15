import Image from 'next/image'
import styles from './title.module.css'
import Navbar from '@/app/components/navbar/navbar'
import VerticalNavbar from '@/app/components/verticalNavbar/verticalNavbar'
import { useContext, useEffect, useState } from 'react'
import { ScrollContext } from '@/app/contexts/scrollContext'
import ScrollIndicator from '@/app/components/scrollIndicator/scrollIndicator'

function BirthdayCountDown ({...props}) {
    const birthday = new Date(2006, 0, 19)
    const today = new Date()
    const birthdayThisYear = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate())

    const birthdayPassed = today >= birthdayThisYear

    const age = (birthdayPassed ? today.getFullYear() - birthday.getFullYear() : today.getFullYear() - birthday.getFullYear() - 1)

    const daysUntilNextBirthday = (birthdayThisYear - today) / (1000 * 60 * 60 * 24) + (birthdayPassed ? 365 : 0)

    return <div className={styles.birthdayCountDownContainer} {...props}>
        <img src="./images/birthday_cake.svg" className={styles.birthdayCakeImage}/>
        <p>Next chapter in {Math.round(daysUntilNextBirthday)}d</p>
        <div style={{width: 1, height: 19, backgroundColor: "#3B3B3B"}}/>
        <div className={styles.birthdayTransitionContainer}>
            <p>{age}</p>
            <img src="./images/arrow_right.svg" className={styles.birthdayTransitionArrow}/>
            <p style={{
                background: "linear-gradient(133deg, #8AA4FF 0%, #FF9DFB 100%)",  
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
            }}>{age + 1}</p>
        </div>
    </div>
}

export default function Title ({...props}) {

    const {scrollY, windowHeight} = useContext(ScrollContext)
    const [width, setWidth] = useState(globalThis.window?.innerWidth)
    const [height, setHeight] = useState(globalThis.window?.innerHeight)

    useEffect(() => {
        function handleResize() {
            setWidth(globalThis.window?.innerWidth)
            setHeight(globalThis.window?.innerHeight)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return <>
        <div className={styles.primalContainer} {...props} style={{
        }}>
            <div className={styles.titleContainer}>

                {height > 760 && <BirthdayCountDown style={{
                    // transform: `translateY(-${scrollY * 2}%)`,
                    opacity: 1 - (scrollY) / (windowHeight / 2),
                    // transition: '0.15s ease-out'
                }}/>}

                {width > 600 && <p className={styles.backgroundText} style={{
                    opacity: 1 - (scrollY) / (windowHeight / 2),
                    fontSize: Math.min(300, 300 * globalThis.window?.innerWidth / 1400)
                }}>
                    .JSON
                </p>}

                <div className={styles.titleImageSubContainer} style={{
                    transform: `scale(${Math.max(100, scrollY)}%)`,
                    opacity: 1 - (scrollY) / (windowHeight / 2),
                    transition: '0.15s ease-out'
                }}>
                    {height > 600 && <img src="./images/jason/jason.svg" className={styles.jasonImage}/>}
                    <h1 className={styles.nameTitle}  style={{
                        fontSize: Math.min(75, 75 * globalThis.window?.innerWidth / 600)
                    }}>
                        JASON XU
                    </h1>
                    <p className={styles.nameSubtitle} style={{
                        fontSize: Math.min(20, 20 * globalThis.window?.innerWidth / 500)
                    }}>
                        AN <span className={styles.highlight}>AWARD-WINNING</span> DEVELOPER & UI/UX DESIGNER PASSIONATE IN CREATING PROJECTS THAT <span className={styles.highlight}>MAKE A DIFFERENCE.</span>
                    </p>
                    <p className={styles.creditText} style={{
                        fontSize: Math.min(12, 12 * globalThis.window?.innerWidth / 500)
                    }}>
                        NO VIBE CODING BUT GOOD VIBES | DEV & DZN 100% BY JASON
                    </p>
                </div>
                {height > 760 && <div className={styles.scrollImageContainer} style={{
                        // transform: `translateY(${scrollY}%)`,
                        opacity: 1 - (scrollY) / (windowHeight / 2),
                        // transition: '0.15s ease-out'
                    }}>
                    <ScrollIndicator />
                </div>}
            </div>
            {/* left side nav */}
            {/* <div className={styles.leftSideBar} style={{
                transform: `translateX(-${scrollY}%)`,
                opacity: 1 - (scrollY) / (windowHeight / 2)
            }}>
                <VerticalNavbar selected={"ABOUT ME"} />
            </div> */}
            {/* right side text */}
            {/* <div className={styles.rightSideBar}> */}
            {/* <div style={{
                    transform: `translateX(${scrollY}%)`,
                    opacity: 1 - (scrollY) / (windowHeight / 2),
                    // transition: "0.1s ease-out"
                }}>
                <p className={styles.rightSideBarText}>
                    MADE WITH NEXT.JS REACT JAVASCRIPT CSS AND MOST IMPORTANTLY LOVE
                </p>
            </div> */}
            {/* </div> */}
        </div>
        <div className={styles.scrollContainer}/>
    </>
}