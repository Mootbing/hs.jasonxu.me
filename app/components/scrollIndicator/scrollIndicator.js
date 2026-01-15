import styles from './scrollIndicator.module.css'

export default function ScrollIndicator() {

    return <div className={styles.scrollImageContainer}>
        <img
            src="/images/scroll.svg"
            alt="Scroll Down"
            width={100}
            height={75}
            // className={styles.groupOneScrollImage}
        />
    </div>
}