import Image from 'next/image'
import styles from './sideBar.module.css'
import years from '@/app/data/years'

function SideBarItem ({year, selected = false, idx = 0, ...props}) {
    return <div className={styles.sideBarItemContainer} {...props}>
        {selected && <div className={styles.sideBarLeftContainer}>
            <p className={styles.sideBarYear}>
                {year.title}
            </p>
            <p className={styles.sideBarDescription}>
                {year.description}
            </p>
        </div>}
        <div className={styles.sideBarRightContainer}>
            <img src={"./images/timeline_" + (selected ? "selected" : "default") + ".svg"} /> 
            {/* here to hold space ^ */}
            <img className={styles.sideBarIndicator} src={"./images/timeline_" + (selected ? "selected" : "default") + ".svg"} />
            {idx === 0 ? <img className={styles.sideBarPath} src={"./images/timeline_bg_begin.svg"} /> : <img className={styles.sideBarPath} src={"./images/timeline_bg.svg"} />}
        </div>
    </div>
}

export default function SideBar ({selectedIndex = 0}) {
    return <div className={styles.sideBarContainer}>
        {
            years.map((year, index) => {
                return <SideBarItem
                    key={index}
                    idx={index}
                    year={year}
                    selected={selectedIndex === index}
                />
            })
        }
    </div>
}