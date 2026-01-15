import { ScrollContext } from "@/app/contexts/scrollContext";
import { useContext, useEffect, useRef, useState } from "react";

//use relative numbers (eg: contentStart = 1 for 1*windowHeight)
export default function LazyLoader ({contentStart = 0, contentEnd = 0, tolerance = 1, ...props}) {
    const {scrollY, windowHeight} = useContext(ScrollContext)

    const [height, setHeight] = useState(-1) //is a multiplyer value for incase resize
    const measure = useRef(null)

    useEffect(() => {
        if (measure.current) {
            const height = measure.current.getBoundingClientRect().height
            setHeight(height / windowHeight)
        }},
        [measure.current]
    )

    //allow initial height measurement
    if (height == -1 || scrollY > (contentStart * windowHeight - tolerance * windowHeight) && scrollY < (contentEnd * windowHeight + tolerance * windowHeight)) {
        return <div ref={measure} style={{opacity: height == -1 ? 0 : 1}}>{props.children}</div>
    }
    else {
        return <div style={{
            height: height * windowHeight,
        }}/>
    }
}