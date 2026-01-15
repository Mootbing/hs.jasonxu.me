import Image from 'next/image'
import styles from './description.module.css'
import Navbar from '@/app/components/navbar/navbar'
import { ScrollContext } from '@/app/contexts/scrollContext'
import { useContext, useEffect, useReducer, useState } from 'react'
import Eraser from '@/app/components/eraser/eraser'

export default function Description ({index, ...props}) {

    const {scrollY, windowHeight} = useContext(ScrollContext)

    const copy = `THE FOLLOWING IS AN ACCOUNT OF
MY LIFE'S JOURNEY WHICH SCULPTED
MY CAREER CHOICE AND CORE VALUES`

    const [copyText, setCopyText] = useState("")
    const [copyDoneTyping, setCopyDoneTyping] = useState(false)

    useEffect(() => {
        setCopyDoneTyping(false)
        let i = 0
        const interval = setInterval(() => {
            setCopyText(
                copy.substring(0, i)
            )
            i++

            if (i > copy.length)
            {
                // setCopyDoneTyping(true)
                clearInterval(interval)
            }
        }, 25)
        return () => clearInterval(interval)
    }, [])
    
    return <>
        <div className={styles.primalContainer}{...props}  style={{
            opacity: scrollY > 1.5 * windowHeight ? 1 - (scrollY - 1.5 * windowHeight) / (windowHeight/2) : (scrollY - windowHeight * 1 * 1.5 + windowHeight) / 100,
            transition: '0.15s ease-out'
        }}>
            <div className={styles.groupContainer}>
                <center className={styles.textContainer}>
                    <p className={styles.disclaimerText}>
                        {copyText}
                    </p>
                    {copyDoneTyping && <div className={styles.slideUp}>
                        <p className={styles.timeSaverText}>
                            IF YOU&apos;RE LOOKING FOR MY PROJECTS & RESUME, SELECT BELOW 
                        </p>
                        {/* <p className={styles.recommenderText}>
                            BUT I RECOMMEND KEEP SCROLLING
                        </p> */}
                    </div>}
                </center>
                {copyDoneTyping && <div className={styles.navWrapper}>
                    <Navbar selected={"ABOUT ME"} />
                </div>}
                <Eraser farness={
                    Math.min(Math.max(0, 1 - (scrollY - windowHeight * 1 * 2 + windowHeight) / 1000), 1)
                }/>
            </div>
        </div>
        <div className={styles.scrollContainer}/>
    </>
}