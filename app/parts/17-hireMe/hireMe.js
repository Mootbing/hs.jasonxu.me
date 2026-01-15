import Image from 'next/image'
import styles from './hireMe.module.css'
import Navbar from '@/app/components/navbar/navbar'
import VerticalNavbar from '@/app/components/verticalNavbar/verticalNavbar'
import { useContext } from 'react'
import { ScrollContext } from '@/app/contexts/scrollContext'
import RandomSky from '@/app/components/randomSky/randomSky'
import Intersts from '@/app/components/interests/interests'

export default function HireMe ({index, ...props}) {

    const {scrollY, windowHeight} = useContext(ScrollContext)

    return <>
        <div className={styles.scrollContainer}/>
        <div className={styles.primalContainer} {...props} style={{
            opacity: (scrollY - windowHeight * 34.5) / 100,
            transition: '0.15s ease-out'
        }}>
            <RandomSky dimBottom offset={34 * windowHeight}/>
            <div className={styles.aboveStarsContainer}>
                <div className={styles.titleContainer}>
                    <div className={styles.textContainer}>
                        <img src="./images/jason/jason.svg" style={{marginBottom: "-50px"}} />
                        {/* <p className={styles.interest}>
                            TELL ME ABOUT YOUR PROJECT
                        </p>
                        <a className={styles.email} href="mailto:HIM@JASONXU.ME">
                            HIM@JASONXU.ME
                        </a>
                         */}
                        <Intersts />
                        <p className={styles.copy}>
                            Together, let&apos;s write the next chapters.
                        </p>
                    </div>
                </div>
                {/* <div className={styles.navContainer}>
                    <Navbar selected={"ABOUT ME"} />
                </div> */}
                <a href="./credits" style={{position: "absolute", left: 15, bottom: 15, color: "#303030", fontSize: 12, letterSpacing: "2px"}}>CREDITS</a>
                <p style={{position: "absolute", right: 15, bottom: 15, color: "#303030", fontSize: 12, letterSpacing: "2px"}}>DZN & DEV BY JASON XU &copy;2023</p>
            </div>
        </div>
    </>
}