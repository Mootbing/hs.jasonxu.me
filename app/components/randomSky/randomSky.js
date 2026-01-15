"use client"

import { useContext, useEffect, useRef } from "react";
import styles from './randomSky.module.css'
import { ScrollContext } from "@/app/contexts/scrollContext";

const starPos = Array(50).fill(0).map(() => {

    const size = Math.random() * 2;

    return {
        left: Math.random() * 100 + "%",
        top: Math.random() * 100 + "%",

        size: size,
    }
})

function Star ({pos, offset = 0, multiplier = 1}) {

    const {scrollY} = useContext(ScrollContext) ?? 0
    const {ref} = useRef()

    return <div ref={ref} className={styles.star} style={{
        left: pos.left,
        top: pos.top,

        width: pos.size,
        height: pos.size,

        // transition: '0.15s ease-out',

        transform: `translateY(-${((scrollY - offset) * multiplier) / (pos.size * 10)}px)`
    }}/>
}

export default function RandomSky ({dimTop = false, offset = 0, multiplier = 1, dimBottom = false, ...props}) {

    return <div className={styles.masterContainer} {...props}>
        <div className={styles.skyContainer}>
            {
                starPos.map((pos, index) => {
                    return <Star key={index} pos={pos} offset = {offset} multiplier={multiplier}/>
                })
            }
        </div>
        {dimTop ? <div className={styles.dimTop} /> : null}
        {dimBottom ? <div className={styles.dimBottom} /> : null}
    </div>
}